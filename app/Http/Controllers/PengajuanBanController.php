<?php

namespace App\Http\Controllers;

use App\Exports\PengajuanBanExport;
use App\Models\PengajuanBan;
use App\Providers\WhatsAppGateway;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class PengajuanBanController extends Controller
{
    private const ADMIN_LEVELS = ['admin', 'it_support'];
    private const CABANG_LIST  = ['MD', 'Part', 'MA Veteran', 'MA IB', 'MA SPH', 'MA PYK', 'MA Padang Panjang'];
    private const STORAGE_PATH = 'assets/images/pengajuan_ban';

    private function isAdmin(): bool
    {
        $user = Auth::user()->load('userLevel');
        return in_array($user->userLevel->kode_level ?? '', self::ADMIN_LEVELS);
    }

    private function saveFile(Request $request, string $field, string $prefix = ''): ?string
    {
        if (!$request->hasFile($field)) {
            return null;
        }
        $file     = $request->file($field);
        $filename = time() . '_' . $prefix . '_' . $file->getClientOriginalName();
        $file->move(public_path(self::STORAGE_PATH), $filename);
        return $filename;
    }

    private function deleteFile(?string $filename): void
    {
        if ($filename && file_exists(public_path(self::STORAGE_PATH . '/' . $filename))) {
            unlink(public_path(self::STORAGE_PATH . '/' . $filename));
        }
    }

    private function sendWaNotification(string $message): void
    {
        try {
            $config = DB::table('config_wa')->first();
            if ($config && $config->nomor_wa) {
                (new WhatsAppGateway())->sendText($config->nomor_wa, $message);
            }
        } catch (\Exception $e) {
            Log::error('WhatsApp notification failed: ' . $e->getMessage());
        }
    }

    public function index(Request $request)
    {
        $user    = Auth::user()->load('userLevel');
        $isAdmin = $this->isAdmin();
        $isKacab = $user->userLevel?->kode_level === 'kacab';

        $pengajuans = PengajuanBan::with('user')
            ->when($isKacab, fn($q) => $q->where('cabang', $user->cabang))
            ->when(!$isAdmin && !$isKacab, fn($q) => $q->where('user_id', $user->id))
            ->when($request->search, fn($q, $s) =>
                $q->where(fn($q2) =>
                    $q2->where('nama_driver', 'like', "%{$s}%")
                       ->orWhere('no_polisi', 'like', "%{$s}%")
                       ->orWhere('cabang', 'like', "%{$s}%")
                )
            )
            ->when($request->status, fn($q, $s) => $q->where('status', $s))
            ->when($isAdmin && $request->cabang, fn($q, $c) => $q->where('cabang', $c))
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('pengajuan-ban/index', [
            'pengajuans' => $pengajuans,
            'filters'    => $request->only(['search', 'status', 'cabang']),
            'isAdmin'    => $isAdmin,
            'isKacab'    => $isKacab,
            'kacabCabang' => $isKacab ? $user->cabang : null,
            'cabangList' => self::CABANG_LIST,
        ]);
    }

    public function create()
    {
        $user = Auth::user()->load('userLevel');

        abort_if($user->userLevel?->kode_level !== 'kacab', 403, 'Hanya Kepala Cabang yang dapat mengajukan.');

        return Inertia::render('pengajuan-ban/create', [
            'cabang' => $user->cabang,
        ]);
    }

    public function store(Request $request)
    {
        $authUser = Auth::user()->load('userLevel');

        abort_if($authUser->userLevel?->kode_level !== 'kacab', 403, 'Hanya Kepala Cabang yang dapat mengajukan.');

        $base = $request->validate([
            'tanggal_pengajuan'        => 'required|date',
            'nama_driver'              => 'required|string|max:255',
            'no_polisi'                => 'required|string|max:20',
            'jenis_kendaraan'          => 'required|string|max:255',
            'km_kendaraan'             => 'required|integer|min:0',
            'jenis_pengajuan'          => 'required|in:ban,fulkanisir',
            'tgl_penggantian_terakhir' => 'nullable|date',
            'posisi_ban_sebelumnya'    => 'nullable|array',
            'posisi_ban_sebelumnya.*'  => 'string',
            'posisi_ban_diajukan'      => 'required|array|min:1',
            'posisi_ban_diajukan.*'    => 'string',
            'jumlah_ban'               => 'required|integer|min:1',
            'ukuran_ban'               => 'required|string|max:50',
            'alasan_penggantian'       => 'nullable|required_if:jenis_pengajuan,ban|string',
            'foto_sebelum'   => 'required|array|min:1|max:6',
            'foto_sebelum.*' => 'image|max:5120',
        ]);

        $fotoSebelum = [];
        foreach ($request->file('foto_sebelum', []) as $i => $file) {
            $filename      = time() . '_before_' . $i . '_' . $file->getClientOriginalName();
            $file->move(public_path(self::STORAGE_PATH), $filename);
            $fotoSebelum[] = $filename;
        }

        $base['user_id']      = $authUser->id;
        $base['kacab_email']  = $authUser->email;
        $base['cabang']       = $authUser->cabang;
        $base['status']       = 'pending';
        $base['foto_sebelum'] = $fotoSebelum;

        PengajuanBan::create($base);

        $jenis   = $request->jenis_pengajuan === 'ban' ? 'Penggantian Ban' : 'Fulkanisir';
        $message = "*Pengajuan {$jenis} Baru*\n"
            . "Driver: {$request->nama_driver}\n"
            . "Cabang: {$authUser->cabang}\n"
            . "No. Polisi: {$request->no_polisi}\n"
            . "Kacab: {$authUser->name} ({$authUser->email})\n"
            . "Silakan review di sistem.";

        $this->sendWaNotification($message);

        return redirect()->route('pengajuan-ban.index')->with('success', 'Pengajuan berhasil dikirim.');
    }

    public function show(PengajuanBan $pengajuanBan)
    {
        $isAdmin = $this->isAdmin();

        if (!$isAdmin && $pengajuanBan->user_id !== Auth::id()) {
            abort(403);
        }

        return Inertia::render('pengajuan-ban/show', [
            'pengajuan' => $pengajuanBan->load('user'),
            'isAdmin'   => $isAdmin,
        ]);
    }

    public function destroy(PengajuanBan $pengajuanBan)
    {
        if (!$this->isAdmin() && $pengajuanBan->user_id !== Auth::id()) {
            abort(403);
        }

        foreach ($pengajuanBan->foto_sebelum ?? [] as $f) {
            $this->deleteFile($f);
        }
        $this->deleteFile($pengajuanBan->pdf_persetujuan);
        $this->deleteFile($pengajuanBan->kuitansi);

        foreach ($pengajuanBan->foto_sesudah ?? [] as $f) {
            $this->deleteFile($f);
        }
        foreach ($pengajuanBan->foto_toko ?? [] as $f) {
            $this->deleteFile($f);
        }

        $pengajuanBan->delete();

        return redirect()->route('pengajuan-ban.index')->with('success', 'Pengajuan berhasil dihapus.');
    }

    public function setuju(Request $request, PengajuanBan $pengajuanBan)
    {
        if (!$this->isAdmin()) {
            abort(403);
        }

        $request->validate([
            'pdf_persetujuan' => 'required|mimes:pdf|max:10240',
        ]);

        $this->deleteFile($pengajuanBan->pdf_persetujuan);
        $pdf = $this->saveFile($request, 'pdf_persetujuan', 'pdf');

        $pengajuanBan->update([
            'status'           => 'setuju',
            'pdf_persetujuan'  => $pdf,
            'alasan_penolakan' => null,
        ]);

        $message = "*Pengajuan Ban Disetujui*\n"
            . "Driver: {$pengajuanBan->nama_driver}\n"
            . "Cabang: {$pengajuanBan->cabang}\n"
            . "No. Polisi: {$pengajuanBan->no_polisi}\n"
            . "Silakan download surat perintah dan lanjutkan proses.";

        $this->sendWaNotification($message);

        return redirect()->back()->with('success', 'Pengajuan disetujui dan PDF berhasil diupload.');
    }

    public function tolak(Request $request, PengajuanBan $pengajuanBan)
    {
        if (!$this->isAdmin()) {
            abort(403);
        }

        $request->validate([
            'alasan_penolakan' => 'required|string|max:1000',
        ]);

        $pengajuanBan->update([
            'status'           => 'ditolak',
            'alasan_penolakan' => $request->alasan_penolakan,
        ]);

        $message = "*Pengajuan Ban Ditolak*\n"
            . "Driver: {$pengajuanBan->nama_driver}\n"
            . "Cabang: {$pengajuanBan->cabang}\n"
            . "No. Polisi: {$pengajuanBan->no_polisi}\n"
            . "Alasan: {$request->alasan_penolakan}";

        $this->sendWaNotification($message);

        return redirect()->back()->with('success', 'Pengajuan ditolak.');
    }

    public function selesaikan(Request $request, PengajuanBan $pengajuanBan)
    {
        if ($pengajuanBan->user_id !== Auth::id()) {
            abort(403);
        }

        if ($pengajuanBan->status !== 'setuju') {
            abort(422, 'Status tidak valid untuk aksi ini.');
        }

        $request->validate([
            'foto_sesudah'   => 'required|array|min:1|max:6',
            'foto_sesudah.*' => 'image|max:5120',
            'foto_toko'      => 'nullable|array|max:6',
            'foto_toko.*'    => 'image|max:5120',
            'kuitansi'       => 'required|image|max:5120',
        ]);

        $fotoSesudah = [];
        foreach ($request->file('foto_sesudah', []) as $i => $file) {
            $filename      = time() . '_sesudah_' . $i . '_' . $file->getClientOriginalName();
            $file->move(public_path(self::STORAGE_PATH), $filename);
            $fotoSesudah[] = $filename;
        }

        $fotoToko = [];
        foreach ($request->file('foto_toko', []) as $i => $file) {
            $filename   = time() . '_toko_' . $i . '_' . $file->getClientOriginalName();
            $file->move(public_path(self::STORAGE_PATH), $filename);
            $fotoToko[] = $filename;
        }

        $kuitansi = $this->saveFile($request, 'kuitansi', 'kuitansi');

        $pengajuanBan->update([
            'status'       => 'diperiksa',
            'foto_sesudah' => $fotoSesudah,
            'foto_toko'    => $fotoToko,
            'kuitansi'     => $kuitansi,
        ]);

        $message = "*Pengajuan Ban - Penyelesaian Diupload*\n"
            . "Driver: {$pengajuanBan->nama_driver}\n"
            . "Cabang: {$pengajuanBan->cabang}\n"
            . "No. Polisi: {$pengajuanBan->no_polisi}\n"
            . "Silakan periksa dan konfirmasi selesai.";

        $this->sendWaNotification($message);

        return redirect()->back()->with('success', 'Berkas penyelesaian berhasil diupload. Status: Diperiksa.');
    }

    public function finish(PengajuanBan $pengajuanBan)
    {
        if (!$this->isAdmin()) {
            abort(403);
        }

        if ($pengajuanBan->status !== 'diperiksa') {
            abort(422, 'Status tidak valid untuk aksi ini.');
        }

        $pengajuanBan->update(['status' => 'finish']);

        return redirect()->back()->with('success', 'Pengajuan dinyatakan selesai.');
    }

    public function export(Request $request)
    {
        if (!$this->isAdmin()) {
            abort(403);
        }

        $filters  = $request->only(['cabang', 'status', 'bulan', 'tahun']);
        $filename = 'laporan_pengajuan_ban_' . now()->format('Y-m-d_His') . '.xlsx';

        return Excel::download(new PengajuanBanExport($filters), $filename);
    }
}

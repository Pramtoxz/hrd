<?php

namespace App\Http\Controllers;

use App\Models\BukuTamu;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Providers\WhatsAppGateway;

class BukuTamuController extends Controller
{

    public function index(Request $request)
    {
        $search = $request->input('search');
        
        $bukutamu = BukuTamu::query()
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('nama_lengkap', 'like', "%{$search}%")
                      ->orWhere('instansi', 'like', "%{$search}%")
                      ->orWhere('nomor_telepon', 'like', "%{$search}%")
                      ->orWhere('bertemu_dengan', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();
        
        return Inertia::render('bukutamu/index', [
            'bukutamu' => $bukutamu,
            'filters' => ['search' => $search],
        ]);
    }

    public function create()
    {
        return Inertia::render('bukutamu/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_lengkap' => 'required|string|max:255',
            'instansi' => 'required|string|max:255',
            'tanggal' => 'required|date',
            'nomor_telepon' => 'required|string|max:20',
            'bertemu_dengan' => 'required|string|max:255',
            'keperluan' => 'required|string',
        ]);

        $validated['status'] = false;

        BukuTamu::create($validated);

        return redirect()->route('bukutamu.index');
    }

    public function edit(BukuTamu $bukutamu)
    {
        return Inertia::render('bukutamu/edit', ['bukutamu' => $bukutamu]);
    }

    public function update(Request $request, BukuTamu $bukutamu)
    {
        $validated = $request->validate([
            'nama_lengkap' => 'required|string|max:255',
            'instansi' => 'required|string|max:255',
            'tanggal' => 'required|date',
            'nomor_telepon' => 'required|string|max:20',
            'bertemu_dengan' => 'required|string|max:255',
            'keperluan' => 'required|string',
            'status' => 'boolean',
        ]);

        $bukutamu->update($validated);

        return redirect()->route('bukutamu.index');
    }

    public function destroy(BukuTamu $bukutamu)
    {
        $bukutamu->delete();
        return redirect()->route('bukutamu.index');
    }
    
    public function toggleStatus(BukuTamu $bukutamu)
    {
        $bukutamu->update([
            'status' => !$bukutamu->status
        ]);
        
        return redirect()->route('bukutamu.index');
    }

    public function publicForm()
    {
        // Get published releases with photos
        $releases = \App\Models\Release::with(['fotos'])
            ->where('status', true)
            ->latest()
            ->get()
            ->map(function ($release) {
                return [
                    'id' => $release->id,
                    'judul' => $release->judul,
                    'isi_berita' => $release->isi_berita,
                    'tanggal_publikasi' => $release->tanggal_publikasi,
                    'fotos' => $release->fotos->first() ? [
                        'foto1' => $release->fotos->first()->foto1,
                        'foto2' => $release->fotos->first()->foto2,
                        'foto3' => $release->fotos->first()->foto3,
                        'foto4' => $release->fotos->first()->foto4,
                        'foto5' => $release->fotos->first()->foto5,
                    ] : null,
                ];
            });
        
        return Inertia::render('tamu/form', [
            'releases' => $releases,
        ]);
    }

    public function publicStore(Request $request)
    {
        $validated = $request->validate([
            'nama_lengkap' => 'required|string|max:255',
            'instansi' => 'required|string|max:255',
            'nomor_telepon' => 'required|string|max:20',
            'bertemu_dengan' => 'required|string|max:255',
            'keperluan' => 'required|string',
        ]);

        $validated['tanggal'] = now()->toDateString();
        $validated['status'] = false;

        $tamu = BukuTamu::create($validated);

        try {
            $message = "*Tamu Baru*\n";
            $message .= "Nama: {$tamu->nama_lengkap}\n";
            $message .= "Instansi: {$tamu->instansi}\n";
            $message .= "No. Telepon: {$tamu->nomor_telepon}\n";
            $message .= "Bertemu Dengan: {$tamu->bertemu_dengan}\n";
            $message .= "Keperluan: {$tamu->keperluan}\n";
            $message .= "Tanggal: " . now()->format('d/m/Y H:i');

            $config = \DB::table('config_wa')->first();
            if ($config && $config->nomor_wa) {
                $wa = new WhatsAppGateway();
                $wa->sendText($config->nomor_wa, $message);
            }
        } catch (\Exception $e) {
            \Log::error('WhatsApp notification failed: ' . $e->getMessage());
        }

        return redirect()->route('tamu.form')->with('success', true);
    }
}

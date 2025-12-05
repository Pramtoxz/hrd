<?php

namespace App\Http\Controllers;

use App\Models\Aset;
use Illuminate\Http\Request;
use Inertia\Inertia;
use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\Image\SvgImageBackEnd;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;
use BaconQrCode\Writer;

class AsetController extends Controller
{


    public function getQrCode($id)
    {
        try {
            $aset = Aset::findOrFail($id);
            $url = route('cek.qrcode', ['id' => $aset->id]);
            $renderer = new ImageRenderer(
                new RendererStyle(200, 1), 
                new SvgImageBackEnd()
            );
            $writer = new Writer($renderer);
            $qrCodeSvg = $writer->writeString($url);
            return response()->json([
                'success'   => true,
                'qrCode'    => $qrCodeSvg,
                'kodeAset'  => $aset->kode_aset,
                'namaAset'  => $aset->nama_aset,
                'url'       => $url,
            ]);
    
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Terjadi kesalahan: ' . $e->getMessage()], 500);
        }
    }

     public function lihat($id)
    {
        $aset = Aset::findOrFail($id);
        return view('qrcode', compact('aset'));
    }

    public function index(Request $request)
    {
        $search = $request->input('search');
        
        $asets = Aset::query()
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('kode_aset', 'like', "%{$search}%")
                      ->orWhere('nama_aset', 'like', "%{$search}%")
                      ->orWhere('pemilik_aset', 'like', "%{$search}%")
                      ->orWhere('lokasi', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();
        
        return Inertia::render('asets/index', [
            'asets' => $asets,
            'filters' => ['search' => $search],
        ]);
    }

    public function create()
    {
        // Generate next kode aset
        $lastAset = Aset::latest('id')->first();
        $nextNumber = $lastAset ? intval(substr($lastAset->kode_aset, 4)) + 1 : 1;
        $nextKodeAset = 'AST-' . str_pad($nextNumber, 4, '0', STR_PAD_LEFT);
        
        return Inertia::render('asets/create', [
            'nextKodeAset' => $nextKodeAset,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode_aset' => 'nullable|string|unique:asets',
            'nama_aset' => 'required|string',
            'spesifikasi' => 'nullable|string',
            'pemilik_aset' => 'nullable|string',
            'kritikalitas' => 'required|in:Rendah,Sedang,Tinggi,Kritis',
            'lokasi' => 'nullable|string',
            'label' => 'nullable|string',
            'tanggal_perolehan' => 'nullable|date',
            'usia_aset' => 'nullable|integer',
            'status' => 'required|in:Aktif,Maintenance,Rusak,Dihapus',
            'metode_pemusnahan' => 'nullable|string',
            'keterangan' => 'nullable|string',
            'foto_aset' => 'nullable|image|max:2048',
        ]);

        // Auto generate kode aset if not provided
        if (empty($validated['kode_aset'])) {
            $lastAset = Aset::latest('id')->first();
            $nextNumber = $lastAset ? intval(substr($lastAset->kode_aset, 4)) + 1 : 1;
            $validated['kode_aset'] = 'AST-' . str_pad($nextNumber, 4, '0', STR_PAD_LEFT);
        }

        if ($request->hasFile('foto_aset')) {
            $file = $request->file('foto_aset');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('assets/images/foto_aset'), $filename);
            $validated['foto_aset'] = $filename;
        }

        Aset::create($validated);

        return redirect()->route('asets.index');
    }

    public function edit(Aset $aset)
    {
        return Inertia::render('asets/edit', ['aset' => $aset]);
    }

    public function update(Request $request, Aset $aset)
    {
        $validated = $request->validate([
            'kode_aset' => 'required|string|unique:asets,kode_aset,' . $aset->id,
            'nama_aset' => 'required|string',
            'spesifikasi' => 'nullable|string',
            'pemilik_aset' => 'nullable|string',
            'kritikalitas' => 'required|in:Rendah,Sedang,Tinggi,Kritis',
            'lokasi' => 'nullable|string',
            'label' => 'nullable|string',
            'tanggal_perolehan' => 'nullable|date',
            'usia_aset' => 'nullable|integer',
            'status' => 'required|in:Aktif,Maintenance,Rusak,Dihapus',
            'metode_pemusnahan' => 'nullable|string',
            'keterangan' => 'nullable|string',
            'foto_aset' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('foto_aset')) {
            // Delete old photo if exists
            if ($aset->foto_aset && file_exists(public_path('assets/images/foto_aset/' . $aset->foto_aset))) {
                unlink(public_path('assets/images/foto_aset/' . $aset->foto_aset));
            }
            
            $file = $request->file('foto_aset');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('assets/images/foto_aset'), $filename);
            $validated['foto_aset'] = $filename;
        }

        $aset->update($validated);

        return redirect()->route('asets.index');
    }

    public function destroy(Aset $aset)
    {
        // Delete photo if exists
        if ($aset->foto_aset && file_exists(public_path('assets/images/foto_aset/' . $aset->foto_aset))) {
            unlink(public_path('assets/images/foto_aset/' . $aset->foto_aset));
        }
        
        $aset->delete();
        return redirect()->route('asets.index');
    }
}

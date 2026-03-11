<?php

namespace App\Http\Controllers;

use App\Models\Release;
use App\Models\PressRelease;
use App\Models\FotoRelease;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReleaseController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $status = $request->input('status');
        $user = Auth::user()->load('userLevel');
        $userLevel = $user->userLevel->kode_level ?? null;
        
        $isAdmin = in_array($userLevel, ['admin', 'it_support']);
        
        $releases = Release::with(['user', 'pressRelease'])
            ->when(!$isAdmin, function ($query) use ($user) {
                $query->where('user_id', $user->id);
            })
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('judul', 'like', "%{$search}%")
                      ->orWhere('isi_berita', 'like', "%{$search}%");
                });
            })
            ->when($status !== null, function ($query) use ($status) {
                $query->where('status', $status === 'true');
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();
        
        return Inertia::render('release/index', [
            'releases' => $releases,
            'filters' => ['search' => $search, 'status' => $status],
            'isAdmin' => $isAdmin,
        ]);
    }

    public function create()
    {
        // Get only pending press releases (status=false) for writer reference
        $pressReleases = PressRelease::with('fotos')
            ->where('status', false)
            ->select('id', 'what', 'who', 'when', 'where', 'why', 'how', 
                    'pemberi_kutipan_1', 'isi_kutipan_1',
                    'pemberi_kutipan_2', 'isi_kutipan_2', 
                    'pemberi_kutipan_3', 'isi_kutipan_3', 'status')
            ->latest()
            ->get();
            
        return Inertia::render('release/create', [
            'pressReleases' => $pressReleases,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string',
            'isi_berita' => 'required|string',
            'tanggal_publikasi' => 'required|date',
            'press_release_id' => 'nullable|exists:press_release,id',
            'use_press_release_photos' => 'boolean',
            'foto1' => 'nullable|image|max:2048',
            'foto2' => 'nullable|image|max:2048',
            'foto3' => 'nullable|image|max:2048',
            'foto4' => 'nullable|image|max:2048',
            'foto5' => 'nullable|image|max:2048',
            'deskripsi_foto1' => 'nullable|string',
            'deskripsi_foto2' => 'nullable|string',
            'deskripsi_foto3' => 'nullable|string',
            'deskripsi_foto4' => 'nullable|string',
            'deskripsi_foto5' => 'nullable|string',
        ]);

        $validated['user_id'] = Auth::id();
        $validated['status'] = false;

        $release = Release::create($validated);
        $fotoData = [];
        
        if ($request->use_press_release_photos && $request->press_release_id) {
            $pressRelease = PressRelease::with('fotos')->find($request->press_release_id);
            if ($pressRelease && $pressRelease->fotos->first()) {
                $prFotos = $pressRelease->fotos->first();
                
                for ($i = 1; $i <= 5; $i++) {
                    $key = "foto{$i}";
                    $descKey = "deskripsi_foto{$i}";
                    if ($prFotos->$key) {
                        $sourcePath = public_path('assets/images/press_release/' . $prFotos->$key);
                        if (file_exists($sourcePath)) {
                            $newFilename = time() . "_{$i}_" . $prFotos->$key;
                            $destPath = public_path('assets/images/release/' . $newFilename);
                            copy($sourcePath, $destPath);
                            $fotoData[$key] = $newFilename;
                            
                            // Copy description from press release if exists
                            if ($prFotos->$descKey) {
                                $fotoData[$descKey] = $prFotos->$descKey;
                            }
                        }
                    }
                }
            }
        }
        
        for ($i = 1; $i <= 5; $i++) {
            $key = "foto{$i}";
            $descKey = "deskripsi_foto{$i}";
            if ($request->hasFile($key)) {
                $file = $request->file($key);
                $filename = time() . "_{$i}_" . $file->getClientOriginalName();
                $file->move(public_path('assets/images/release'), $filename);
                $fotoData[$key] = $filename;
            }
            // Add description for manual photos
            if ($request->filled($descKey) && !isset($fotoData[$descKey])) {
                $fotoData[$descKey] = $request->input($descKey);
            }
        }

        if (!empty($fotoData)) {
            $fotoData['release_id'] = $release->id;
            FotoRelease::create($fotoData);
        }

        return redirect()->route('release.index');
    }

    public function edit(Release $release)
    {
        $user = Auth::user()->load('userLevel');
        $isAdmin = in_array($user->userLevel->kode_level ?? '', ['admin', 'it_support']);
        
        $pressReleases = PressRelease::with('fotos')
            ->where('status', false)
            ->select('id', 'what', 'who', 'when', 'where', 'why', 'how', 
                    'pemberi_kutipan_1', 'isi_kutipan_1',
                    'pemberi_kutipan_2', 'isi_kutipan_2', 
                    'pemberi_kutipan_3', 'isi_kutipan_3', 'status')
            ->latest()
            ->get();
        
        return Inertia::render('release/edit', [
            'release' => $release->load(['fotos', 'pressRelease']),
            'pressReleases' => $pressReleases,
            'isAdmin' => $isAdmin,
        ]);
    }

    public function update(Request $request, Release $release)
    {
        $user = Auth::user()->load('userLevel');
        $userLevel = $user->userLevel->kode_level ?? null;
        $isAdmin = in_array($userLevel, ['admin', 'it_support']);

        $validated = $request->validate([
            'judul' => 'required|string',
            'isi_berita' => 'required|string',
            'tanggal_publikasi' => 'required|date',
            'press_release_id' => 'nullable|exists:press_release,id',
            'status' => 'boolean',
            'foto1' => 'nullable|image|max:2048',
            'foto2' => 'nullable|image|max:2048',
            'foto3' => 'nullable|image|max:2048',
            'foto4' => 'nullable|image|max:2048',
            'foto5' => 'nullable|image|max:2048',
            'deskripsi_foto1' => 'nullable|string',
            'deskripsi_foto2' => 'nullable|string',
            'deskripsi_foto3' => 'nullable|string',
            'deskripsi_foto4' => 'nullable|string',
            'deskripsi_foto5' => 'nullable|string',
            'deleted_photos' => 'nullable|array',
        ]);
        
        if (!$isAdmin) {
            unset($validated['status']);
        }

        $release->update($validated);
        
        $foto = $release->fotos()->first();
        $fotoData = [];
        
        if ($request->has('deleted_photos') && $foto) {
            foreach ($request->deleted_photos as $key) {
                if ($foto->$key && file_exists(public_path('assets/images/release/' . $foto->$key))) {
                    unlink(public_path('assets/images/release/' . $foto->$key));
                }
                $fotoData[$key] = null;
            }
        }
        
        for ($i = 1; $i <= 5; $i++) {
            $key = "foto{$i}";
            $descKey = "deskripsi_foto{$i}";
            if ($request->hasFile($key)) {
                if ($foto && $foto->$key && file_exists(public_path('assets/images/release/' . $foto->$key))) {
                    unlink(public_path('assets/images/release/' . $foto->$key));
                }
                
                $file = $request->file($key);
                $filename = time() . "_{$i}_" . $file->getClientOriginalName();
                $file->move(public_path('assets/images/release'), $filename);
                $fotoData[$key] = $filename;
            }
            // Add description for manual photos
            if ($request->filled($descKey)) {
                $fotoData[$descKey] = $request->input($descKey);
            }
        }

        if (!empty($fotoData)) {
            if ($foto) {
                $foto->update($fotoData);
            } else {
                $fotoData['release_id'] = $release->id;
                FotoRelease::create($fotoData);
            }
        }

        return redirect()->route('release.index');
    }

    public function destroy(Release $release)
    {
        $foto = $release->fotos()->first();
        if ($foto) {
            for ($i = 1; $i <= 5; $i++) {
                $key = "foto{$i}";
                if ($foto->$key && file_exists(public_path('assets/images/release/' . $foto->$key))) {
                    unlink(public_path('assets/images/release/' . $foto->$key));
                }
            }
            $foto->delete();
        }
        
        $release->delete();
        return redirect()->route('release.index');
    }
    
    public function toggleStatus(Release $release)
    {
        $release->update([
            'status' => !$release->status
        ]);
        
        return redirect()->route('release.index');
    }
    
    public function getPressReleasePhotos($id)
    {
        $pressRelease = PressRelease::with('fotos')->find($id);
        
        if (!$pressRelease || !$pressRelease->fotos->first()) {
            return response()->json(['photos' => [], 'descriptions' => []]);
        }
        
        $fotos = $pressRelease->fotos->first();
        $photos = [];
        $descriptions = [];
        
        for ($i = 1; $i <= 5; $i++) {
            $key = "foto{$i}";
            $descKey = "deskripsi_foto{$i}";
            if ($fotos->$key) {
                $photos[$key] = asset('assets/images/press_release/' . $fotos->$key);
                $descriptions[$descKey] = $fotos->$descKey ?? '';
            }
        }
        
        return response()->json(['photos' => $photos, 'descriptions' => $descriptions]);
    }
}
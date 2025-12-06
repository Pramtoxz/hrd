<?php

namespace App\Http\Controllers;

use App\Models\PressRelease;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Providers\WhatsAppGateway;
use App\Models\FotoPressRelease;

class PressReleaseController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $status = $request->input('status');
        $user = auth()->user()->load('userLevel');
        $userLevel = $user->userLevel->kode_level ?? null;
        
        $isAdmin = in_array($userLevel, ['admin', 'super_admin']);
        
        $releases = PressRelease::with('user')
            ->when(!$isAdmin, function ($query) use ($user) {
                $query->where('user_id', $user->id);
            })
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('what', 'like', "%{$search}%")
                      ->orWhere('who', 'like', "%{$search}%")
                      ->orWhere('where', 'like', "%{$search}%");
                });
            })
            ->when($status !== null, function ($query) use ($status) {
                $query->where('status', $status === 'true');
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();
        
        return Inertia::render('press-release/index', [
            'releases' => $releases,
            'filters' => ['search' => $search, 'status' => $status],
            'isAdmin' => $isAdmin,
        ]);
    }

    public function create()
    {
        return Inertia::render('press-release/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'what' => 'required|string',
            'who' => 'required|string',
            'when' => 'required|string',
            'where' => 'required|string',
            'why' => 'required|string',
            'how' => 'required|string',
            'pemberi_kutipan' => 'nullable|string',
            'isi_kutipan' => 'nullable|string',
            'foto1' => 'nullable|image|max:2048',
            'foto2' => 'nullable|image|max:2048',
            'foto3' => 'nullable|image|max:2048',
            'foto4' => 'nullable|image|max:2048',
            'foto5' => 'nullable|image|max:2048',
        ]);

        $validated['user_id'] = auth()->id();
        $validated['status'] = false;

        $release = PressRelease::create($validated);
        $fotoData = [];
        for ($i = 1; $i <= 5; $i++) {
            $key = "foto{$i}";
            if ($request->hasFile($key)) {
                $file = $request->file($key);
                $filename = time() . "_{$i}_" . $file->getClientOriginalName();
                $file->move(public_path('assets/images/press_release'), $filename);
                $fotoData[$key] = $filename;
            }
        }

        if (!empty($fotoData)) {
            $fotoData['press_release_id'] = $release->id;
            FotoPressRelease::create($fotoData);
        }
        try {
            $user = auth()->user()->load('userLevel');
            $userName = $user->name;
            
            $message = "*Press Release Baru*\n";
            $message .= "Dari: {$userName}\n";
            $message .= "Silakan Review dan Approve di sistem.";

            $config = \DB::table('config_wa')->first();
            if ($config && $config->nomor_wa) {
                $wa = new WhatsAppGateway();
                $wa->sendText($config->nomor_wa, $message);
            }
        } catch (\Exception $e) {
            \Log::error('WhatsApp notification failed: ' . $e->getMessage());
        }

        return redirect()->route('press-release.index');
    }

    public function edit(PressRelease $pressRelease)
    {
        $user = auth()->user()->load('userLevel');
        $isAdmin = in_array($user->userLevel->kode_level ?? '', ['admin', 'super_admin']);
        
        return Inertia::render('press-release/edit', [
            'release' => $pressRelease->load('fotos'),
            'isAdmin' => $isAdmin,
        ]);
    }

    public function update(Request $request, PressRelease $pressRelease)
    {
        $user = auth()->user()->load('userLevel');
        $userLevel = $user->userLevel->kode_level ?? null;
        $isAdmin = in_array($userLevel, ['admin', 'super_admin']);
        

        $validated = $request->validate([
            'what' => 'required|string',
            'who' => 'required|string',
            'when' => 'required|string',
            'where' => 'required|string',
            'why' => 'required|string',
            'how' => 'required|string',
            'pemberi_kutipan' => 'nullable|string',
            'isi_kutipan' => 'nullable|string',
            'status' => 'boolean',
            'foto1' => 'nullable|image|max:2048',
            'foto2' => 'nullable|image|max:2048',
            'foto3' => 'nullable|image|max:2048',
            'foto4' => 'nullable|image|max:2048',
            'foto5' => 'nullable|image|max:2048',
        ]);
        if (!$isAdmin) {
            unset($validated['status']);
        }

        $pressRelease->update($validated);
        $foto = $pressRelease->fotos()->first();
        $fotoData = [];
        
        for ($i = 1; $i <= 5; $i++) {
            $key = "foto{$i}";
            if ($request->hasFile($key)) {
                if ($foto && $foto->$key && file_exists(public_path('assets/images/press_release/' . $foto->$key))) {
                    unlink(public_path('assets/images/press_release/' . $foto->$key));
                }
                
                $file = $request->file($key);
                $filename = time() . "_{$i}_" . $file->getClientOriginalName();
                $file->move(public_path('assets/images/press_release'), $filename);
                $fotoData[$key] = $filename;
            }
        }

        if (!empty($fotoData)) {
            if ($foto) {
                $foto->update($fotoData);
            } else {
                $fotoData['press_release_id'] = $pressRelease->id;
                FotoPressRelease::create($fotoData);
            }
        }

        return redirect()->route('press-release.index');
    }

    public function destroy(PressRelease $pressRelease)
    {
        $user = auth()->user()->load('userLevel');
        $userLevel = $user->userLevel->kode_level ?? null;
        $isAdmin = in_array($userLevel, ['admin', 'super_admin']);
        

        // Delete photos
        $foto = $pressRelease->fotos()->first();
        if ($foto) {
            for ($i = 1; $i <= 5; $i++) {
                $key = "foto{$i}";
                if ($foto->$key && file_exists(public_path('assets/images/press_release/' . $foto->$key))) {
                    unlink(public_path('assets/images/press_release/' . $foto->$key));
                }
            }
            $foto->delete();
        }
        
        $pressRelease->delete();
        return redirect()->route('press-release.index');
    }
    
    public function toggleStatus(PressRelease $pressRelease)
    {
        $pressRelease->update([
            'status' => !$pressRelease->status
        ]);
        
        return redirect()->route('press-release.index');
    }
}

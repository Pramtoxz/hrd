<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\User;
use \App\Models\UserLevel;
use Inertia\Inertia;

class UserController extends Controller
{
    private const CABANG_LIST = ['MD', 'Part', 'MA Veteran', 'MA IB', 'MA SPH', 'MA PYK', 'MA Padang Panjang'];
    public function index(Request $request)
    {
        $search = $request->input('search');
        
        // Exclude it_support from user list
        $users = User::with('userLevel')
            ->whereHas('userLevel', function ($query) {
                $query->where('kode_level', '!=', 'it_support');
            })
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                      ->orWhere('email', 'like', "%{$search}%")
                      ->orWhereHas('userLevel', function ($q) use ($search) {
                          $q->where('nama_level', 'like', "%{$search}%");
                      });
                });
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();
        
        return Inertia::render('users/index', [
            'users' => $users,
            'filters' => ['search' => $search],
        ]);
    }

    public function create()
    {
        $userLevels = UserLevel::where('status_aktif', true)
            ->where('kode_level', '!=', 'it_support')
            ->get(['id', 'nama_level', 'kode_level']);

        return Inertia::render('users/create', [
            'userLevels' => $userLevels,
            'cabangList' => self::CABANG_LIST,
        ]);
    }

    public function store(Request $request)
    {
        $userLevel = UserLevel::find($request->user_level_id);
        $isKacab   = $userLevel && $userLevel->kode_level === 'kacab';

        if ($userLevel && $userLevel->kode_level === 'it_support') {
            return redirect()->back()->withErrors(['user_level_id' => 'Tidak dapat membuat user dengan level IT Support']);
        }

        $validated = $request->validate([
            'name'          => 'required|string|max:255',
            'email'         => 'required|email|unique:users',
            'password'      => 'required|min:8',
            'user_level_id' => 'required|exists:user_levels,id',
            'cabang'        => $isKacab ? 'required|string' : 'nullable',
        ]);

        $validated['password'] = bcrypt($validated['password']);

        User::create($validated);

        return redirect()->route('users.index');
    }

    public function edit(User $user)
    {
        if ($user->userLevel && $user->userLevel->kode_level === 'it_support') {
            return redirect()->route('users.index')->with('error', 'IT Support tidak dapat diedit');
        }

        $userLevels = UserLevel::where('status_aktif', true)
            ->where('kode_level', '!=', 'it_support')
            ->get(['id', 'nama_level', 'kode_level']);

        return Inertia::render('users/edit', [
            'user'       => $user->load('userLevel'),
            'userLevels' => $userLevels,
            'cabangList' => self::CABANG_LIST,
        ]);
    }

    public function update(Request $request, User $user)
    {
        // Prevent updating it_support
        if ($user->userLevel && $user->userLevel->kode_level === 'it_support') {
            return redirect()->route('users.index')->with('error', 'IT Support tidak dapat diupdate');
        }
        
        $userLevel = UserLevel::find($request->user_level_id);
        $isKacab   = $userLevel && $userLevel->kode_level === 'kacab';

        $validated = $request->validate([
            'name'          => 'required|string|max:255',
            'email'         => 'required|email|unique:users,email,' . $user->id,
            'password'      => 'nullable|min:8',
            'user_level_id' => 'required|exists:user_levels,id',
            'cabang'        => $isKacab ? 'required|string' : 'nullable',
        ]);

        // Prevent updating to it_support level
        if ($userLevel && $userLevel->kode_level === 'it_support') {
            return redirect()->back()->withErrors(['user_level_id' => 'Tidak dapat mengubah user menjadi IT Support']);
        }

        if (!empty($validated['password'])) {
            $validated['password'] = bcrypt($validated['password']);
        } else {
            unset($validated['password']);
        }

        $user->update($validated);

        return redirect()->route('users.index');
    }

    public function destroy(User $user)
    {
        // Prevent deleting it_support
        if ($user->userLevel && $user->userLevel->kode_level === 'it_support') {
            return redirect()->route('users.index')->with('error', 'IT Support tidak dapat dihapus');
        }
        
        $user->delete();
        return redirect()->route('users.index');
    }
}

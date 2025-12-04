<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\User;
use \App\Models\UserLevel;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        
        $users = User::with('userLevel')
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
        $userLevels = \App\Models\UserLevel::where('status_aktif', true)->get();
        return \Inertia\Inertia::render('users/create', ['userLevels' => $userLevels]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'user_level_id' => 'required|exists:user_levels,id',
        ]);

        $validated['password'] = bcrypt($validated['password']);
        \App\Models\User::create($validated);

        return redirect()->route('users.index');
    }

    public function edit(\App\Models\User $user)
    {
        $userLevels = \App\Models\UserLevel::where('status_aktif', true)->get();
        return \Inertia\Inertia::render('users/edit', [
            'user' => $user->load('userLevel'),
            'userLevels' => $userLevels
        ]);
    }

    public function update(Request $request, \App\Models\User $user)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'password' => 'nullable|min:8',
            'user_level_id' => 'required|exists:user_levels,id',
        ]);

        if (!empty($validated['password'])) {
            $validated['password'] = bcrypt($validated['password']);
        } else {
            unset($validated['password']);
        }

        $user->update($validated);

        return redirect()->route('users.index');
    }

    public function destroy(\App\Models\User $user)
    {
        $user->delete();
        return redirect()->route('users.index');
    }
}

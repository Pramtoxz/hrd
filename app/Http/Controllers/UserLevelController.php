<?php

namespace App\Http\Controllers;

use App\Models\UserLevel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserLevelController extends Controller
{
    public function index()
    {
        $userLevels = UserLevel::withCount('users')->latest()->get();
        return Inertia::render('user-levels/index', ['userLevels' => $userLevels]);
    }

    public function create()
    {
        return Inertia::render('user-levels/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_level' => 'required|string|max:255',
            'kode_level' => 'required|string|max:255|unique:user_levels',
            'keterangan' => 'nullable|string',
            'status_aktif' => 'boolean',
        ]);

        UserLevel::create($validated);

        return redirect()->route('user-levels.index');
    }

    public function edit(UserLevel $userLevel)
    {
        return Inertia::render('user-levels/edit', ['userLevel' => $userLevel]);
    }

    public function update(Request $request, UserLevel $userLevel)
    {
        $validated = $request->validate([
            'nama_level' => 'required|string|max:255',
            'kode_level' => 'required|string|max:255|unique:user_levels,kode_level,' . $userLevel->id,
            'keterangan' => 'nullable|string',
            'status_aktif' => 'boolean',
        ]);

        $userLevel->update($validated);

        return redirect()->route('user-levels.index');
    }

    public function destroy(UserLevel $userLevel)
    {
        $userLevel->delete();
        return redirect()->route('user-levels.index');
    }
}

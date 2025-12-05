<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\UserLevel;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::with(['parent', 'children'])->whereNull('parent_id')->orderBy('urutan')->get();
        return Inertia::render('menus/index', ['menus' => $menus]);
    }

    public function create()
    {
        $parentMenus = Menu::whereNull('parent_id')->orderBy('urutan')->get();
        $userLevels = UserLevel::where('status_aktif', true)->get();
        return Inertia::render('menus/create', [
            'parentMenus' => $parentMenus,
            'userLevels' => $userLevels
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_menu' => 'required|string|max:255',
            'ikon' => 'nullable|string',
            'route' => 'nullable|string',
            'url' => 'nullable|string',
            'parent_id' => 'nullable|exists:menus,id',
            'urutan' => 'required|integer',
            'status_aktif' => 'boolean',
            'user_levels' => 'array',
        ]);

        $userLevels = $validated['user_levels'] ?? [];
        unset($validated['user_levels']);

        $menu = Menu::create($validated);
        $menu->userLevels()->sync($userLevels);

        return redirect()->route('menus.index');
    }

    public function edit(Menu $menu)
    {
        $parentMenus = Menu::whereNull('parent_id')->where('id', '!=', $menu->id)->orderBy('urutan')->get();
        $userLevels = UserLevel::where('status_aktif', true)->get();
        
        return Inertia::render('menus/edit', [
            'menu' => $menu->load('userLevels'),
            'parentMenus' => $parentMenus,
            'userLevels' => $userLevels
        ]);
    }

    public function update(Request $request, Menu $menu)
    {
        $validated = $request->validate([
            'nama_menu' => 'required|string|max:255',
            'ikon' => 'nullable|string',
            'route' => 'nullable|string',
            'url' => 'nullable|string',
            'parent_id' => 'nullable|exists:menus,id',
            'urutan' => 'required|integer',
            'status_aktif' => 'boolean',
            'user_levels' => 'array',
        ]);

        $userLevels = $validated['user_levels'] ?? [];
        unset($validated['user_levels']);

        $menu->update($validated);
        $menu->userLevels()->sync($userLevels);

        return redirect()->route('menus.index');
    }

    public function destroy(Menu $menu)
    {
        $menu->delete();
        return redirect()->route('menus.index');
    }
}

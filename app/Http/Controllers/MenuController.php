<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        $menus = \App\Models\Menu::with(['parent', 'children'])->whereNull('parent_id')->orderBy('urutan')->get();
        return \Inertia\Inertia::render('menus/index', ['menus' => $menus]);
    }

    public function create()
    {
        $parentMenus = \App\Models\Menu::whereNull('parent_id')->orderBy('urutan')->get();
        $userLevels = \App\Models\UserLevel::where('status_aktif', true)->get();
        return \Inertia\Inertia::render('menus/create', [
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

        $menu = \App\Models\Menu::create($validated);
        $menu->userLevels()->sync($userLevels);

        return redirect()->route('menus.index');
    }

    public function edit(\App\Models\Menu $menu)
    {
        $parentMenus = \App\Models\Menu::whereNull('parent_id')->where('id', '!=', $menu->id)->orderBy('urutan')->get();
        $userLevels = \App\Models\UserLevel::where('status_aktif', true)->get();
        
        return \Inertia\Inertia::render('menus/edit', [
            'menu' => $menu->load('userLevels'),
            'parentMenus' => $parentMenus,
            'userLevels' => $userLevels
        ]);
    }

    public function update(Request $request, \App\Models\Menu $menu)
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

    public function destroy(\App\Models\Menu $menu)
    {
        $menu->delete();
        return redirect()->route('menus.index');
    }
}

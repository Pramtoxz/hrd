<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Menu;
use App\Models\UserLevel;

class MenuSeeder extends Seeder
{
    public function run(): void
    {
        $menus = [
            [
                'nama_menu' => 'Dashboard',
                'ikon' => 'LayoutDashboard',
                'route' => 'dashboard',
                'url' => '/dashboard',
                'parent_id' => null,
                'urutan' => 1,
                'status_aktif' => true,
            ],
            [
                'nama_menu' => 'Master Data',
                'ikon' => 'Database',
                'route' => null,
                'url' => null,
                'parent_id' => null,
                'urutan' => 2,
                'status_aktif' => true,
            ],
            [
                'nama_menu' => 'Pengguna',
                'ikon' => 'Users',
                'route' => 'users.index',
                'url' => '/users',
                'parent_id' => 2,
                'urutan' => 1,
                'status_aktif' => true,
            ],
            [
                'nama_menu' => 'Level User',
                'ikon' => 'Shield',
                'route' => 'user-levels.index',
                'url' => '/user-levels',
                'parent_id' => 2,
                'urutan' => 2,
                'status_aktif' => true,
            ],
            [
                'nama_menu' => 'Menu',
                'ikon' => 'Menu',
                'route' => 'menus.index',
                'url' => '/menus',
                'parent_id' => 2,
                'urutan' => 3,
                'status_aktif' => true,
            ],
            [
                'nama_menu' => 'Aset',
                'ikon' => 'Package',
                'route' => 'asets.index',
                'url' => '/asets',
                'parent_id' => 2,
                'urutan' => 4,
                'status_aktif' => true,
            ],
        ];

        foreach ($menus as $menu) {
            Menu::create($menu);
        }
        
        $superAdmin = UserLevel::where('kode_level', 'super_admin')->first();
        $admin = UserLevel::where('kode_level', 'admin')->first();
        
        if ($superAdmin) {
            $allMenus = Menu::pluck('id')->toArray();
            $superAdmin->menus()->sync($allMenus);
        }
        
        if ($admin) {
            $adminMenus = Menu::whereIn('nama_menu', ['Dashboard', 'Master Data', 'Aset'])
                ->pluck('id')
                ->toArray();
            $admin->menus()->sync($adminMenus);
        }
    }
}

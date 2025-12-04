<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
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
        ];

        foreach ($menus as $menu) {
            \App\Models\Menu::create($menu);
        }

        // Assign all menus to Super Admin
        $superAdmin = \App\Models\UserLevel::where('kode_level', 'super_admin')->first();
        $allMenus = \App\Models\Menu::all();
        $superAdmin->menus()->attach($allMenus->pluck('id'));

        // Assign limited menus to other levels
        $admin = \App\Models\UserLevel::where('kode_level', 'admin')->first();
        $admin->menus()->attach([1, 2, 3, 4]);

        $manager = \App\Models\UserLevel::where('kode_level', 'manager')->first();
        $manager->menus()->attach([1, 2, 3]);

        $staff = \App\Models\UserLevel::where('kode_level', 'staff')->first();
        $staff->menus()->attach([1]);
    }
}

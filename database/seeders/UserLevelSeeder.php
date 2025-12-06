<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserLevel;

class UserLevelSeeder extends Seeder
{
    public function run(): void
    {
        $levels = [
            [
                'nama_level' => 'IT Support',
                'kode_level' => 'it_support',
                'keterangan' => 'Akses penuh ke semua fitur',
                'status_aktif' => true,
            ],
            [
                'nama_level' => 'Admin',
                'kode_level' => 'admin',
                'keterangan' => 'Akses administratif',
                'status_aktif' => true,
            ],
            [
                'nama_level' => 'Manager',
                'kode_level' => 'manager',
                'keterangan' => 'Akses level manager',
                'status_aktif' => true,
            ],
            [
                'nama_level' => 'Staff',
                'kode_level' => 'staff',
                'keterangan' => 'Akses dasar staff',
                'status_aktif' => true,
            ],
        ];

        foreach ($levels as $level) {
            UserLevel::create($level);
        }
    }
}

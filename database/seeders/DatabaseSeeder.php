<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\UserLevel;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserLevelSeeder::class,
            MenuSeeder::class,
        ]);

        $superAdminLevel = UserLevel::where('kode_level', 'it_support')->first();

        User::firstOrCreate(
            ['email' => 'android@gmail.com'],
            [
                'name' => 'IT Support',
                'password' => 'password',
                'email_verified_at' => now(),
                'password' => Hash::make('1234'),
                'user_level_id' => $superAdminLevel->id,
            ]
        );
    }
}

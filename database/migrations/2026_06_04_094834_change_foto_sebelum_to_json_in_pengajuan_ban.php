<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        DB::statement('ALTER TABLE pengajuan_ban ALTER COLUMN foto_sebelum TYPE json USING CASE WHEN foto_sebelum IS NULL THEN NULL ELSE to_json(foto_sebelum) END');
    }

    public function down(): void
    {
        DB::statement('ALTER TABLE pengajuan_ban ALTER COLUMN foto_sebelum TYPE varchar(255) USING foto_sebelum::text');
    }
};

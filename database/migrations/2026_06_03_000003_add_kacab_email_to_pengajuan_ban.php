<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('pengajuan_ban', function (Blueprint $table) {
            $table->string('kacab_email')->nullable()->after('user_id');
        });
    }

    public function down(): void
    {
        Schema::table('pengajuan_ban', function (Blueprint $table) {
            $table->dropColumn('kacab_email');
        });
    }
};

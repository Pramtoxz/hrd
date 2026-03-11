<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('foto_release', function (Blueprint $table) {
            // Add photo descriptions
            $table->text('deskripsi_foto1')->nullable();
            $table->text('deskripsi_foto2')->nullable();
            $table->text('deskripsi_foto3')->nullable();
            $table->text('deskripsi_foto4')->nullable();
            $table->text('deskripsi_foto5')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('foto_release', function (Blueprint $table) {
            $table->dropColumn([
                'deskripsi_foto1', 'deskripsi_foto2', 'deskripsi_foto3',
                'deskripsi_foto4', 'deskripsi_foto5'
            ]);
        });
    }
};
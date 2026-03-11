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
        Schema::table('press_release', function (Blueprint $table) {
            // Remove old single quote fields
            $table->dropColumn(['pemberi_kutipan', 'isi_kutipan']);
            
            // Add multiple quote fields (max 3)
            $table->text('pemberi_kutipan_1')->nullable();
            $table->text('isi_kutipan_1')->nullable();
            $table->text('pemberi_kutipan_2')->nullable();
            $table->text('isi_kutipan_2')->nullable();
            $table->text('pemberi_kutipan_3')->nullable();
            $table->text('isi_kutipan_3')->nullable();
        });
        
        Schema::table('foto_press_release', function (Blueprint $table) {
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
        Schema::table('press_release', function (Blueprint $table) {
            // Remove multiple quote fields
            $table->dropColumn([
                'pemberi_kutipan_1', 'isi_kutipan_1',
                'pemberi_kutipan_2', 'isi_kutipan_2', 
                'pemberi_kutipan_3', 'isi_kutipan_3'
            ]);
            
            // Add back old single quote fields
            $table->text('pemberi_kutipan')->nullable();
            $table->text('isi_kutipan')->nullable();
        });
        
        Schema::table('foto_press_release', function (Blueprint $table) {
            $table->dropColumn([
                'deskripsi_foto1', 'deskripsi_foto2', 'deskripsi_foto3',
                'deskripsi_foto4', 'deskripsi_foto5'
            ]);
        });
    }
};
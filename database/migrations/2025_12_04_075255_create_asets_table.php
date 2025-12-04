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
        Schema::create('asets', function (Blueprint $table) {
            $table->id();
            $table->string('kode_aset')->unique();
            $table->string('nama_aset');
            $table->text('spesifikasi')->nullable();
            $table->string('pemilik_aset')->nullable();
            $table->enum('kritikalitas', ['Rendah', 'Sedang', 'Tinggi', 'Kritis'])->default('Sedang');
            $table->string('lokasi')->nullable();
            $table->string('label')->nullable();
            $table->date('tanggal_perolehan')->nullable();
            $table->integer('usia_aset')->nullable(); // dalam tahun
            $table->enum('status', ['Aktif', 'Maintenance', 'Rusak', 'Dihapus'])->default('Aktif');
            $table->string('metode_pemusnahan')->nullable();
            $table->text('keterangan')->nullable();
            $table->string('foto_aset')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asets');
    }
};

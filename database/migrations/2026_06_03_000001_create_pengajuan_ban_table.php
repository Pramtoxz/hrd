<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pengajuan_ban', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->date('tanggal_pengajuan');
            $table->string('nama_driver');
            $table->string('cabang');
            $table->string('no_polisi');
            $table->string('jenis_kendaraan');
            $table->integer('km_kendaraan');
            $table->enum('jenis_pengajuan', ['ban', 'fulkanisir']);
            $table->date('tgl_penggantian_terakhir')->nullable();
            $table->json('posisi_ban_sebelumnya')->nullable();
            $table->json('posisi_ban_diajukan');
            $table->integer('jumlah_ban');
            $table->string('ukuran_ban');
            $table->text('alasan_penggantian')->nullable();
            $table->string('foto_sebelum')->nullable();
            $table->string('pdf_persetujuan')->nullable();
            $table->json('foto_sesudah')->nullable();
            $table->json('foto_toko')->nullable();
            $table->string('kuitansi')->nullable();
            $table->enum('status', ['pending', 'setuju', 'ditolak', 'diperiksa', 'finish'])->default('pending');
            $table->text('alasan_penolakan')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pengajuan_ban');
    }
};

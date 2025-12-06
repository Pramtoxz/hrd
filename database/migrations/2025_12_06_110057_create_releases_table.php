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
        Schema::create('release', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->text('isi_berita');
            $table->date('tanggal_publikasi');
            $table->foreignId('press_release_id')->nullable()->constrained('press_release')->onDelete('set null');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->boolean('status')->default(false);      
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('release');
    }
};

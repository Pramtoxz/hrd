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
        Schema::create('press_release', function (Blueprint $table) {
            $table->id();
            $table->string('what');
            $table->string('who');
            $table->string('when');
            $table->string('where');
            $table->string('why');
            $table->string('how');
            $table->string('pemberi_kutipan');
            $table->text('isi_kutipan');
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
        Schema::dropIfExists('press_release');
    }
};

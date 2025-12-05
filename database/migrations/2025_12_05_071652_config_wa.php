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
         Schema::create('config_wa', function (Blueprint $table) {
            $table->id();
            $table->string('wa_gateway_url');
            $table->string('wa_gateway_secret');
            $table->string('wa_session_name');
            $table->string('nomor_wa');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('config_wa');
    }
};

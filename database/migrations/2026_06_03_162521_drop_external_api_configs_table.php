<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::dropIfExists('external_api_configs');
    }

    public function down(): void
    {
        Schema::create('external_api_configs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('url')->nullable();
            $table->string('secret');
            $table->text('keterangan')->nullable();
            $table->timestamps();
        });
    }
};

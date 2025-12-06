<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BukuTamu extends Model
{
    use HasFactory;
    
    protected $table = 'buku_tamu';
    
    protected $fillable = [
        'nama_lengkap',
        'instansi',
        'tanggal',
        'nomor_telepon',
        'bertemu_dengan',
        'keperluan',
        'status'
    ];

    protected $casts = [
        'tanggal' => 'date',
        'status' => 'boolean',
    ];
}

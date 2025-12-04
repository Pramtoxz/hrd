<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aset extends Model
{
    use HasFactory;

    protected $fillable = [
        'kode_aset',
        'nama_aset',
        'spesifikasi',
        'pemilik_aset',
        'kritikalitas',
        'lokasi',
        'label',
        'tanggal_perolehan',
        'usia_aset',
        'status',
        'metode_pemusnahan',
        'keterangan',
        'foto_aset',
    ];

    protected $casts = [
        'tanggal_perolehan' => 'date',
    ];
}

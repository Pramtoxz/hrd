<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PengajuanBan extends Model
{
    protected $table = 'pengajuan_ban';

    protected $fillable = [
        'user_id',
        'kacab_email',
        'tanggal_pengajuan',
        'nama_driver',
        'cabang',
        'no_polisi',
        'jenis_kendaraan',
        'km_kendaraan',
        'jenis_pengajuan',
        'tgl_penggantian_terakhir',
        'posisi_ban_sebelumnya',
        'posisi_ban_diajukan',
        'jumlah_ban',
        'ukuran_ban',
        'alasan_penggantian',
        'foto_sebelum',
        'pdf_persetujuan',
        'foto_sesudah',
        'foto_toko',
        'kuitansi',
        'status',
        'alasan_penolakan',
    ];

    protected $casts = [
        'tanggal_pengajuan' => 'date',
        'tgl_penggantian_terakhir' => 'date',
        'posisi_ban_sebelumnya' => 'array',
        'posisi_ban_diajukan' => 'array',
        'foto_sebelum' => 'array',
        'foto_sesudah' => 'array',
        'foto_toko' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

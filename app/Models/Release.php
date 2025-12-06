<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Release extends Model
{
     use HasFactory;

    protected $table = 'release';

    protected $fillable = [
        'judul',
        'isi_berita',
        'tanggal_publikasi',
        'press_release_id',
        'user_id',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
        'tanggal_publikasi' => 'date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function pressRelease(): BelongsTo
    {
        return $this->belongsTo(PressRelease::class);
    }

    public function fotos(): HasMany
    {
        return $this->hasMany(FotoRelease::class, 'release_id');
    }
}

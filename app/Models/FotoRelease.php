<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FotoRelease extends Model
{
    use HasFactory;

    protected $table = 'foto_release';

    protected $fillable = [
        'release_id',
        'foto1',
        'foto2',
        'foto3',
        'foto4',
        'foto5',
        'deskripsi_foto1',
        'deskripsi_foto2',
        'deskripsi_foto3',
        'deskripsi_foto4',
        'deskripsi_foto5',
    ];

    public function Release(): BelongsTo
    {
        return $this->belongsTo(Release::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PressRelease extends Model
{
    use HasFactory;

    protected $table = 'press_release';

    protected $fillable = [
        'what',
        'who',
        'when',
        'where',
        'why',
        'how',
        'pemberi_kutipan_1',
        'isi_kutipan_1',
        'pemberi_kutipan_2',
        'isi_kutipan_2',
        'pemberi_kutipan_3',
        'isi_kutipan_3',
        'user_id',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function fotos(): HasMany
    {
        return $this->hasMany(FotoPressRelease::class, 'press_release_id');
    }
}

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
    ];

    public function Release(): BelongsTo
    {
        return $this->belongsTo(Release::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FotoPressRelease extends Model
{
    use HasFactory;

    protected $table = 'foto_press_release';

    protected $fillable = [
        'press_release_id',
        'foto1',
        'foto2',
        'foto3',
        'foto4',
        'foto5',
    ];

    public function pressRelease(): BelongsTo
    {
        return $this->belongsTo(PressRelease::class);
    }
}

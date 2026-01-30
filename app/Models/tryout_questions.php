<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class tryout_questions extends Model
{
    protected $table = 'tryout_questions';

    protected $fillable = [
        'tryout_id',
        'question_id',
        'question_order',
    ];

    // Relasi ke Tryout
    public function tryout()
    {
        return $this->belongsTo(tryouts::class, 'tryout_id');
    }

    // Relasi ke Question
    public function question()
    {
        return $this->belongsTo(questions::class, 'question_id');
    }
}

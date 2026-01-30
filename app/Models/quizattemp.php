<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class quizattemp extends Model
{
    protected $table = 'quiz_attempt';

    protected $fillable = [
        'user_id',
        'tryout_id',
        'attempt_number',
        'grade',
        'status',
        'question_order',
        'answer_order',
        'start_time',
        'submitted_at',
        'duration_minutes',
        'end_time',
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'submitted_at' => 'datetime',
        'end_time' => 'datetime',
    ];

    // Relasi ke User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relasi ke Tryout
    public function tryout()
    {
        return $this->belongsTo(tryouts::class, 'tryout_id');
    }
}

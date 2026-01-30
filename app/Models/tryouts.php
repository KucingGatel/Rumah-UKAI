<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class tryouts extends Model
{
    protected $table = 'tryouts';

    protected $fillable = [
        'name',
        'description',
        'paket_id',
        'duration_minutes',
        'pdf_url',
        'attempts_allowed',
    ];

    // Relasi ke Package
    public function package()
    {
        return $this->belongsTo(packages::class, 'paket_id');
    }

    // Relasi ke Questions (Many to Many)
    public function questions()
    {
        return $this->belongsToMany(questions::class, 'tryout_questions', 'tryout_id', 'question_id');
    }

    // Relasi ke Quiz Attempts
    public function quizAttempts()
    {
        return $this->hasMany(quizattemp::class, 'tryout_id');
    }

    // Relasi ke Tryout Questions
    public function tryoutQuestions()
    {
        return $this->hasMany(tryout_questions::class, 'tryout_id');
    }
}

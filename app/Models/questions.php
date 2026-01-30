<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class questions extends Model
{
    protected $table = 'questions';

    protected $fillable = [
        'question_text',
        'option_a',
        'option_b',
        'option_c',
        'option_d',
        'option_e',
        'explanation',
        'image_url',
        'table_headers',
        'table_rows',
    ];

    // Relasi ke Tryout Questions
    public function tryoutQuestions()
    {
        return $this->hasMany(tryout_questions::class, 'question_id');
    }

    // Relasi ke Tryouts (Many to Many)
    public function tryouts()
    {
        return $this->belongsToMany(tryouts::class, 'tryout_questions', 'question_id', 'tryout_id');
    }
}

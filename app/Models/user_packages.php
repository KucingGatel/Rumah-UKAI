<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class user_packages extends Model
{
    protected $table = 'user_packages';

    protected $fillable = [
        'user_id',
        'paket_id',
    ];

    public $timestamps = false;

    // Relasi ke User
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Relasi ke Package
    public function package()
    {
        return $this->belongsTo(packages::class, 'paket_id');
    }
}

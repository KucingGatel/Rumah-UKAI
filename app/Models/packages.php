<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class packages extends Model
{
    protected $table = 'pakets';

    protected $fillable = [
        'name',
        'price',
        'image',
        'closed_at',
        'detail1',
        'detail2',
        'detail3',
        'detail4',
        'detail5',
        'price2',
        'payment_link',
    ];

    // Relasi ke Orders
    public function orders()
    {
        return $this->hasMany(orders::class, 'paket_id');
    }

    // Relasi ke Tryouts
    public function tryouts()
    {
        return $this->hasMany(tryouts::class, 'paket_id');
    }

    // Relasi ke Users (Many to Many)
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_packages', 'paket_id', 'user_id');
    }
}

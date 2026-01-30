<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class orders extends Model
{
    protected $table = 'orders';

    protected $fillable = [
        'order_id',
        'user_id',
        'paket_id',
        'gross_amount',
        'order_status',
    ];

    // Relasi ke User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relasi ke Package
    public function package()
    {
        return $this->belongsTo(packages::class, 'paket_id');
    }
}

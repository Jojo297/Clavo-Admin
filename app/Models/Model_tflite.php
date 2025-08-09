<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Model_tflite extends Model
{
    protected $fillable = [
        'model_name',
        'fruit_type',
        'path',
        'id_user'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}

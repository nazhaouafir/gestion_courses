<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $table = "courses";
    protected $fillable = [
            'title',
            'description',
            'level',
            'date_debut',
            'date_fin',
            'duree',
            'effort',
            'rythme_semaine',
            'langue',
            'image_course',
            'module'
    ];
}

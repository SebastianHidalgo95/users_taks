<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory;

    protected $table = 'task';
    protected $primaryKey = 'id_task';
    protected $connection = 'mysql';
    protected $fillable = [
        'id_task',
        'name',
        'date_stat', 
        'date_end',
        'status'
    ];

/*     public function items(){
        return $this->hasMany(Item::class, 'factura_id', 'id_factura');
    } */

}

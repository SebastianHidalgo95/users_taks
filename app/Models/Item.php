<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    protected $table = 'Item';
    protected $primaryKey = 'id_item';
    protected $connection = 'mysql';
    protected $fillable = [
        'id_item',
        'cantidad',
        'item_number',
        'factura_id', 
        'description',
        'unit_val',
        'key',
    ];

    public function factura(){
        return $this->hasOne(Factura::class, 'id_factura', 'factura_id');
    }
}

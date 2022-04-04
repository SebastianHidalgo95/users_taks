<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Factura extends Model
{
    use HasFactory;

    protected $table = 'Factura';
    protected $primaryKey = 'id_factura';
    protected $connection = 'mysql';
    protected $fillable = [
        'id_factura',
        'name_emisor',
        'nit_emisor', 
        'name_comprador',
        'nit_comprador',
        'fecha',
        'hora',
        'subtotal',
        'iva',
        'total'
    ];

    public function items(){
        return $this->hasMany(Item::class, 'factura_id', 'id_factura');
    }

}

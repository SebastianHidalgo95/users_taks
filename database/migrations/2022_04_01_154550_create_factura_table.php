<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacturaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('factura', function (Blueprint $table) {
            $table->bigIncrements('id_factura');
            $table->string('name_emisor');
            $table->string('nit_emisor');
            $table->string('name_comprador');
            $table->string('nit_comprador');
            $table->date('fecha');
            $table->bigInteger('subtotal');
            $table->bigInteger('iva');
            $table->bigInteger('total');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('factura');
    }
}

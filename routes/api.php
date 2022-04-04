<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('register','App\Http\Controllers\AuthController@register');
Route::post('login','App\Http\Controllers\AuthController@login');

Route::group(['middleware'=>'jwt.verify'], function(){
    Route::get('user','App\Http\Controllers\AuthController@getUser');
    Route::post('get_facturas','App\Http\Controllers\FacturaController@getFacturas');
    Route::post('get_lastfactura','App\Http\Controllers\FacturaController@getLastFactura');
    Route::post('create_factura','App\Http\Controllers\FacturaController@createFactura');
    Route::post('edit_factura','App\Http\Controllers\FacturaController@editFactura');
    Route::post('get_factura','App\Http\Controllers\FacturaController@getFactura');
});

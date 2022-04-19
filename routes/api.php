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
    Route::post('get_tasks','App\Http\Controllers\TaskController@getTasks');
    Route::post('create_task','App\Http\Controllers\TaskController@createTask');
    Route::post('update_task','App\Http\Controllers\TaskController@updateTask');
    Route::post('get_statistics','App\Http\Controllers\TaskController@getStatistics');
});

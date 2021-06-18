<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Broadcast;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('auth/register', 'Api\AuthController@register')->name('api.auth.register');
Route::post('auth/login', 'Api\AuthController@login')->name('api.auth.login');

Route::get('auth/me', 'Api\AuthController@me')
    ->name('api.auth.me')
    ->middleware('auth:api');
    
Route::post('auth/editProfile', 'Api\AuthController@editProfile')
    ->name('api.auth.editProfile')
    ->middleware('auth:api');

Route::post('auth/updatePackage', 'Api\AuthController@updatePackage')
    ->name('api.auth.updatePackage')
    ->middleware('auth:api');

    Route::post('message/send', 'Api\MessageController@send')
    ->name('api.message.send')
    ->middleware('auth:api');

Route::post('message/sendDM', 'Api\MessageController@sendDM')
    ->name('api.message.sendDM')
    ->middleware('auth:api');

Route::get('filter/getAll', 'Api\FilterController@getAll')
    ->name('api.filter.filter');

Route::get('filter/getAllStudents', 'Api\FilterController@getAllStudents')
    ->name('api.filter.getAllStudents');
    

Route::Post('filter/filter', 'Api\FilterController@filter')
    ->name('api.filter.filter');

    Route::Post('filter/assign', 'Api\FilterController@assign')
    ->name('api.filter.assign');
    
    Route::Post('filter/writeReview', 'Api\FilterController@writeReview')
    ->name('api.filter.writeReview');
    
    Route::get('filter/getAllReviewsT', 'Api\FilterController@getAllReviewsT')
    ->name('api.filter.getAllReviewsT');

    Route::get('filter/getAllReviewsS', 'Api\FilterController@getAllReviewsS')
    ->name('api.filter.getAllReviewsS');
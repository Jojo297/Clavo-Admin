<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ModelController;


Route::post('models/upload', [ModelController::class, 'uploadModel'])->name('models.upload');

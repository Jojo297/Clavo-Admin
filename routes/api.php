<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ModelController;
use App\Models\Model_tflite;

Route::post('models/upload', [ModelController::class, 'uploadModel'])->name('models.upload');

Route::delete('models/{id}', [ModelController::class, 'destroy'])->name('models.destroy');

Route::get('models-all', [ModelController::class, 'getAllModels'])->name('models.show');

Route::get('/models', function () {
    return Model_tflite::all();
});

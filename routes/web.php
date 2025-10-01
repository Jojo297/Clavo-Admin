<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ModelController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('training', function () {
        return Inertia::render('training');
    })->name('training');

    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

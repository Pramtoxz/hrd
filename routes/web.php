<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserLevelController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\AsetController;



Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Routes with menu access check
    Route::middleware(['check.menu.access'])->group(function () {
        Route::resource('users', UserController::class);
        Route::resource('user-levels', UserLevelController::class);
        Route::resource('menus', MenuController::class);
        Route::resource('asets', AsetController::class);
    });
});

require __DIR__.'/settings.php';

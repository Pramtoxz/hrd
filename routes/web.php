<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserLevelController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\AsetController;
use App\Http\Controllers\PressReleaseController;
use App\Http\Controllers\ReleaseController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\BukuTamuController;

Route::get('/cek/qrcode/{id}', [AsetController::class, 'lihat'])->name('cek.qrcode');
Route::get('/qrcode/aset/{id}', [AsetController::class, 'getQrCode'])->name('qrcode.aset');

// Public Guest Book Route
Route::get('/tamu', [BukuTamuController::class, 'publicForm'])->name('tamu.form');
Route::post('/tamu', [BukuTamuController::class, 'publicStore'])->name('tamu.store');

Route::get('/', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    }
    return redirect()->route('login');
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
        Route::resource('article', ArticleController::class);
        Route::resource('press-release', PressReleaseController::class);
        Route::patch('press-release/{pressRelease}/toggle-status', [PressReleaseController::class, 'toggleStatus'])->name('press-release.toggle-status');
        Route::resource('release', ReleaseController::class);
        Route::get('release/press-release-photos/{id}', [ReleaseController::class, 'getPressReleasePhotos'])->name('release.press-release-photos');
        Route::patch('release/{release}/toggle-status', [ReleaseController::class, 'toggleStatus'])->name('release.toggle-status');
        Route::resource('bukutamu', BukuTamuController::class);
        Route::patch('bukutamu/{bukutamu}/toggle-status', [BukuTamuController::class, 'toggleStatus'])->name('bukutamu.toggle-status');
    });
});

require __DIR__.'/settings.php';

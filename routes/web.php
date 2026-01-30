<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;

Route::middleware('auth')->group(function () {
    Route::get('admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
});

Route::get('/', function () {
    return Inertia::render('landing', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/home', function () {
    return Inertia::render('landing', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home.index');

Route::resource("users", UserController::class);

Route::get('/packages', function () {
    return Inertia::render('packages');
})->name('packages');

Route::get('/tryoutproduct', function () {
    return Inertia::render('tryoutproduct');
})->name('tryout');

Route::get('/blog', function () {
    return Inertia::render('blog');
})->name('blog');

Route::get('/blogdetail/{id}', [BlogController::class, 'show'])->name('blog.detail');

Route::get('/detail-package/{id}', [PackageController::class, 'show'])->name('package.detail');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::prefix('admin')->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('admin/dashboard');
        })->name('admin.dashboard');

        Route::get('tryout', function () {
            return Inertia::render('admin/tryout');
        })->name('admin.tryout');

        Route::get('user', function () {
            return Inertia::render('admin/user');
        })->name('admin.user');

        Route::get('product', function () {
            return Inertia::render('admin/product');
        })->name('admin.product');

        Route::get('blog', function () {
            return Inertia::render('admin/blog');
        })->name('admin.blog');

        Route::get('testimoni', function () {
            return Inertia::render('admin/testimoni');
        })->name('admin.testimoni');
    });
});

require __DIR__ . '/settings.php';

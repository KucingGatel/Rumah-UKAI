<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/home', function () {
    return Inertia::render('landing', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/packages', function () {
    return Inertia::render('packages');
})->name('packages');

Route::get('/tryoutproduct', function () {
    return Inertia::render('tryoutproduct');
})->name('tryout');

Route::get('/blog', function () {
    return Inertia::render('blog');
})->name('blog');

Route::get('/detail-package', function () {
    return Inertia::render('detail-package');
})->name('detail-package');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';

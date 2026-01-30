<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PackageController extends Controller
{
    public function show($id)
    {
        $packages = [
            [
                'id' => 1,
                'image' => '/assets/images/test2.png',
                'name' => 'Paket Gratis Februari',
                'price' => 'Gratis',
                'category' => ['Free', 'Klinis', 'Farmateknologi'],
                'subjects' => ['Hapalan klinis', 'Farmakoekonomi', 'Manajemen Farmasi', 'Perhitungan Industri'],
                'amount' => '10 Try Out',
                'question' => '100 Soal',
                'duration' => '120 Menit/Try Out',
                'attemp' => '3 Attemp/Try Out',
                'closed' => '31 Januari 2026',
            ],
            [
                'id' => 2,
                'image' => '/assets/images/test2.png',
                'name' => 'Paket Silver',
                'price' => 'Rp 599.000',
                'category' => ['Akses 150+ Video', 'Latihan Soal Lengkap', 'Live Session 2x/bulan', 'Support Priority'],
                'subjects' => ['Hapalan klinis', 'Farmakoekonomi', 'Manajemen Farmasi', 'Perhitungan Industri'],
                'amount' => '10 Try Out',
                'question' => '100 Soal',
                'duration' => '120 Menit/Try Out',
                'attemp' => '3 Attemp/Try Out',
                'closed' => '31 Januari 2026',
            ],
            [
                'id' => 3,
                'image' => '/assets/images/test2.png',
                'name' => 'Paket Gold',
                'price' => 'Rp 999.000',
                'category' => ['Akses 300+ Video', 'Latihan Soal Premium', 'Live Session 4x/bulan', 'Mentor 1:1', 'Sertifikat'],
                'subjects' => ['Hapalan klinis', 'Farmakoekonomi', 'Manajemen Farmasi', 'Perhitungan Industri'],
                'amount' => '10 Try Out',
                'question' => '100 Soal',
                'duration' => '120 Menit/Try Out',
                'attemp' => '3 Attemp/Try Out',
                'closed' => '31 Januari 2026',
            ],
            [
                'id' => 4,
                'image' => '/assets/images/test2.png',
                'name' => 'Paket Platinum',
                'price' => 'Rp 1.499.000',
                'category' => ['Akses Semua Video', 'Soal Unlimited', 'Live Session Unlimited', 'Mentor 1:1', 'Sertifikat', 'Akses Selamanya'],
                'subjects' => ['Hapalan klinis', 'Farmakoekonomi', 'Manajemen Farmasi', 'Perhitungan Industri'],
                'amount' => '10 Try Out',
                'question' => '100 Soal',
                'duration' => '120 Menit/Try Out',
                'attemp' => '3 Attemp/Try Out',
                'closed' => '31 Januari 2026',
            ],
        ];

        $package = collect($packages)->firstWhere('id', (int)$id);

        if (!$package) {
            abort(404, 'Package not found');
        }

        return Inertia::render('detail-package', [
            'package' => $package,
            'packages' => $packages,
        ]);
    }
}

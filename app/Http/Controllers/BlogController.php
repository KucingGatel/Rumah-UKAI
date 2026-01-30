<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class BlogController extends Controller
{
    public function show($id)
    {
        $blogs = [
            [
                'id' => 1,
                'cover' => '/assets/images/test1.png',
                'title' => 'Judul Artikel 1',
                'description' => 'Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed.',
            ],
            [
                'id' => 2,
                'cover' => '/assets/images/test2.png',
                'title' => 'Judul Artikel 2',
                'description' => 'Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed.',
            ],
            [
                'id' => 3,
                'cover' => '/assets/images/test2.png',
                'title' => 'Judul Artikel 3',
                'description' => 'Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed.',
            ],
            [
                'id' => 4,
                'cover' => '/assets/images/test3.png',
                'title' => 'Judul Artikel 4',
                'description' => 'Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed Lorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sedLorem ipsum dolor sit amet consectetur. Morbi velit feugiat sit volutpat leo sed.',
            ]

        ];

        $blog = collect($blogs)->firstWhere('id', (int)$id);

        if (!$blog) {
            abort(404, 'Blog not found');
        }

        return Inertia::render('detail-blog', [
            'blog' => $blog,
            'blogs' => $blogs,
        ]);
    }
}

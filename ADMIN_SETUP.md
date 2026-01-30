# Admin Panel - Setup Instructions

Admin panel untuk Rumah UKAI telah selesai dibuat dengan struktur lengkap.

## Folder Structure

```
resources/js/
├── pages/admin/
│   ├── dashboard.tsx      (Dashboard utama dengan charts)
│   ├── tryout.tsx         (Manajemen try out)
│   ├── user.tsx           (Manajemen user)
│   ├── product.tsx        (Manajemen produk/paket)
│   ├── blog.tsx           (Manajemen blog)
│   └── testimoni.tsx      (Manajemen testimoni)
├── components/admin/
│   ├── Sidebar.tsx        (Navigation sidebar)
│   ├── AdminNavbar.tsx    (Top navbar)
│   ├── StatCard.tsx       (Stat card component)
│   └── ChartComponent.tsx (Chart wrapper)
└── layouts/admin/
    └── AdminLayout.tsx    (Layout wrapper untuk semua admin pages)
```

## Installation Steps

### 1. Install Dependencies
```bash
npm install
# atau
yarn install
```

Ini akan menginstall `recharts` yang baru ditambahkan ke package.json untuk chart functionality.

### 2. Build Project
```bash
npm run dev
# atau
yarn dev
```

### 3. Access Admin Panel

Setelah login, buka:
- Dashboard: `/admin/dashboard`
- Try Out Management: `/admin/tryout`
- User Management: `/admin/user`
- Product Management: `/admin/product`
- Blog Management: `/admin/blog`
- Testimoni Management: `/admin/testimoni`

## Features

### Dashboard
- 5 stat cards dengan data yang bisa disesuaikan
- 2 charts (Area chart dan Line chart) menggunakan Recharts
- Responsive design untuk mobile & desktop
- Dark theme dengan tema orange accent

### Management Pages
Semua management pages memiliki:
- Search functionality
- Add button untuk membuat data baru
- Edit & Delete buttons
- Responsive tables
- Status badges

### Admin Components
- **Sidebar**: Navigation dengan icon, responsive mobile menu
- **AdminNavbar**: Top navbar dengan notification bell dan user menu
- **StatCard**: Reusable card untuk menampilkan statistics
- **ChartComponent**: Wrapper untuk charts
- **AdminLayout**: Layout wrapper yang menggabungkan Sidebar & Navbar

## Customization

### Mengubah Data
Semua data di dashboard dan management pages bisa disesuaikan dengan:
- Mengganti hardcoded data dengan API calls
- Mengintegrasikan dengan database

### Menambah Menu Baru
Edit `resources/js/components/admin/Sidebar.tsx` - tambahkan item ke `menuItems` array.

## Next Steps untuk User

Untuk user pages (yang akan diisi manual):
- Landing page
- Packages listing
- Try out product page
- Blog listing
- User dashboard/profile

Semua sudah di-setup dengan struktur yang rapi dan siap untuk dikembangkan lebih lanjut.

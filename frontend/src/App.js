import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Home1 from './pages/home1';
import Pria from './pages/pria';
import Wanita from './pages/wanita';
import Riwayat from './pages/riwayat';
import Riwayat1 from './pages/riwayat1';
import Login from './pages/login';
import Keranjang from './pages/keranjang';
import Admin from './pages/admin';
import Pria1 from './pages/pria1';
import Produk from './pages/produk';
import Dashboard from './pages/dashboard'; 
import Navbar from './komponen/navbar'; 
import Footer from './komponen/footer';
import Pelanggan from './pages/pelanggan'; 
import Pembayaran from './pages/pembayaran';
import Kategori from './pages/kategori'; 
import Registrasi from './pages/registrasi'; 
import Pembelian from './pages/pembelian';
import Navbar1 from './komponen/navbar1';

function App() {
  const location = useLocation(); // Dapatkan lokasi rute saat ini

  // Daftar halaman yang tidak menampilkan Navbar
  const noNavbarPages = [
    '/dashboard',  // Dashboard tidak perlu Navbar
    '/produk',
    '/pembelian',
    '/pelanggan',  // Pelanggan tidak perlu Navbar
  ];

  // Halaman yang menggunakan Navbar1 (Home, Login, Registrasi)
  const useNavbar1 = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/registrasi';

  // Cek apakah saat ini adalah halaman yang tidak membutuhkan Navbar
  const hideNavbar = noNavbarPages.includes(location.pathname);

  // Daftar halaman yang tidak menampilkan Footer
  const noFooterPages = [
    '/dashboard',
    '/produk',
    '/pembelian',
    '/pelanggan',
  ];

  // Cek apakah saat ini adalah halaman yang tidak membutuhkan Footer
  const hideFooter = noFooterPages.includes(location.pathname);

  return (
    <div className="app-container">
      {/* Tampilkan Navbar1 jika di halaman Home, Login, atau Registrasi */}
      {useNavbar1 && <Navbar1 />}

      {/* Tampilkan Navbar jika tidak di halaman yang disebutkan di noNavbarPages */}
      {!useNavbar1 && !hideNavbar && <Navbar />}

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pria" element={<Pria />} />
          <Route path="/wanita" element={<Wanita />} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/riwayat1" element={<Riwayat1 />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/pria1" element={<Pria1 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/pelanggan" element={<Pelanggan />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/pembelian" element={<Pembelian />} />
          <Route path="/kategori" element={<Kategori />} />
          <Route path="/registrasi" element={<Registrasi />} />
        </Routes>
      </div>

      {/* Tampilkan Footer kecuali di halaman dashboard, produk, pelanggan, dan pembelian */}
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Pria from './pages/pria';
import Wanita from './pages/wanita';
import Riwayat from './pages/riwayat';
import Login from './pages/login';
import Keranjang from './pages/keranjang';
import Admin from './pages/admin';
import Pria1 from './pages/pria1';
import Produk from './pages/produk';
import Dashboard from './pages/dashboard'; 
import Navbar from './komponen/navbar'; 
import Footer from './komponen/footer';
import Pelanggan from './pages/pelanggan'; 
import Kategori from './pages/kategori'; 

function App() {
  const location = useLocation(); // Dapatkan lokasi rute saat ini

  return (
    <div className="app-container">
      {/* Tampilkan Navbar hanya jika bukan di halaman dashboard */}
       <Navbar />
     

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pria" element={<Pria />} />
          <Route path="/wanita" element={<Wanita />} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/pria1" element={<Pria1 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/pelanggan" element={<Pelanggan />} />
          <Route path="/kategori" element={<Kategori />} /> {/* Rute untuk Dashboard */}
        </Routes>
      </div>

      {location.pathname !== '/dashboard' && location.pathname !== '/produk' && <Footer />}

    </div>
  );
}

export default App;

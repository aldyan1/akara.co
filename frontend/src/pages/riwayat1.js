import React from 'react';
import '../style/riwayat1.css';

const Riwayat1 = () => {
  return (
    <div className="keranjang-container">
      {/* Bagian Produk */}
      <div className="produk-container">
        <h2>KERANJANG ANDA<span className="item-count"></span></h2>
<br></br>
        <div className="produk-item">
          <img src="3.jpg" alt="Summer Holiday T-Shirt" className="produk-image" />
          <div className="produk-detail">
            <h3>BLUE SUMMER HOLIDAY GLASSES</h3>
            <p>Size: A/S</p>
            <p className="harga">
              Rp 350.000 <span className="harga-coret">Rp 700.000</span>
            </p>
            <button className="hapus-button">Hapus</button>
          </div>
        </div>

        
  
      </div>

      {/* Ringkasan Pesanan */}
      <div className="ringkasan-container">
        <button className="checkout-button">Beli lagi</button>
        <h2>RINGKASAN PESANAN:</h2>
        
        <div className="ringkasan-item">
          <p>Alamat</p>
          <p className="harga-kanan">Solo</p>
        </div>

        <div className="ringkasan-item">
          <p>Status Pengiriman</p>
          <p className="harga-kanan gratis">Perjalanan</p>
        </div>

        <div className="ringkasan-item total">
          <p>Total</p>
          <p className="harga-kanan total-harga">Rp.25.000</p>
        </div>

        {/* Kode Promo */}
        <div className="kode-promo-container">
          <details className="kode-promo-details">
            <summary>Kode Promo <span className="dropdown-icon">▼</span></summary>
            <input type="text" placeholder="Masukkan kode promo" className="kode-promo-input" />
            <button className="gunakan-button">Gunakan</button>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Riwayat1;

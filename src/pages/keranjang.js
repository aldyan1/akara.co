import React from 'react';
import '../style/keranjang.css';

const Keranjang = () => {
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
            <p>Jumlah Barang:</p>
            <select className="jumlah-dropdown">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p className="harga">
              Rp 350.000 <span className="harga-coret">Rp 700.000</span>
            </p>
            <button className="hapus-button">Hapus</button>
          </div>
        </div>

        <div className="produk-item">
          <img src="12.jpg" alt="Sepatu Running" className="produk-image" />
          <div className="produk-detail">
            <h3>PINK BEACH HOLIDAY GLASSES</h3>
            <p>Size: 3.5</p>
            <p>Jumlah Barang:</p>
            <select className="jumlah-dropdown">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p className="harga">Rp 1.300.000</p>
            <button className="hapus-button">Hapus</button>
          </div>
        </div>
      </div>

      {/* Ringkasan Pesanan */}
      <div className="ringkasan-container">
        <button className="checkout-button">CHECKOUT</button>
        <h2>RINGKASAN PESANAN:</h2>
        
        <div className="ringkasan-item">
          <p>2 Produk</p>
          <p className="harga-kanan">Rp 1.650.000</p>
        </div>

        <div className="ringkasan-item">
          <p>Pengiriman</p>
          <p className="harga-kanan gratis">GRATIS</p>
        </div>

        <div className="ringkasan-item total">
          <p>Total</p>
          <p className="harga-kanan total-harga">Rp 1.650.000</p>
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

export default Keranjang;

import React from 'react';
import '../style/pria1.css';

const Pria1 = () => {
  return (
    <div className="detail-container">
      <div className="left-section">
        <img
          src="3.jpg"
          alt="Detail Barang"
          className="product-image"
        />
        <h1>BLUE SUMMER HOLIDAY GLASSES</h1>
          <p className="product-description">
          Deskripsi Barang: Ini adalah produk berkualitas tinggi yang cocok untuk berbagai keperluan.
        </p>
        <br></br>
        <br></br>
        <h1>spesifikasi</h1>
        <p>blablanlalajla</p>
      </div>
      <div className="right-section">
      <h1 itemprop="name" class="ProductDescription-Title gl-heading gl-heading--regular gl-heading--italic"><i>BLUE SUMMER HOLIDAY GLASSES</i></h1> 
      <p className="product-price">Rp 350,000</p>
        
        {/* Kontainer Pilihan Ukuran */}
        <div className="size-container">
          <h6>PILIH SIZE</h6>
          <select className="size-dropdown">
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="M">M</option>
          </select>
        </div>

        <button className="add-to-cart-button">Tambah Keranjang</button>
      </div>
    </div>
  );
};

export default Pria1;

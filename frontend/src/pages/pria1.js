import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/pria1.css';

const Pria1 = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const itemData = {
      name: "BLUE SUMMER HOLIDAY GLASSES",
      price: 20000,
      size: document.querySelector('.size-dropdown').value,
    };

    // Navigasi ke halaman keranjang dengan state data barang
    navigate('/keranjang', { state: itemData });
  };

  return (
    <div className="detail-container">
      <div className="left-section">
        <img
          src="3.jpg"
          alt="Detail Barang"
          className="product-image1"
        />
        <h1>BLUE SUMMER HOLIDAY GLASSES</h1>
        <p className="product-description">
          Deskripsi Barang: Ini adalah produk berkualitas tinggi yang cocok untuk berbagai keperluan.
        </p>
        <br />
        <h1>Spesifikasi</h1>
        <p>1.Bingkai:<br></br><br></br>

<li>Material:Kacamata bisa terbuat dari logam (seperti stainless steel atau titanium), plastik<br></br> (acetate atau propionate), atau campuran keduanya.</li><br></br>
<li>Bentuk: Bentuk bingkai bervariasi, seperti bulat, persegi, aviator, cat-eye, atau wayfarer.</li>
</p>
      </div>

      <div className="right-section">
        <h1 itemProp="name" className="ProductDescription-Title gl-heading gl-heading--regular gl-heading--italic">
          <i>BLUE SUMMER HOLIDAY GLASSES</i>
        </h1>
        <p className="product-price">Rp 20,000</p>

        {/* Kontainer Pilihan Ukuran */}
        <div className="size-container">
          <h6>PILIH SIZE</h6>
          <select className="size-dropdown">
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="M">M</option>
          </select>
        </div>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Tambah Keranjang
        </button>
      </div>
    </div>
  );
};

export default Pria1;

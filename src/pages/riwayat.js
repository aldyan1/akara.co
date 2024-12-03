import React from "react";
import "../style/riwayat.css"; // Import CSS file for styling

const Riwayat = () => {
  return (
    <div className="container1">
      <div className="produk-item1">
        <img src="3.jpg" alt="AK005 CANDY BLUE LENS" className="produk-image" />
        <div className="produk-detail">
          <h3>AK005 CANDY BLUE LENS</h3>
          <p>Size: A/S</p>
          <p>Jumlah Barang:</p>
          <p className="harga">
            Rp 20.000 <span className="harga-coret">Rp 30.000</span>
          </p>
          <button className="hapus-button">BELI LAGI</button>
        </div>
      </div>
    </div>
  );
};

export default Riwayat;

// src/komponen/navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <h1 className="logo">AKARA.CO</h1>
        <ul className="navbar">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/pria">PRIA</Link></li>
          <li><Link to="/wanita">WANITA</Link></li>
          <li><Link to="/riwayat">RIWAYAT</Link></li>
        </ul>
        <Link to="/login" className="login-link">Login</Link>
        <input type="text" className="search-bar" placeholder="Search" />
        <Link to="/keranjang" className="cart-button">
          <img
            src="https://th.bing.com/th/id/OIP.rArmZMsxLjruuw1BS-N9aQAAAA?rs=1&pid=ImgDetMain"
            alt="Cart Icon"
            className="cart-icon"
          />
        </Link>
      </nav>

      <div className="guarantee-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <img
            src="https://www.svgrepo.com/show/67631/back-arrow.svg"
            alt="Back"
            className="back-icon"
          />
          Kembali
        </button>

        <div className="guarantee-item">
          <img
            src="https://cdn.shopify.com/s/files/1/0580/2931/0092/files/FREE_canvas_pouch_with_this_order_In_stock_-2-removebg-preview.png?v=1648550576"
            alt="Jaminan Tepat Waktu"
            className="guarantee-icon"
          />
          <p>JAMINAN TEPAT WAKTU</p>
        </div>

        <div className="guarantee-item">
          <img
            src="https://cdn1.iconfinder.com/data/icons/shipping-and-deivery/24/_package_delivery-1024.png"
            alt="Keamanan Barang Prioritas"
            className="guarantee-icon"
          />
          <p>KEAMANAN BARANG ANDA PRIORITAS KAMI</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;

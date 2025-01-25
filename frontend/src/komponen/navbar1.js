import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/navbar1.css';

function Navbar1() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1 className="logo">AKARA.CO</h1>
        <ul className="navbar">
        <li><Link to="/">HOME</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/registrasi">REGISTRASI</Link></li>
        </ul>
      </header>

      <div className="guarantee-container">
        

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

export default Navbar1;

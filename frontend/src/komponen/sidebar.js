import React from "react";
import { Link } from "react-router-dom";
import "../style/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
      <h1>ADMIN</h1>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/produk">Produk</Link></li>
        <li><Link to="/pembelian">Pembelian</Link></li>
        <li><Link to="/pelanggan">Pengguna</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;

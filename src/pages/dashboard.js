import React from "react";
import Sidebar from "../komponen/sidebar";


import "../style/dashboard.css";


const Dashboard = () => {
  return (
   
      <div className="dashboard-content">
        <Sidebar />
        <div className="main-content">
          <h1>Halaman Dashboard</h1>

          <div className="dashboard-cards">
            <div className="card income">
              <h2>Penghasilan Bulan Ini</h2>
              <p>Rp 15.000.000</p>
            </div>
            <div className="card expenses">
              <h2>Pengeluaran Bulan Ini</h2>
              <p>Rp 5.000.000</p>
            </div>
          </div>
{/* Container untuk jumlah barang yang dijual */}
<div className="dashboard-cards">
<div className="card income">
            <h2>Jumlah Barang yang Dijual</h2>
            <p>200</p> {/* Ganti dengan data dinamis sesuai kebutuhan */}
          </div>

          {/* Container untuk jumlah barang yang terjual */}
          <div className="card income">
            <h2>Jumlah Barang yang Terjual</h2>
            <p>150</p> {/* Ganti dengan data dinamis sesuai kebutuhan */}
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default Dashboard;

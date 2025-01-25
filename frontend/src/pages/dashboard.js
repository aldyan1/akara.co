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
              <h2>Jumlah Pengguna</h2>
              <p>5</p>
            </div>
            <div className="card expenses">
              <h2>jumlah Barang yang terjual</h2>
              <p>10</p>
            </div>
          </div>
{/* Container untuk jumlah barang yang dijual */}
<div className="dashboard-cards">
<div className="card income">
            <h2>Stok barang</h2>
            <p>100</p> {/* Ganti dengan data dinamis sesuai kebutuhan */}
          </div>

          {/* Container untuk jumlah barang yang terjual */}
          </div>
        </div>
      </div>
    
  );
};

export default Dashboard;

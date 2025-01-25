import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/riwayat.css";

const Pembelian = () => {
  const [transaksi, setTransaksi] = useState([]);

  // Fetch data transaksi dari server
  useEffect(() => {
    fetchTransaksi();
  }, []);

  const fetchTransaksi = () => {
    axios
      .get("http://localhost:5000/api/transaksi")
      .then((response) => {
        setTransaksi(response.data);
      })
      .catch((error) => {
        console.error("Error fetching transaksi:", error);
      });
  };

  const handleHapus = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus transaksi ini?")) {
      axios
        .delete(`http://localhost:5000/api/transaksi/${id}`)
        .then(() => {
          alert("Transaksi berhasil dihapus!");
          fetchTransaksi();
        })
        .catch((error) => {
          console.error("Error deleting transaksi:", error);
        });
    }
  };

  return (
    <div className="riwayat-container">
      <h2>Riwayat Transaksi</h2>

      {/* Tabel Transaksi */}
      {transaksi.length > 0 ? (
        <table className="riwayat-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Penerima</th>
              <th>Alamat</th>
              <th>No Telepon</th>
              <th>Metode Pembayaran</th>
              <th>Total Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {transaksi.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nama_penerima}</td>
                <td>{item.alamat}</td>
                <td>{item.no_telp}</td>
                <td>{item.metode_pembayaran}</td>
                <td>{item.total_harga}</td>
                <td>
                  <button onClick={() => handleHapus(item.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data1">Belum ada data transaksi.</p>
      )}
    </div>
  );
};

export default Pembelian;

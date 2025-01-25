import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../komponen/sidebar";
import "../style/pembelian.css";

const Pembelian = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [formData, setFormData] = useState({
    nama_penerima: "",
    alamat: "",
    no_telp: "",
    metode_pembayaran: "",
    total_harga: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTambahTransaksi = () => {
    if (
      !formData.nama_penerima ||
      !formData.alamat ||
      !formData.no_telp ||
      !formData.metode_pembayaran ||
      !formData.total_harga
    ) {
      alert("Semua kolom harus diisi!");
      return;
    }

    if (isEditing) {
      axios
        .put(`http://localhost:5000/api/transaksi/${editId}`, formData)
        .then(() => {
          alert("Transaksi berhasil diperbarui!");
          fetchTransaksi();
          resetForm();
        })
        .catch((error) => {
          console.error("Error updating transaksi:", error);
        });
    } else {
      axios
        .post("http://localhost:5000/api/transaksi", formData)
        .then(() => {
          alert("Transaksi berhasil ditambahkan!");
          fetchTransaksi();
          resetForm();
        })
        .catch((error) => {
          console.error("Error adding transaksi:", error);
        });
    }
  };

  const handleEdit = (id) => {
    const transaksiToEdit = transaksi.find((item) => item.id === id);
    setFormData({
      nama_penerima: transaksiToEdit.nama_penerima,
      alamat: transaksiToEdit.alamat,
      no_telp: transaksiToEdit.no_telp,
      metode_pembayaran: transaksiToEdit.metode_pembayaran,
      total_harga: transaksiToEdit.total_harga,
    });
    setIsEditing(true);
    setEditId(id);
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

  const resetForm = () => {
    setFormData({
      nama_penerima: "",
      alamat: "",
      no_telp: "",
      metode_pembayaran: "",
      total_harga: "",
    });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="dashboard-content">
      <Sidebar />
      <div className="transaksi-container">
        <h2>Manajemen Pembelian</h2>

        {/* Form Tambah/Edit Transaksi */}
        <div className="form-transaksi">
          <input
            type="text"
            name="nama_penerima"
            value={formData.nama_penerima}
            onChange={handleChange}
            placeholder="Nama Penerima"
          />
          <textarea
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            placeholder="Alamat"
          />
          <input
            type="text"
            name="no_telp"
            value={formData.no_telp}
            onChange={handleChange}
            placeholder="Nomor Telepon"
          />
          <select
            name="metode_pembayaran"
            value={formData.metode_pembayaran}
            onChange={handleChange}
          >
            <option value="">Pilih Metode Pembayaran</option>
            <option value="GoPay">GoPay</option>
            <option value="DANA">DANA</option>
          </select>
          <input
            type="number"
            name="total_harga"
            value={formData.total_harga}
            onChange={handleChange}
            placeholder="Total Harga"
            step="0.01"
          />
          <button onClick={handleTambahTransaksi}>
            {isEditing ? "Update Transaksi" : "Tambah Transaksi"}
          </button>
        </div>

        {/* Tabel Transaksi */}
        {transaksi.length > 0 ? (
          <table className="transaksi-table">
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
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <button onClick={() => handleHapus(item.id)}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-data">Belum ada data transaksi.</p>
        )}
      </div>
    </div>
  );
};

export default Pembelian;

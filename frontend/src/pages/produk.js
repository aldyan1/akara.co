import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../komponen/sidebar";
import "../style/produk.css";

const Produk = () => {
  const [produk, setProduk] = useState([]);
  const [formData, setFormData] = useState({
    nama_barang: "",
    harga: "",
    gambar: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch data produk dari server
  useEffect(() => {
    fetchProduk();
  }, []);

  const fetchProduk = () => {
    axios
      .get("http://localhost:5000/api/barang")
      .then((response) => {
        setProduk(response.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "gambar") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleTambahProduk = async () => {
    if (!formData.nama_barang || !formData.harga || !formData.gambar) {
      alert("Semua kolom harus diisi!");
      return;
    }

    const data = new FormData();
    data.append("nama_barang", formData.nama_barang);
    data.append("harga", formData.harga);
    data.append("gambar", formData.gambar);

    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/barang/${editId}`, data);
        alert("Produk berhasil diperbarui!");
      } else {
        await axios.post("http://localhost:5000/api/barang", data);
        alert("Produk berhasil ditambahkan!");
      }
      fetchProduk();
      resetForm();
    } catch (error) {
      console.error("Error processing produk:", error);
      alert("Terjadi kesalahan, coba lagi.");
    }
  };

  const handleEdit = (id) => {
    const produkToEdit = produk.find((item) => item.id === id);
    setFormData({
      nama_barang: produkToEdit.nama_barang,
      harga: produkToEdit.harga,
      gambar: null,
    });
    setIsEditing(true);
    setEditId(id);
  };

  const handleHapus = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      try {
        await axios.delete(`http://localhost:5000/api/barang/${id}`);
        alert("Produk berhasil dihapus!");
        fetchProduk();
      } catch (error) {
        console.error("Error deleting produk:", error);
        alert("Terjadi kesalahan saat menghapus produk.");
      }
    }
  };

  const resetForm = () => {
    setFormData({ nama_barang: "", harga: "", gambar: null });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="dashboard-content">
      <Sidebar />
      <div className="produk-container">
        <h2>Manajemen Produk</h2>

        {/* Form Tambah/Edit Produk */}
        <div className="form-produk">
          <input
            type="text"
            name="nama_barang"
            value={formData.nama_barang}
            onChange={handleChange}
            placeholder="Nama Produk"
          />
          <input
            type="number"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
            placeholder="Harga"
          />
          <input
            type="file"
            name="gambar"
            onChange={handleChange}
            accept="image/*"
          />
          <button onClick={handleTambahProduk}>
            {isEditing ? "Update Produk" : "Tambah Produk"}
          </button>
        </div>

        {/* Tabel Produk */}
        {produk.length > 0 ? (
          <table className="produk-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Produk</th>
                <th>Harga</th>
                <th>Gambar</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {produk.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.nama_barang}</td>
                  <td>{item.harga}</td>
                  <td>
                    <img
                      src={`http://localhost:5000/uploads/barang/${item.gambar}`}
                      alt={item.nama_barang}
                      width="100"
                      height="100"
                      style={{ objectFit: "cover" }}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <button onClick={() => handleHapus(item.id)}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-data">Belum ada data produk.</p>
        )}
      </div>
    </div>
  );
};

export default Produk;

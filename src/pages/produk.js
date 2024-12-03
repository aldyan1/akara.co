import React, { useState } from "react";
import Sidebar from "../komponen/sidebar";
import "../style/produk.css";

const Produk = () => {
  const [produk, setProduk] = useState([]);
  const [formData, setFormData] = useState({
    namaProduk: "",
    kategori: "",
    harga: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTambahProduk = () => {
    const newProduk = {
      id: produk.length + 1,
      ...formData,
    };
    setProduk([...produk, newProduk]);
    setFormData({ namaProduk: "", kategori: "", harga: "" });
  };

  const handleEdit = (id) => {
    const produkToEdit = produk.find((item) => item.id === id);
    setFormData({
      namaProduk: produkToEdit.namaProduk,
      kategori: produkToEdit.kategori,
      harga: produkToEdit.harga,
    });
    handleHapus(id); // Menghapus item lama
  };

  const handleHapus = (id) => {
    setProduk(produk.filter((item) => item.id !== id));
  };

  return (
    <div className="dashboard-content">
        <Sidebar />
    <div className="produk-container">
      <h2>Daftar Produk</h2>

      {/* Form Tambah Produk */}
      <div className="form-produk">
        <input
          type="text"
          name="namaProduk"
          value={formData.namaProduk}
          onChange={handleChange}
          placeholder="Nama Produk"
        />
        <input
          type="text"
          name="kategori"
          value={formData.kategori}
          onChange={handleChange}
          placeholder="Kategori"
        />
        <input
          type="number"
          name="harga"
          value={formData.harga}
          onChange={handleChange}
          placeholder="Harga"
        />
        <button onClick={handleTambahProduk}>Tambah Produk</button>
      </div>

      {/* Tabel Produk */}
      <table className="produk-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Produk</th>
            <th>Kategori</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {produk.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.namaProduk}</td>
              <td>{item.kategori}</td>
              <td>{item.harga}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleHapus(item.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Produk;

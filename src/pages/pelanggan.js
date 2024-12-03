import React, { useState } from "react";
import Header from "../komponen/header";
import Sidebar from "../komponen/sidebar";
import "../style/pelanggan.css";

function Pelanggan() {
  const [barang, setBarang] = useState([]);
  const [formData, setFormData] = useState({
    namaBarang: "",
    kategoriBarang: "",
    hargaBarang: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTambahBarang = () => {
    const newBarang = {
      id: barang.length + 1,
      ...formData,
    };
    setBarang([...barang, newBarang]);
    setFormData({ namaBarang: "", kategoriBarang: "", hargaBarang: "" });
  };

  const handleEdit = (id) => {
    const editedBarang = barang.map((item) =>
      item.id === id ? { ...item, ...formData } : item
    );
    setBarang(editedBarang);
    setFormData({ namaBarang: "", kategoriBarang: "", hargaBarang: "" });
  };

  const handleHapus = (id) => {
    setBarang(barang.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <h2>Tabel Pria</h2>
          <div className="form-container">
            <input
              type="text"
              name="namaBarang"
              value={formData.namaBarang}
              onChange={handleChange}
              placeholder="Nama Barang"
            />
            <input
              type="text"
              name="kategoriBarang"
              value={formData.kategoriBarang}
              onChange={handleChange}
              placeholder="Kategori Barang"
            />
            <input
              type="number"
              name="hargaBarang"
              value={formData.hargaBarang}
              onChange={handleChange}
              placeholder="Harga Barang"
            />
            <button onClick={handleTambahBarang}>Tambah Barang</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Barang</th>
                <th>Kategori Barang</th>
                <th>Harga Barang</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {barang.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.namaBarang}</td>
                  <td>{item.kategoriBarang}</td>
                  <td>{item.hargaBarang}</td>
                  <td>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <button onClick={() => handleHapus(item.id)}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default Pelanggan;

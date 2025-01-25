import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../komponen/sidebar";
import "../style/pelanggan.css";

const Pengguna = () => {
  const [pengguna, setPengguna] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch data pengguna dari server
  useEffect(() => {
    fetchPengguna();
  }, []);

  const fetchPengguna = () => {
    axios
      .get("http://localhost:5000/api/pengguna")
      .then((response) => {
        setPengguna(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pengguna:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTambahPengguna = () => {
    if (
      !formData.nama ||
      !formData.email ||
      !formData.password ||
      !formData.tanggal_lahir ||
      !formData.jenis_kelamin
    ) {
      alert("Semua kolom harus diisi!");
      return;
    }

    if (isEditing) {
      axios
        .put(`http://localhost:5000/api/pengguna/${editId}`, formData)
        .then(() => {
          alert("Pengguna berhasil diperbarui!");
          fetchPengguna();
          resetForm();
        })
        .catch((error) => {
          console.error("Error updating pengguna:", error);
        });
    } else {
      axios
        .post("http://localhost:5000/api/pengguna", formData)
        .then(() => {
          alert("Pengguna berhasil ditambahkan!");
          fetchPengguna();
          resetForm();
        })
        .catch((error) => {
          console.error("Error adding pengguna:", error);
        });
    }
  };

  const handleEdit = (id) => {
    const penggunaToEdit = pengguna.find((item) => item.id === id);
    setFormData({
      nama: penggunaToEdit.nama,
      email: penggunaToEdit.email,
      password: "", // Jangan tampilkan password untuk alasan keamanan
      tanggal_lahir: penggunaToEdit.tanggal_lahir,
      jenis_kelamin: penggunaToEdit.jenis_kelamin,
    });
    setIsEditing(true);
    setEditId(id);
  };

  const handleHapus = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus pengguna ini?")) {
      axios
        .delete(`http://localhost:5000/api/pengguna/${id}`)
        .then(() => {
          alert("Pengguna berhasil dihapus!");
          fetchPengguna();
        })
        .catch((error) => {
          console.error("Error deleting pengguna:", error);
        });
    }
  };

  const resetForm = () => {
    setFormData({
      nama: "",
      email: "",
      password: "",
      tanggal_lahir: "",
      jenis_kelamin: "",
    });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="dashboard-content">
      <Sidebar />
      <div className="pengguna-container">
        <h2>Manajemen Pengguna</h2>

        {/* Form Tambah/Edit Pengguna */}
        <div className="form-pengguna">
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Nama Lengkap"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required={!isEditing}
          />
          <input
            type="date"
            name="tanggal_lahir"
            value={formData.tanggal_lahir}
            onChange={handleChange}
            placeholder="Tanggal Lahir"
          />
          <select
            name="jenis_kelamin"
            value={formData.jenis_kelamin}
            onChange={handleChange}
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="Laki-Laki">Laki-Laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
          <button onClick={handleTambahPengguna}>
            {isEditing ? "Update Pengguna" : "Tambah Pengguna"}
          </button>
        </div>

        {/* Tabel Pengguna */}
        {pengguna.length > 0 ? (
          <table className="pengguna-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Tanggal Lahir</th>
                <th>Jenis Kelamin</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pengguna.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.nama}</td>
                  <td>{item.email}</td>
                  <td>{item.tanggal_lahir}</td>
                  <td>{item.jenis_kelamin}</td>
                  <td>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <button onClick={() => handleHapus(item.id)}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-data">Belum ada data pengguna.</p>
        )}
      </div>
    </div>
  );
};

export default Pengguna;

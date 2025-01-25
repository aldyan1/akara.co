const db = require('../config/database'); // Pastikan database terhubung dengan benar

// Mendapatkan semua data barang
exports.getAllBarang = (req, res) => {
  const query = 'SELECT * FROM barang';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Menambahkan data barang
exports.addBarang = (req, res) => {
  const { nama_barang, harga } = req.body;
  const gambar = req.file ? req.file.filename : null;

  if (!nama_barang || !harga || !gambar) {
    return res.status(400).json({ error: 'Semua data wajib diisi!' });
  }

  const query = 'INSERT INTO barang (nama_barang, harga, gambar) VALUES (?, ?, ?)';
  db.query(query, [nama_barang, harga, gambar], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Barang added successfully', id: results.insertId });
  });
};

// Mengupdate data barang
exports.updateBarang = (req, res) => {
  const { id } = req.params;
  const { nama_barang, harga } = req.body;
  const gambar = req.file ? req.file.filename : null;

  if (!nama_barang || !harga) {
    return res.status(400).json({ error: 'Nama barang dan harga wajib diisi!' });
  }

  const query = 'UPDATE barang SET nama_barang = ?, harga = ?, gambar = ? WHERE id = ?';
  db.query(query, [nama_barang, harga, gambar, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Barang updated successfully' });
  });
};

// Menghapus data barang
exports.deleteBarang = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM barang WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Barang deleted successfully' });
  });
};

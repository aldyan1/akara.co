const db = require('../config/database');

// Mendapatkan semua pengguna
exports.getAllUsers = (req, res) => {
  const query = 'SELECT * FROM pengguna';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Menambahkan pengguna baru
exports.addUser = (req, res) => {
  const { nama, email, password, tanggal_lahir, jenis_kelamin } = req.body;

  if (!nama || !email || !password || !tanggal_lahir || !jenis_kelamin) {
    return res.status(400).json({ error: 'Semua data wajib diisi!' });
  }

  const query = `
    INSERT INTO pengguna (nama, email, password, tanggal_lahir, jenis_kelamin)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(query, [nama, email, password, tanggal_lahir, jenis_kelamin], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Pengguna berhasil ditambahkan.', id: results.insertId });
  });
};

// Mengupdate pengguna berdasarkan ID
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { nama, email, password, tanggal_lahir, jenis_kelamin } = req.body;

  const query = `
    UPDATE pengguna
    SET nama = ?, email = ?, password = ?, tanggal_lahir = ?, jenis_kelamin = ?
    WHERE id = ?
  `;
  db.query(query, [nama, email, password, tanggal_lahir, jenis_kelamin, id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Pengguna berhasil diperbarui.' });
  });
};

// Menghapus pengguna berdasarkan ID
exports.deleteUser = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM pengguna WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Pengguna berhasil dihapus.' });
  });
};

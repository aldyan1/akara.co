const db = require('../config/database');

// Mendapatkan semua transaksi
exports.getAllTransaksi = (req, res) => {
  const query = 'SELECT * FROM Transaksi';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Menambahkan transaksi baru
exports.addTransaksi = (req, res) => {
  const { nama_penerima, alamat, no_telp, metode_pembayaran, total_harga } = req.body;

  if (!nama_penerima || !alamat || !no_telp || !metode_pembayaran || !total_harga) {
    return res.status(400).json({ error: 'Semua data wajib diisi!' });
  }

  if (!['GoPay', 'DANA'].includes(metode_pembayaran)) {
    return res.status(400).json({ error: 'Metode pembayaran tidak valid!' });
  }

  const query = `
    INSERT INTO Transaksi (nama_penerima, alamat, no_telp, metode_pembayaran, total_harga)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(query, [nama_penerima, alamat, no_telp, metode_pembayaran, total_harga], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Transaksi berhasil ditambahkan.', id: results.insertId });
  });
};

// Mengupdate transaksi berdasarkan ID
exports.updateTransaksi = (req, res) => {
  const { id } = req.params;
  const { nama_penerima, alamat, no_telp, metode_pembayaran, total_harga } = req.body;

  if (!['GoPay', 'DANA'].includes(metode_pembayaran)) {
    return res.status(400).json({ error: 'Metode pembayaran tidak valid!' });
  }

  const query = `
    UPDATE Transaksi
    SET nama_penerima = ?, alamat = ?, no_telp = ?, metode_pembayaran = ?, total_harga = ?
    WHERE id = ?
  `;
  db.query(query, [nama_penerima, alamat, no_telp, metode_pembayaran, total_harga, id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Transaksi berhasil diperbarui.' });
  });
};

// Menghapus transaksi berdasarkan ID
exports.deleteTransaksi = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM Transaksi WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Transaksi berhasil dihapus.' });
  });
};

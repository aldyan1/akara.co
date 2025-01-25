const express = require('express');
const router = express.Router();
const transaksiController = require('../controllers/transaksi_controller'); // Sesuaikan dengan path controller

// Mendapatkan semua transaksi
router.get('/', transaksiController.getAllTransaksi);

// Menambahkan transaksi baru
router.post('/', transaksiController.addTransaksi);

// Mengupdate transaksi berdasarkan ID
router.put('/:id', transaksiController.updateTransaksi);

// Menghapus transaksi berdasarkan ID
router.delete('/:id', transaksiController.deleteTransaksi);

module.exports = router;

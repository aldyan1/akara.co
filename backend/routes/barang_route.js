const express = require('express');
const router = express.Router();
const barangController = require('../controllers/barang_controller');
const upload = require('../config/multer');

// Middleware untuk menangani error Multer
const multerErrorHandler = (err, req, res, next) => {
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();
};

// Mendapatkan semua barang
router.get('/', barangController.getAllBarang);

// Menambahkan barang baru
router.post('/', upload.single('gambar'), multerErrorHandler, barangController.addBarang);

// Mengupdate barang
router.put('/:id', upload.single('gambar'), multerErrorHandler, barangController.updateBarang);

// Menghapus barang
router.delete('/:id', barangController.deleteBarang);

module.exports = router;

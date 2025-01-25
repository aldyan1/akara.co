const express = require('express');
const router = express.Router();
const penggunaController = require('../controllers/pengguna_controller');

// Mendapatkan semua pengguna
router.get('/', penggunaController.getAllUsers);

// Menambahkan pengguna baru
router.post('/', penggunaController.addUser);

// Mengupdate data pengguna berdasarkan ID
router.put('/:id', penggunaController.updateUser);

// Menghapus pengguna berdasarkan ID
router.delete('/:id', penggunaController.deleteUser);

module.exports = router;

const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login_controller'); // Pastikan path ini sesuai

// Rute untuk login
router.post('/login', loginController.loginUser);

module.exports = router;

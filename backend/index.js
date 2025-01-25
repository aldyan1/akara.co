const express = require('express');
const path = require('path');
const cors = require('cors');
const penggunaRoutes = require('./routes/pengguna_route');
const barangRoutes = require('./routes/barang_route');
const loginRoutes = require('./routes/login_route');
const transaksiRoutes = require('./routes/transaksi_route'); // Tambahkan rute transaksi

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Folder statis untuk menyimpan file gambar
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rute API
app.use('/api/pengguna', penggunaRoutes); // Rute untuk pengguna
app.use('/api/barang', barangRoutes); // Rute untuk barang
app.use('/api/auth', loginRoutes); // Rute untuk login
app.use('/api/transaksi', transaksiRoutes); // Rute untuk transaksi

// Jalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

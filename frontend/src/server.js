const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Konfigurasi koneksi ke database MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password', // Ganti dengan password MySQL Anda
    database: 'akara.co' // Nama database
});

// Sambungkan ke database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// **Endpoint Registrasi**
app.post('/api/registrasi', (req, res) => {
    const { nama, email, password, tanggalLahir, gender } = req.body;

    const query = `
        INSERT INTO daftar_pengguna (nama, email, password, tanggal_lahir, gender)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(query, [nama, email, password, tanggalLahir, gender], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error registering user');
            return;
        }
        res.status(200).send('User registered successfully');
    });
});

// **Endpoint Login**
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    const query = `
        SELECT * FROM daftar_pengguna WHERE email = ? AND password = ?
    `;

    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error querying data:', err);
            res.status(500).send('Error during login');
            return;
        }

        if (results.length > 0) {
            // Jika email dan password cocok
            res.status(200).json({ 
                message: 'Login berhasil',
                user: results[0] // Mengembalikan data pengguna
            });
        } else {
            // Jika tidak cocok
            res.status(401).json({ error: 'Email atau password salah!' });
        }
    });
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

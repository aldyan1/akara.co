const db = require('../config/database');

// Controller untuk login
exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    // Query untuk memeriksa email dan password di database
    const query = `SELECT * FROM pengguna WHERE email = ? AND password = ?`;

    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            res.status(500).json({ error: 'Terjadi kesalahan server.' });
            return;
        }

        if (results.length > 0) {
            // Jika email dan password cocok
            const user = results[0];
            res.status(200).json({
                message: 'Login berhasil!',
                token: `user-${user.id}`, // Anda bisa mengganti token ini dengan JWT jika perlu
                user: {
                    id: user.id,
                    nama: user.nama,
                    email: user.email,
                },
            });
        } else {
            // Jika tidak cocok
            res.status(401).json({ error: 'Email atau password salah!' });
        }
    });
};

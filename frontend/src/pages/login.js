import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Status loading

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Reset error sebelum login
    setIsSubmitting(true); // Set loading saat login dimulai

    try {
      // Periksa akun khusus terlebih dahulu
      if (email === 'admin@gmail.com' && password === '123') {
        alert('Login berhasil sebagai Admin!');
        navigate('/dashboard'); // Arahkan ke dashboard jika admin
        return;
      }

      // Jika bukan akun khusus, lakukan login normal
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login berhasil!');
        localStorage.setItem('userToken', data.token); // Simpan token
        navigate('/home1'); // Arahkan ke keranjang
      } else {
        const data = await response.json();
        setError(data.error || 'Email atau password salah!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Terjadi kesalahan saat login. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false); // Matikan loading saat login selesai
    }
  };

  return (
    <div className="login">
      <div className="login-content">
        <div className="login1">
          <h1>Login</h1>
          <br />
          <form onSubmit={handleLogin}>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                style={{ width: '100%', padding: '12px', margin: '8px 0' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Masukkan password Anda"
                style={{ width: '100%', padding: '12px', margin: '8px 0' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <button type="submit" className="button-login" disabled={isSubmitting}>
              {isSubmitting ? 'Loading...' : 'Login'}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="buat-akun">
          <h1>Buat Akun</h1>
          <p>
            Sangat mudah. Masukkan alamat email Anda, isi formulir di halaman
            berikutnya dan nikmati keuntungan dari memiliki akun:
          </p>
          <br />
          <ul>
            <li>✔ Produk dengan harga spesial sepanjang tahun</li>
            <li>✔ Akses awal ke SALE</li>
            <li>✔ Tinjauan informasi personal Anda</li>
            <li>✔ Lacak & cek pesanan Anda</li>
            <li>✔ Kelola Wishlist</li>
            <li>✔ Checkout lebih cepat</li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;

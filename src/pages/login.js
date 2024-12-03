import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="menu-header">
        <button className="menu-button" onClick={() => navigate('/login')}>USER</button>
        <span className="separator">|</span>
        <button className="menu-button" onClick={() => navigate('/admin')}>ADMIN</button>
      </div>

      <div className="login-content">
        <div className="login1">
          <h1>Login</h1>
          <br />
          <form>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Masukkan email Anda" style={{ width: '100%', padding: '12px', margin: '8px 0' }} />
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="Masukkan password Anda" style={{ width: '100%', padding: '12px', margin: '8px 0' }} />
            </div>
            <br />
            <button type="submit" className="button-login">
              <h4>Login</h4>
            </button>
          </form>
        </div>

        <div className="buat-akun">
          <h1>Buat Akun</h1>
          <p>Sangat mudah. Masukkan alamat email Anda, isi formulir di halaman berikutnya dan nikmati keuntungan dari memiliki akun:</p>
          <br></br>
          <ul>
            <li>✔ Produk dengan harga spesial sepanjang tahun</li>
            <li>✔ Akses awal ke SALE</li>
            <li>✔ Tinjauan informasi personal Anda</li>
            <li>✔ Lacak & cek pesanan Anda</li>
            <li>✔ Kelola Wishlist</li>
            <li>✔ Checkout lebih cepat</li>
          </ul>
          <br></br>
          <button className="button-register">
            <h4>Registrasi</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

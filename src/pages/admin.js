// src/komponen/admin.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/admin.css'; // Import file CSS baru untuk admin

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="login">
      {/* Menu user dan admin sebagai tombol di bagian atas */}
      <div className="menu-header">
        <button className="menu-button" onClick={() => navigate('/login')}>USER</button>
        <span className="separator">|</span>
        <button className="menu-button" onClick={() => navigate('/admin')}>ADMIN</button>
      </div>

      {/* Container untuk login dan buat akun */}
      <div className="login-content">
        <div className="login1">
          <h1>Admin</h1>
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
            <button type="submit" className="button-login"onClick={() => navigate('/dashboard')}>Login</button>
          </form>
        </div>

       
      </div>
    </div>
  );
}

export default Admin;

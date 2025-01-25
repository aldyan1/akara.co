import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/registrasi.css';

const Registrasi = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    password: '',
    tanggal_lahir: '',
    jenis_kelamin: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Untuk menampilkan state loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error sebelum submit
    setIsSubmitting(true); // Set loading

    try {
      const response = await fetch('http://localhost:5000/api/pengguna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Registrasi berhasil!');
        navigate('/login'); // Arahkan ke halaman login
      } else {
        const data = await response.json();
        setError(data.error || 'Registrasi gagal. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Terjadi kesalahan saat registrasi.');
    } finally {
      setIsSubmitting(false); // Matikan loading
    }
  };

  return (
    <div className="register">
      <div className="register-content">
        <div className="register1">
          <h1>Registrasi</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nama</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan nama Anda"
                value={formData.nama}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan email Anda"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Masukkan password Anda"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Tanggal Lahir</label>
              <input
                type="date"
                name="tanggal_lahir"
                value={formData.tanggal_lahir}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Jenis Kelamin</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="jenis_kelamin"
                    value="Laki-laki"
                    checked={formData.jenis_kelamin === 'Laki-laki'}
                    onChange={handleChange}
                    required
                  />
                  Laki-laki
                </label>
                <label>
                  <input
                    type="radio"
                    name="jenis_kelamin"
                    value="Perempuan"
                    checked={formData.jenis_kelamin === 'Perempuan'}
                    onChange={handleChange}
                    required
                  />
                  Perempuan
                </label>
              </div>
            </div>
            <br />
            <button type="submit" className="button-register" disabled={isSubmitting}>
              {isSubmitting ? 'Loading...' : <h4>Registrasi</h4>}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Registrasi;

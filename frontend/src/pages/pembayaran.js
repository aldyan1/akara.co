import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../style/pembayaran.css";

const Pembayaran = () => {
  const location = useLocation();
  const { name, price, size } = location.state || {};
  const [totalHarga, setTotalHarga] = useState(0);
  const [namaPenerima, setNamaPenerima] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // Hitung total harga termasuk pengiriman
  useEffect(() => {
    if (price) {
      const biayaPengiriman = 5000; // Biaya pengiriman tetap
      setTotalHarga(price + biayaPengiriman);
    }
  }, [price]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "nama") setNamaPenerima(value);
    if (name === "alamat") setAlamat(value);
    if (name === "noTelp") setNoTelp(value);
    if (name === "paymentMethod") setPaymentMethod(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nama_penerima: namaPenerima,
      alamat,
      no_telp: noTelp,
      metode_pembayaran: paymentMethod,
      total_harga: totalHarga,
    };

    axios
      .post("http://localhost:5000/api/transaksi", data)
      .then(() => {
        alert("Transaksi berhasil disimpan!");
        setNamaPenerima("");
        setAlamat("");
        setNoTelp("");
        setPaymentMethod("");
      })
      .catch((error) => {
        console.error("Gagal menyimpan transaksi:", error);
        alert("Gagal menyimpan transaksi!");
      });
  };

  return (
    <div className="pembayaran-container">
      {/* Bagian Kiri - Form Pembayaran */}
      <div className="payment-form-container">
        <h2>PEMBAYARAN</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nama">Nama Penerima</label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Masukkan nama penerima"
              value={namaPenerima}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="alamat">Alamat</label>
            <textarea
              id="alamat"
              name="alamat"
              placeholder="Masukkan alamat"
              rows="4"
              value={alamat}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="noTelp">No. Telp</label>
            <input
              type="text"
              id="noTelp"
              name="noTelp"
              placeholder="Masukkan nomor telepon"
              value={noTelp}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Pembayaran Melalui</label>
            <select
              name="paymentMethod"
              value={paymentMethod}
              onChange={handleInputChange}
              required
            >
              <option value="">Pilih Pembayaran</option>
              <option value="DANA">DANA</option>
              <option value="GoPay">GoPay</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="totalHarga">Total Pembayaran</label>
            <input
              type="text"
              id="totalHarga"
              name="totalHarga"
              value={`Rp ${totalHarga.toLocaleString()}`}
              readOnly
            />
          </div>
          <button type="submit" className="submit-button">
            Pesan
          </button>
        </form>
      </div>

      {/* Bagian Kanan - Rincian Pembayaran */}
      <div className="payment-details-container">
        <h2>RINCIAN PESANAN</h2>
        {name ? (
          <div className="payment-details">
            <div className="payment-row">
              <p>Nama Barang</p>
              <p>{name}</p>
            </div>
            <div className="payment-row">
              <p>Ukuran</p>
              <p>{size}</p>
            </div>
            <div className="payment-row">
              <p>Harga</p>
              <p>Rp {price.toLocaleString()}</p>
            </div>
            <div className="payment-row">
              <p>Pengiriman</p>
              <p>Rp 5000</p>
            </div>
            <div className="payment-row total">
              <p>Total</p>
              <p>Rp {totalHarga.toLocaleString()}</p>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <p>Tidak ada barang untuk pembayaran</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pembayaran;

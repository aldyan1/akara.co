import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/keranjang.css";

const Keranjang = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, price, size, imageSrc } = location.state || {};

  // Biaya pengiriman tetap
  const shippingCost = 5000;

  // Menghitung total (harga produk + pengiriman)
  const totalPrice = price ? price + shippingCost : shippingCost;

  const handleCheckout = () => {
    if (!name || !price) {
      // Jika tidak ada data produk
      alert("Keranjang Kosong");
    } else {
      // Data rincian pesanan yang akan dikirimkan ke Pembayaran.js
      const orderDetails = {
        name,
        price,
        size,
        imageSrc,
        shippingCost,
        totalPrice,
      };

      // Navigasi ke halaman Pembayaran dan kirim data
      navigate("/pembayaran", { state: orderDetails });
    }
  };

  return (
    <div className="keranjang-container">
      {/* Bagian Kiri - Keranjang */}
      <div className="cart-left">
        <h2>KERANJANG</h2>
        {name ? (
          <>
            <img
              src={imageSrc || "3.jpg"}
              alt={name}
              className="product-image"
            />
            <p>{name}</p>
            <p>Harga: Rp {price ? price.toLocaleString() : "0"}</p>
            <p>Ukuran: {size || "N/A"}</p>
          </>
        ) : (
          <div className="empty-cart">
            <p>Keranjang Kosong</p>
          </div>
        )}

        {/* Kontainer Baru */}
        <div className="extra-container">
          <h3>INFORMASI TAMBAHAN</h3>
          <p>
            Nikmati diskon tambahan dengan memasukkan kode promo atau cek promo
            spesial yang tersedia di halaman utama kami.
          </p>
          <ul>
            <li>Gratis pengiriman untuk pesanan di atas Rp 1.000.000</li>
            <li>Pengembalian mudah dalam waktu 30 hari</li>
            <li>Support 24/7 untuk pertanyaan pelanggan</li>
          </ul>
        </div>
      </div>

      {/* Bagian Kanan - Ringkasan Pesanan */}
      <div className="ringkasan-container">
        <h2>RINGKASAN PESANAN:</h2>

        <div className="ringkasan-item">
          <p>Produk</p>
          <p className="harga-kanan">Rp {price ? price.toLocaleString() : "0"}</p>
        </div>

        <div className="ringkasan-item">
          <p>Pengiriman</p>
          <p className="harga-kanan gratis">Rp {shippingCost.toLocaleString()}</p>
        </div>

        <div className="ringkasan-item total">
          <p>Total</p>
          <p className="harga-kanan total-harga">Rp {totalPrice.toLocaleString()}</p>
        </div>

        {/* Tombol Checkout dipindahkan ke bawah */}
        <button className="checkout-button" onClick={handleCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Keranjang;

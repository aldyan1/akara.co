import React from "react";
import "../style/home.css";

const Home = () => {
  return (
    <div className="container">
      {/* First Section with Mosaic Layout */}
      <div className="image-container large overlap">
        <img
          src="https://cdn.shoplightspeed.com/shops/639222/files/54572199/570x800x1/banbe-the-hill-sunglasses-gold-gold-fade.jpg"
          alt="Person 1"
          className="image"
        />
        <div className="text-overlay">
          <h1>EMPOWERED IN MOTION</h1>
          <p>Tunjukkan kekuatan pesonamu dengan koleksi kacamata yang mempesona</p>
          <button className="shop-button">BELANJA SEKARANG</button>
        </div>
      </div>
      <div className="image-container small">
        <img
          src="https://th.bing.com/th/id/OIP._zhg7Qbcn1ZwLNr5bgLyKgHaJd?pid=ImgDet&w=178&h=227&c=7&dpr=1.5"
          alt="Person 2"
          className="image"
        />
      </div>
      <div className="image-container small shadow">
        <img
          src="https://th.bing.com/th/id/OIP.uJqX732NQEWkorki4Vb0rAAAAA?pid=ImgDet&w=178&h=225&c=7&dpr=1,5"
          alt="Person 3"
          className="image"
        />
      </div>
      <div className="image-container medium">
        <img
          src="https://www.nine-eyewear.com/media/npejdlc4/nine-sense-2916.jpg"
          alt="Java Collection"
          className="image"
        />
      </div>
      <div className="image-container small">
        <img
          src="https://img.freepik.com/premium-photo/pretty-young-teenager-with-nerdy-face-study-glasses_47726-16245.jpg"
          alt="Java Collection 2"
          className="image"
        />
      </div>
      <div className="image-container medium shadow">
        <img
          src="https://img.freepik.com/premium-photo/young-beautiful-woman-posing_218381-19538.jpg"
          alt="Java Collection 3"
          className="image"
        />
      </div>
      <div className="image-container small">
        <img
          src="https://i.pinimg.com/736x/33/7c/0a/337c0a3c6cfa335d8637c5fca3d30893.jpg"
          alt="Java Collection 4"
          className="image"
        />
      </div>
    </div>
  );
};

export default Home;

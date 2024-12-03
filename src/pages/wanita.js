import React from 'react';
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import '../style/wanita.css';

const Wanita = () => {
    // Data produk untuk semua box
    const products = [
        {
            id: 1,
            image: '12.jpg',
            description: 'AK004 SWEETPINK',
            price: 20000,
            link: '/pria1'
        },
        {
            id: 2,
            image: '13.jpg',
            description: 'AK004 SWEET TEA',
            price: 20000,
            link: '/pria2'
        },
        {
            id: 3,
            image: '11.jpg',
            description: 'AK004 YELLOW BLACK',
            price: 20000,
            link: '/pria3'
        },
        {
            id: 4,
            image: '14.jpg',
            description: 'AK004 TRANSPARAN',
            price: 20000,
            link: '/pria4'
        },
        {
            id: 5,
            image: '6.jpg',
            description: 'AK001 TRANSPARAN',
            price: 20000,
            link: '/pria5'
        },
        {
            id: 6,
            image: '7.jpg',
            description: 'AK006 CYBER SILVER',
            price: 25000,
            link: '/pria6'
        },
        {
            id: 7,
            image: '5.jpg',
            description: 'AK001 FULL BLACK',
            price: 20000,
            link: '/pria7'
        },
        {
            id: 8,
            image: '8.jpg',
            description: 'AK001 FULL WHITE',
            price: 20000,
            link: '/pria8'
        }
    ];

    return (
        <div className="wanita-container">
           <h1 className="gl-heading gl-heading--l gl-heading--italic gl-heading--no-margin"><i>WANITA</i></h1>
            <div className="grid-container">
                {/* Map untuk semua produk */}
                {products.map((product) => (
                    <Link to={product.link} key={product.id} className="box-link">
                        <div className="box">
                            <img src={product.image} alt={`Gambar ${product.description}`} className="product-image" />
                            <p className="description">{product.description}</p>
                            <p className="price">Rp{product.price.toLocaleString()}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Wanita;

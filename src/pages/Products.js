
import React, { useState, useEffect } from 'react';
import './Product.css';

const Products = () => {
  const [currentImage, setCurrentImage] = useState(0);

    const products = [
        {
            images: [
                '/public/img/product_image1.jpg',
                '/public/img/product_image2.jpg',
                '/public/img/product_image3.jpg'
            ],
            title: '거실형 진공관앰프',
            description: '넓은 공간을 부족함 없이 asdasdadasdasdadsasd'
        },
        {
            images: [
                '/public/img/another_product_image1.jpg',
                '/public/img/another_product_image2.jpg',
                '/public/img/another_product_image3.jpg'
            ],
            title: '개인형 진공관앰프',
            description: '아날로그에 진한 향수를 asdasdasdasdasdasdasdasdas'
        }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
          setCurrentImage(currentImage => (currentImage + 1) % products[0].images.length);
      }, 5000); // 5 seconds
      return () => clearInterval(interval);
  }, []);

  return (
    
    
    <div className="product-container">
            <div className="product-title">
                <h2>Products</h2>
            </div>
            <div className="product-grid">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <div className="imagebox">
                            <img src={product.images[currentImage]} alt={product.title} />
                        </div>
                        <div className="product-text">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  );
};

export default Products;

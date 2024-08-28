// app/components/ProductSlider.js
'use client';

import { useState, useEffect } from 'react';
import styles from './Product.module.css';

export default function ProductSlider({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 3000); // 5 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={styles.imagebox}>
      <img src={images[currentImage]} alt="Product Image" />
    </div>
  );
}

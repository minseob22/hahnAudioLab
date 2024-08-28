"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css'; // 스타일 파일

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // 클라이언트 여부 확인

  useEffect(() => {
    setIsClient(true); // 컴포넌트가 마운트된 후 클라이언트에서 동작하도록 설정
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement && isClient) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
      setMenuOpen(false);
      // URL에 해시를 추가합니다.
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.brand}>
          <h1 className={styles.mobileBrand}>Hahn Audio Lab</h1> 
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>

          <li className={`${styles.navItem} ${styles.mobileOnly}`}>
            <a href="/#banner" onClick={(e) => handleScroll(e, 'banner')}>Home</a>
          </li>

          <li className={styles.navItem}>
            <a href="/#philosophy" onClick={(e) => handleScroll(e, 'philosophy')}>Philosophy</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#concept" onClick={(e) => handleScroll(e, 'concept')}>Concept</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#products" onClick={(e) => handleScroll(e, 'products')}>Products</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#packages" onClick={(e) => handleScroll(e, 'packages')}>Packages</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#reviews" onClick={(e) => handleScroll(e, 'reviews')}>Reviews</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#policy" onClick={(e) => handleScroll(e, 'policy')}>Policy</a>
          </li>
          <li className={styles.navItem}>
            <a href="https://blog.naver.com/gksehdgns06" target="_blank" rel="noopener noreferrer">Blog</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#contacts" onClick={(e) => handleScroll(e, 'contacts')}>Contacts</a>
          </li>
        </ul>
      </nav>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
}

"use client"

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css'; // 스타일 파일

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
            <a href="/#banner" onClick={closeMenu}>Home</a>
          </li>

          <li className={styles.navItem}>
            <a href="/#philosophy" onClick={closeMenu}>Philosophy</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#concept" onClick={closeMenu}>Concept</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#products" onClick={closeMenu}>Products</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#packages" onClick={closeMenu}>Packages</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#reviews" onClick={closeMenu}>Reviews</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#policy" onClick={closeMenu}>Policy</a>
          </li>
          <li className={styles.navItem}>
            <a href="https://blog.naver.com/gksehdgns06" target="_blank" rel="noopener noreferrer">Blog</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#contacts" onClick={closeMenu}>Contacts</a>
          </li>
        </ul>
      </nav>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
}

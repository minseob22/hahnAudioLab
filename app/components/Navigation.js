/*경로추가*/

"use client"

import { useState } from 'react';
import Link from 'next/link';
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
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/#philosophy" onClick={closeMenu}>Philosophy</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#concept" onClick={closeMenu}>Concept</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#products" onClick={closeMenu}>Products</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#packages" onClick={closeMenu}>Packages</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#reviews" onClick={closeMenu}>Reviews</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#policy" onClick={closeMenu}>Policy</Link>
          </li>
          <li className={styles.navItem}>
            <a href="https://blog.naver.com/gksehdgns06" target="_blank" rel="noopener noreferrer">Blog</a>
          </li>
          <li className={styles.navItem}>
            <Link href="/#contacts" onClick={closeMenu}>Contacts</Link>
          </li>
        </ul>
      </nav>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
}

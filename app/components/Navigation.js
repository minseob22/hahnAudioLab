"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css'; // 스타일 파일

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const basePath = '/hahnAudioLab';

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
            <Link href={`https://minseob22.github.io/hahnAudioLab//#banner`} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`https://minseob22.github.io/hahnAudioLab//#philosophy`} onClick={closeMenu}>
              Philosophy
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`https://minseob22.github.io/hahnAudioLab//#concept`} onClick={closeMenu}>
              Concept
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`https://minseob22.github.io/hahnAudioLab//#products`} onClick={closeMenu}>
              Products
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`https://minseob22.github.io/hahnAudioLab//#packages`} onClick={closeMenu}>
              Packages
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`https://minseob22.github.io/hahnAudioLab//#reviews`} onClick={closeMenu}>
              Reviews
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`https://minseob22.github.io/hahnAudioLab//#policy`} onClick={closeMenu}>
              Policy
            </Link>
          </li>
          <li className={styles.navItem}>
            <a href="https://blog.naver.com/gksehdgns06" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </li>
          <li className={styles.navItem}>
            <Link href={`https://minseob22.github.io/hahnAudioLab//#contacts`} onClick={closeMenu}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
}

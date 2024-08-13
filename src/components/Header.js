import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/#home" onClick={closeMenu}>Home</Link></li>
          <li className="nav-item"><Link to="/#philosophy" onClick={closeMenu}>Philosophy</Link></li>
          <li className="nav-item"><Link to="/#concept" onClick={closeMenu}>Concept</Link></li>
          <li className="nav-item"><Link to="/#products" onClick={closeMenu}>Products</Link></li>
          <li className="nav-item"><Link to="/#packages" onClick={closeMenu}>Packages</Link></li>
          <li className="nav-item"><Link to="/#reviews" onClick={closeMenu}>Reviews</Link></li>
          <li className="nav-item"><Link to="/#policy" onClick={closeMenu}>Policy</Link></li>
          <li><a href="https://blog.naver.com/gksehdgns06" target="_blank" rel="noopener noreferrer">Blog</a></li>
          <li className="nav-item"><Link to="/#contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;

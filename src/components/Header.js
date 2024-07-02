// src/components/Header.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const handleLinkClick = (e, target) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" onClick={(e) => handleLinkClick(e, '#home')}>Home</Link></li>
          <li className="nav-item"><Link to="/" onClick={(e) => handleLinkClick(e, '#philosophy')}>Philosophy</Link></li>
          <li className="nav-item"><Link to="/" onClick={(e) => handleLinkClick(e, '#concept')}>Concept</Link></li>
          <li className="nav-item"><Link to="/" onClick={(e) => handleLinkClick(e, '#products')}>Products</Link></li>
          <li className="nav-item"><Link to="/" onClick={(e) => handleLinkClick(e, '#packages')}>Packages</Link></li>
          <li className="nav-item"><Link to="/" onClick={(e) => handleLinkClick(e, '#reviews')}>Reviews</Link></li>
          <li className="nav-item"><Link to="/" onClick={(e) => handleLinkClick(e, '#policy')}>Policy</Link></li>
          <li><a href="https://blog.naver.com/gksehdgns06" target="_blank" rel="noopener noreferrer">Blog</a></li>
          <li className="nav-item"><Link to="/" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

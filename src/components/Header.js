// src/components/Header.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    <header>
      <nav>
        <ul>
          <li><Link to="/" onClick={(e) => handleLinkClick(e, '#home')}>Home</Link></li>
          <li><Link to="/" onClick={(e) => handleLinkClick(e, '#philosophy')}>Philosophy</Link></li>
          <li><Link to="/" onClick={(e) => handleLinkClick(e, '#concept')}>Concept</Link></li>
          <li><Link to="/" onClick={(e) => handleLinkClick(e, '#products')}>Products</Link></li>
          <li><Link to="/" onClick={(e) => handleLinkClick(e, '#packages')}>Packages</Link></li>
          <li><Link to="/" onClick={(e) => handleLinkClick(e, '#reviews')}>Reviews</Link></li>
          <li><Link to="/" onClick={(e) => handleLinkClick(e, '#blog')}>Blog</Link></li>
          <li><Link to="/" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

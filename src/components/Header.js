import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          <li><Link to="/">홈</Link></li>
          <li><Link to="/products">제품</Link></li>
          <li><Link to="/packages">패키지</Link></li>
          <li><Link to="/reviews">리뷰</Link></li>
          <li><Link to="/blog">블로그</Link></li>
          <li><Link to="/contact">연락처</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

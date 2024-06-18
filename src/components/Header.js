import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/products">제품</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/packages">패키지</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reviews">리뷰</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">블로그</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">문의</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
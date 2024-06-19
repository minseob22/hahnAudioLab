import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand">
          
          <button                   //줄 세게 아이콘 토클
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">아이콘</span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/#home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#packages">Packages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#reviews">Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
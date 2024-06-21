// src/components/ScrollToSection.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const hash = location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [location]);

  return children;
};

export default ScrollToSection;

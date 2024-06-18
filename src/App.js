import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Packages from './pages/Packages';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';

function App() {
  return (
    <div>
      <header>
        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#packages">Packages</a>
          <a href="#reviews">Reviews</a>
          <a href="#blog">Blog</a>
        </nav>
      </header>
      <main>
        <Home />
        <Products />
        <Packages />
        <Reviews />
        <Blog />
      </main>
    </div>
  );
}

export default App;
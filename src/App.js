// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; 
import Products from './pages/Products'; 
import Packages from './pages/Packages'; 
import Reviews from './pages/Reviews'; 
import Blog from './pages/Blog'; 
import Contact from './pages/Contact'; 

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/packages" component={Packages} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;

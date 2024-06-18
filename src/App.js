import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Packages from './pages/Packages';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';

import Contact from './pages/Contact';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// eslint-disable-next-line

const App = () => {
    return (
        <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/packages" component={Packages} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };

export default App;

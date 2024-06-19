import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Packages from './pages/Packages';
import Concept from './pages/Concept';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';
import Header from './components/Header';
import Contact from './pages/Contact';
import Philosophy from './pages/Philosophy';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <main>
          <section id="home"><Home /></section> 
          <section id="philosophy"><Philosophy /></section>
          <section id="concept"><Concept /></section>
          <section id="products"><Products /></section>
          <section id="packages"><Packages /></section>
          <section id="reviews"><Reviews /></section>
          <section id="blog"><Blog /></section>
          <section id="contact"><Contact/></section>
          
      </main>
    </div>
    </Router>
  );
}

export default App;
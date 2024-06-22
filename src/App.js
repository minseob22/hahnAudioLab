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
import ReviewDetails from './pages/ReviewDetails';
import ScrollToSection from './components/ScrollToSection';
import './App.css';


function App() {
  return (
    <Router>
      <ScrollToSection>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <section id="home" className="no-margin"><Home /></section>
                  <section id="philosophy"><Philosophy /></section>
                  <section id="concept"><Concept /></section>
                  <section id="products"><Products /></section>
                  <section id="packages"><Packages /></section>
                  <section id="reviews"><Reviews /></section>
                  <section id="contact"><Contact /></section>
                </>
              } />
              <Route path="/review-details/:reviewId" element={<ReviewDetails />} />
            </Routes>
          </main>
        </div>
      </ScrollToSection>
    </Router>
  );
}

export default App;

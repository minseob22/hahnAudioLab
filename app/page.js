import Banner from './components/Banner';
import Concept from './components/Concept';
import Contact from './components/Contact';
import Packages from './components/Packages';
import Philosophy from './components/Philosophy';
import Policy from './components/Policy';
import Products from './components/Products';
import Reviews from './components/Reviews';

export default async function Home() {
  // 데이터를 비동기적으로 가져오는 과정
  
  return (
    <div>
      <Banner />
      <Philosophy />
      <Concept />
      <Products />
      <Packages />
      <Reviews />
      <Policy />
      <Contact />

    </div>
  );
}

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="visual_section no-margin">
    <div className="banner">
      <img src={`${process.env.PUBLIC_URL}/img/62582a53409ff.jpg`} alt="Philosophy" />
      <div className="banner-txt">
        <h1>Hahn Audio Lab</h1>
      </div>
    </div>

    <div className="line">
      <img src={`${process.env.PUBLIC_URL}/img/line.png`} alt="Line" />
    </div>
  </div>
  )
};

export default Home;
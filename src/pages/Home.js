import React from 'react';

const Home = () => {
  return (
  <div className="visual_section">
    <div className= "banner"> 
      <img src={`${process.env.PUBLIC_URL}/img/62582a53409ff.jpg`} alt="Philosophy" />{/* 이미지 넣을 div */}
        <div className="banner-txt"> {/* 텍스트 넣을 div */}
        <h1> Hahn Audio Lab </h1> {/* 넣을 글자 */}
        </div>
      </div>

      <div className="line">
        <img>

        </img>
    </div>
  
</div>
  )
};

export default Home;
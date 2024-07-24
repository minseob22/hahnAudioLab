import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
  const texts = [
    "한동안 잊고 살아왔던 음악을 이제라도 듣고자 하는 분들을 위하여.....",
    "젊었을 때부터 갖고 싶었던 명품 오디오로 음악을 듣고 싶었지만 치열한 삶으로 아쉬움 속에서 보냈던 긴 세월, 지금이라도 제대로 된 오디오의 로망을 이루고 싶다.",
    "그러나 막상 어떤 앰프, 어떤 스피커를 구입하여야 할지 너무 막막하네요.",
    "이런 분들에게 정통기법으로 제작한 hand-made 진공관앰프, 잘 어울리는 스피커, 뮤직소스기기(CD, LP, 튜너, 블루투스 등)를 패키지로 제공하여 진정으로 음악을 즐기도록 도와드리고 싶습니다."
  ];

  return (
    <div className="philosophy-container">
      <h2 className="philosophy-title">Philosophy</h2>
      <div className="philosophy-content">
        <div className="image-box">
          <img src={`${process.env.PUBLIC_URL}/img/27368be00be15.png`} alt="Philosophy" />
        </div>
        <div className="text-box">
          <div className="text-container">
            {texts.map((text, index) => (
              <div key={index}>{text}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;

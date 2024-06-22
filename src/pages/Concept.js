import React from "react";
import './Concept.css';


const concpetItems = [
    {
        imgSrc: process.env.PUBLIC_URL +  '/img/3939db3e34a13.png',
        text: '하드와이어링이라는 정통제작기법으로 만든 hand-made 제품' 
    },

    {
        imgSrc: process.env.PUBLIC_URL +  '/img/62582a53409ff.jpg',
        text: '미니멀한 인터페이스' 
    },

    {
        imgSrc: process.env.PUBLIC_URL +  '/img/e76199bb72935.png',
        text: '휴대폰 속 모든 음악을 연결하는 블루투스 인터페이스' 
    },

    {
        imgSrc: process.env.PUBLIC_URL +  '/img/32c304232bfb3.jpg',
        text: '고객이 원하는 장르와 취향을 반영한 맞춤형 제작' 
    }
];

const Concept = () => {
    return(
        <div className="concept-container">
      <div className="concept-title">
        <h2>Concept</h2>
      </div>
      <div className="concept-grid">
        {concpetItems.map((item, index) => (
          <div key={index} className="concept-item">
            <div className="concept-image">
              <img src={item.imgSrc} alt={`Concept ${index + 1}`} />
            </div>
            <div className="concept-text">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )

}
export default Concept;
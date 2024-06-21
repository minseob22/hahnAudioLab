import React from "react";
import './Concept.css';


const concpetItems = [
    {
        imgSrc: process.env.PUBLIC_URL +  '/img/concept_image1.jpg',
        text: '하드와이어링이라는 정통제작기법으로 만든 hand-made 제품' 
    },

    {
        imgSrc: process.env.PUBLIC_URL +  '/img/concept_image1.jpg',
        text: '하드와이어링이라는 정통제작기법으로 만든 hand-made 제품' 
    },

    {
        imgSrc: process.env.PUBLIC_URL +  '/img/concept_image1.jpg',
        text: '하드와이어링이라는 정통제작기법으로 만든 hand-made 제품' 
    },

    {
        imgSrc: process.env.PUBLIC_URL +  '/img/concept_image1.jpg',
        text: '하드와이어링이라는 정통제작기법으로 만든 hand-made 제품' 
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
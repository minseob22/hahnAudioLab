import React, { useState } from 'react';
import './Philosophy.css';
import { Form } from 'react-router-dom';


const Philosophy = () => {
  const [texts, setTexts] = useState([]); // 입력된 문장을 저장할 상태
  const [inputText, setInputText] = useState(''); // 입력 필드의 값을 저장할 상태

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddText = () => {
    if (inputText.trim()) {
      setTexts([...texts, inputText]);
      setInputText('');
    }
  };
  
  return (
    <div className="philosophy-container">
      <div className="philosophy-title">Philosophy</div>
      <div className="philosophy-content">
        <div className="image-box">
          {/* 사진 들어가는 상자 */}
          <img src={`${process.env.PUBLIC_URL}/img/27368be00be15.png`} alt="Philosophy" />

        </div>
        <div className="text-box">
          {/* 글자 들어가는 상자 */}
          <div className="input-container">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="문장을 입력하세요"
            />
            <button onClick={handleAddText}>추가</button>
          </div>
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
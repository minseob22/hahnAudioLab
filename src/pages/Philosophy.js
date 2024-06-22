import React, { useState } from 'react';
import './Philosophy.css';

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
          <div className="input-container">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="문장을 입력하세요"
            />
            <button onClick={handleAddText}>추가</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;

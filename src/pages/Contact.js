import React from 'react';
import './Contact.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h2 className="contacts-title">Contacts</h2>
      <div className="contacts-content">
        <div className="contact-item">
          <img src="path/to/phone-icon.png" alt="phone" />
          <a href="tel:0502-002-1000">0502-002-1000</a>
        </div>
        <div className="contact-item">
          <img src="path/to/email-icon.png" alt="email" />
          <a href="mailto:ws908250@naver.com">ws908250@naver.com</a>
        </div>
        <div className="contact-item">
          <img src="path/to/address-icon.png" alt="address" />
          <p>서울 서초구 양재동354-9 남석빌딩 301호 한오디오샵<br/><a href="https://map.naver.com/?query=서울 서초구 양재동354-9 남석빌딩 301호">지도보기</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

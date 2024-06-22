// src/pages/Packages.js

import React from 'react';
import './Packages.css';

const Packages = () => {
  return (
    <div className="packages">
      <h2>Packages</h2>
      <div className="package-list">
        <div className="package-item">
          <img src="path_to_image_A" alt="Package Type A" />
          <h3>Package Type A</h3>
          <p>– living room with Focal Speaker</p>
          <ul>
            <li>거실형 진공관 앰프</li>
            <li>포칼 Aria 936 스피커</li>
            <li>마란츠 CD 6006 플레이어</li>
            <li>※ 스피커는 타사 제품도 추천 가능합니다.</li>
          </ul>
        </div>
        <div className="package-item">
          <img src="path_to_image_B" alt="Package Type B" />
          <h3>Package Type B</h3>
          <p>– personal</p>
          <ul>
            <li>개인형 진공관 앰프</li>
            <li>클립쉬 RP-500M 스피커</li>
            <li>마란츠 CD 6006 플레이어</li>
            <li>※ 스피커는 타사 제품도 추천 가능합니다.</li>
          </ul>
        </div>
        <div className="package-item">
          <img src="path_to_image_C" alt="Package Type C" />
          <h3>Package Type C</h3>
          <p>– bluetooth only</p>
          <ul>
            <li>개인형 진공관 앰프</li>
            <li>클립쉬 RP-500M 스피커</li>
            <li>※ 스피커는 타사 제품도 추천 가능합니다.</li>
            <li>※ 블루투스 모듈은 앰프에 내장되어 있습니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Packages;

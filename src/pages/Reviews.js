// src/pages/Reviews.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css';

const reviews = [
  { id: 1, title: '비 오는 날이 주는 즐거움', content: '여름 장마가 시작되고...' },
  { id: 2, title: '코로나 블루가 지속되는 가운데...', content: '답답한 실내로...' },
  { id: 3, title: '우리에게도 더 좋은 날이 올 것이다', content: '여긴 칼라스 밸즈...' },
  // 추가 리뷰 데이터
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2>Reviews</h2>
      <div className="reviews-grid">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <Link to={`/review-details/${review.id}`}>
              <img src={`path/to/image/${review.id}.png`} alt={review.title} />
              <h3>{review.title}</h3>
              <p>{review.content}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

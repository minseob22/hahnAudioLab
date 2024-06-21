// src/pages/ReviewDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const ReviewDetails = () => {
  const { reviewId } = useParams();

  // 예시 데이터를 사용하거나 실제 데이터를 불러올 수 있습니다.
  const reviews = [
    { id: 1, title: '비 오는 날이 주는 즐거움', content: '여름 장마가 시작되고...' },
    { id: 2, title: '코로나 블루가 지속되는 가운데...', content: '답답한 실내로...' },
    { id: 3, title: '우리에게도 더 좋은 날이 올 것이다', content: '여긴 칼라스 밸즈...' },
    // 추가 리뷰 데이터
  ];

  const review = reviews.find(r => r.id === parseInt(reviewId));

  return (
    <div>
      <h2>{review.title}</h2>
      <p>{review.content}</p>
    </div>
  );
};

export default ReviewDetails;

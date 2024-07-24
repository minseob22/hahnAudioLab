import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/reviews')
      .then(response => {
        console.log('Fetched reviews from server:', response.data);
        setReviews(response.data);
      })
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handleReviewClick = (reviewId) => {
    navigate(`/review-details/${reviewId}`);
  };

  return (
    <div className="reviews-container">
      <h2>Reviews</h2>
      <div className="reviews-grid">
        {reviews.map(review => {
          const contentPreview = review.contents.find(content => content.type === 'text') ? review.contents.find(content => content.type === 'text').content.substring(0, 100) : 'No content available';
          const imagePreview = review.contents.find(content => content.type === 'image') ? `data:image/jpeg;base64,${review.contents.find(content => content.type === 'image').content}` : 'default.jpg';

          return (
            <div key={review.id} className="review-item" onClick={() => handleReviewClick(review.id)}>
              <img src={imagePreview} alt={review.title} />
              <h3>{review.title}</h3>
              <p>{contentPreview}...</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;

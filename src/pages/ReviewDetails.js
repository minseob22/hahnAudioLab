import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ReviewDetails.css';

const ReviewDetails = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/api/reviews/${id}`)
        .then(response => {
          console.log('Fetched review details from server:', response.data);
          const reviewData = response.data;
          setReview({
            title: reviewData.title,
            contents: reviewData.contents || [] // contents가 undefined일 경우 빈 배열로 설정
          });
        })
        .catch(error => console.error('Error fetching review details:', error));
    }
  }, [id]);

  if (!review) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <div className="review-header">
        <h2 className="review-title">{review.title}</h2>
      </div>
      {review.contents.length > 0 ? (
        review.contents.map((item, index) => (
          item.type === 'text' ? (
            <p key={index} className="review-content">{item.content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
          ) : item.type === 'image' ? (
            <img key={index} className="review-image" src={`data:image/jpeg;base64,${item.content}`} alt="Review content" />
          ) : item.type === 'link' ? (
            <p key={index} className="review-content">
              기사보기 : <a className="btn btn-primary" href={item.content} target="_blank" rel="noopener noreferrer">URL 버튼</a>
            </p>
          ) : null
        ))
      ) : (
        <p>No contents available</p>
      )}
    </div>
  );
};

export default ReviewDetails;

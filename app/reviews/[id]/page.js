import React from 'react';
import fs from 'fs';
import path from 'path';
import styles from './ReviewDetails.module.css';

export default function ReviewDetails({ params }) {
  const { id } = params;

  const filePath = path.join(process.cwd(), 'app/reviews/reviewsData', `review_${id}.json`);
  if (!fs.existsSync(filePath)) {
    return <div>Review not found</div>;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const review = JSON.parse(fileContents);

  const reviewTitle = review.title;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.reviewHeader}>
        <h2 className={styles.reviewTitle}>{reviewTitle}</h2>
      </div>
      {review.contents.map((item, index) => (
        <div key={index} className={styles.contentBlock}>
          {item.type === 'text' && (
            <p className={styles.reviewContent}>
              {item.content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          )}
          {item.type === 'image' && (
            <img 
              className={styles.reviewImage} 
              src={item.content} 
              alt={`Content Image ${index}`} 
            />
          )}
        </div>
      ))}
    </div>
  );
}

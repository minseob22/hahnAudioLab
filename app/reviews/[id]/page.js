import React from 'react'; // React를 명시적으로 임포트
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import styles from './ReviewDetails.module.css';

export default async function ReviewDetails({ params }) {
  const { id } = params;

  // 데이터베이스에서 리뷰 데이터와 그에 따른 모든 콘텐츠를 불러오기
  const db = await open({
    filename: './db/reviews.db',
    driver: sqlite3.Database,
  });

  // 리뷰와 관련된 모든 콘텐츠를 가져옴
  const reviewContents = await db.all(`
    SELECT r.title, c.content, c.type 
    FROM reviews r
    LEFT JOIN contents c ON r.id = c.review_id
    WHERE r.id = ?
    ORDER BY c.content_order
  `, [id]);

  // 리뷰가 없을 경우 처리
  if (reviewContents.length === 0) {
    return <div>Review not found</div>;
  }

  // 리뷰 제목을 가져옴
  const reviewTitle = reviewContents[0].title;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.reviewHeader}>
        <h2 className={styles.reviewTitle}>{reviewTitle}</h2>
      </div>
      {reviewContents.map((item, index) => (
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
              src={`data:image/jpeg;base64,${item.content}`} 
              alt={`Content Image ${index}`} 
            />
          )}
          {item.type === 'link' && (
            <p className={styles.reviewContent}>
              기사보기 : <a href={item.content} target="_blank" rel="noopener noreferrer">URL 버튼</a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

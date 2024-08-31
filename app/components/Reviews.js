import Link from 'next/link';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import styles from './Reviews.module.css';

function getBase64Image(binaryData) {
  return `data:image/jpeg;base64,${binaryData.toString('base64')}`;
}

export default async function Reviews() {
  // SQLite 데이터베이스 연결
  const db = await open({
    filename: './db/reviews.db', 
    driver: sqlite3.Database
  });

  const reviews = await db.all(`
    SELECT r.id as review_id, r.title, c.content, c.type 
    FROM reviews r
    LEFT JOIN contents c ON r.id = c.review_id
    ORDER BY r.id DESC, c.content_order
  `);

  // 리뷰 데이터를 재구성합니다.
  const reviewMap = new Map();

  reviews.forEach((row) => {
    const { review_id, title, content, type } = row;

    if (!reviewMap.has(review_id)) {
      reviewMap.set(review_id, {
        review_id, // review_id를 리뷰 데이터에 포함시킵니다.
        title,
        images: [],
        text: '',
      });
    }

    const reviewData = reviewMap.get(review_id);

    if (type === 'image') {
      reviewData.images.push(getBase64Image(content));
    } else if (type === 'text') {
      reviewData.text += content + ' '; 
    }
  });

  const reviewList = Array.from(reviewMap.values());

  return (
    <section id="reviews">
    <div className={styles.reviewsContainer}>
      <h2 className={styles.reviewsTitle}>Reviews</h2>     
      <div className={styles.reviewsGrid}>
        {reviewList.map((review) => (
          <Link 
          href={`/reviews/${review.review_id}`} 
          key={review.review_id} 
          passHref
          style={{ textDecoration: 'none' }}
        >
            <div className={styles.reviewItem}>
              {review.images.length > 0 && (
                <img 
                  src={review.images[0]} 
                  alt={review.title}
                  className={styles.image}
                />
              )}
              <div className={styles.textContent}>
              <h3 className={styles.noDecoration}>{review.title}</h3>
              <p className={styles.noDecoration}>{review.text.substring(0, 100)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </section>
  );
}

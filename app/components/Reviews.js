import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import styles from './Reviews.module.css';

// 서버에서 데이터를 동적으로 읽어오는 함수
export async function fetchReviewsData() {
  const filePath = path.join(process.cwd(), 'app/reviews/reviewTotal/reviewTotal.json');
  const jsonData = await fs.promises.readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  // 리뷰 데이터를 내림차순으로 정렬 (예: id 기준)
  data.reviews.sort((a, b) => b.id - a.id);

  return data;
}

export default async function ReviewsPage() {
  // JSON 데이터 가져오기
  const reviewsData = await fetchReviewsData();
  const reviewList = reviewsData.reviews;

  return (
    <section id="reviews">
      <div className={styles.reviewsContainer}>
        <h2 className={styles.reviewsTitle}>Reviews</h2>
        <div className={styles.reviewsGrid}>
          {reviewList.map((review) => (
            <Link href={`/reviews/${review.id}`} key={review.id}>
              <div className={styles.reviewItem}>
                <img src={review.thumbnail} alt={review.title} className={styles.image} />
                <div className={styles.textContent}>
                  <h3>{review.title}</h3>
                  <p>{review.content.substring(0, 100)}...</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

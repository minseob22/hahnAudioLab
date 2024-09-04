import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import styles from './Reviews.module.css';

export default function Reviews() {
  const reviewsDirectory = path.join(process.cwd(), 'app/reviews/reviewsData');
  const filenames = fs.readdirSync(reviewsDirectory);

  const reviewList = filenames.map((filename) => {
    const filePath = path.join(reviewsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const review = JSON.parse(fileContents);
    
    return {
      review_id: review.id,
      title: review.title,
      thumbnail: review.thumbnail,
      text: review.contents ? review.contents
        .filter(c => c.type === 'text')
        .map(c => c.content)
        .join(' ')
        .substring(0, 100) : '', // contents가 없을 경우 빈 문자열을 반환
      images: review.contents ? review.contents
        .filter(c => c.type === 'image')
        .map(c => c.content) : [] // contents가 없을 경우 빈 배열을 반환
    };
  });

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
                    src={review.thumbnail} 
                    alt={review.title}
                    className={styles.image}
                  />
                )}
                <div className={styles.textContent}>
                  <h3 className={styles.noDecoration}>{review.title}</h3>
                  <p className={styles.noDecoration}>{review.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

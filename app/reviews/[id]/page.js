import fs from 'fs';
import path from 'path';
import styles from './ReviewDetails.module.css';

// 리뷰 데이터를 읽어들이는 함수 (서버에서만 실행됨)
async function getReviewData(id) {
  const filePath = path.join(process.cwd(), 'app/reviews/reviewsData', `review_${id}.json`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// 페이지 컴포넌트
export default async function ReviewDetails({ params }) {
  const { id } = params;
  const review = await getReviewData(id);

  if (!review) {
    return <div>Review not found</div>;
  }

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
                <>
                  {line}
                  <br />
                </>
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

// 빌드 시 모든 동적 경로에 대한 매개변수 생성
export async function generateStaticParams() {
  const reviewsDir = path.join(process.cwd(), 'app/reviews/reviewsData');
  const filenames = fs.readdirSync(reviewsDir);

  return filenames.map((filename) => {
    return {
      id: filename.replace('review_', '').replace('.json', ''),
    };
  });
}

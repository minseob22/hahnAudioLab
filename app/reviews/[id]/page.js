import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import styles from './ReviewDetails.module.css';

// 리뷰 데이터를 가져오는 함수
async function getReviewData(id) {
  // 파일 경로를 프로젝트 내 정확한 위치로 지정
  const filePath = path.join(process.cwd(), 'app/reviews/reviewTotal/reviewTotal.json');
  
  // JSON 파일을 읽고 파싱
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const reviewsData = JSON.parse(fileContents);

  // ID에 맞는 리뷰 찾기
  const review = reviewsData.reviews.find((review) => review.id === parseInt(id));
  return { review, reviewsData };
}

// 페이지 컴포넌트
export default async function ReviewDetails({ params }) {
  const { id } = params;
  const { review, reviewsData } = await getReviewData(id);

  if (!review) {
    return <div>Review not found</div>;
  }

  const currentId = parseInt(id);
  const nextReview = reviewsData.reviews.find((r) => r.id === currentId + 1);
  const prevReview = reviewsData.reviews.find((r) => r.id === currentId - 1);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.reviewHeader}>
        <h2 className={styles.reviewTitle}>{review.title}</h2>
      </div>
      <div className={styles.contentBlock}>
        {/* HTML 컨텐츠를 안전하게 렌더링 */}
        <div
          className={styles.reviewContent}
          dangerouslySetInnerHTML={{ __html: review.content }}
        />

        {/* 이미지 렌더링 */}
        {review.img && (
          <div
            className={styles.reviewImages}
            dangerouslySetInnerHTML={{ __html: review.img }}
          />
        )}
      </div>

      {/* 다음 글, 이전 글, 목록으로 돌아가기 버튼 */}
        <div className={styles.navigation}>
          {prevReview && (
            <Link href={`/reviews/${prevReview.id}/`}>
              <button className={styles.btnNav}>
                ▲ {prevReview.title}
              </button>
            </Link>
          )}
          {nextReview && (
            <Link href={`/reviews/${nextReview.id}/`}>
              <button className={styles.btnNav}>
                ▼ {nextReview.title}
              </button>
            </Link>
          )}
        </div>
      <div className={styles.navigation}>
        <Link href={`https://minseob22.github.io/hahnAudioLab//#reviews`}>
          <button className={styles.btnList}>
            목록
          </button>
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'app/reviews/reviewTotal/reviewTotal.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const reviewsData = JSON.parse(fileContents);

  const reviewIds = reviewsData.reviews.map((review) => ({
    id: review.id.toString(),
  }));

  return reviewIds;
}

import Image from 'next/image';
import styles from './Concept.module.css';

const conceptItems = [
  {
    imgSrc: '/img/3939db3e34a13.png',
    text: '하드와이어링이라는 정통제작기법으로 만든 hand-made 제품',
  },
  {
    imgSrc: '/img/62582a53409ff.jpg',
    text: '미니멀한 인터페이스',
  },
  {
    imgSrc: '/img/e76199bb72935.png',
    text: '휴대폰 속 모든 음악을 연결하는 블루투스 인터페이스',
  },
  {
    imgSrc: '/img/32c304232bfb3.jpg',
    text: '고객이 원하는 장르와 취향을 반영한 맞춤형 제작',
  },
];

export default function Concept() {
  return (
    <div section id="concept">
    <div className={styles.conceptContainer}>
      <div className={styles.conceptTitle}>
        <h2>Concept</h2>
      </div>
      <div className={styles.conceptGrid}>
        {conceptItems.map((item, index) => (
          <div key={index} className={styles.conceptItem}>
            <div className={styles.conceptImage}>
              {/* Next.js의 Image 컴포넌트를 사용하여 이미지 최적화 */}
              <Image
                src={item.imgSrc}
                alt={`Concept ${index + 1}`}
                width={150}
                height={150}
                className={styles.image}
              />
            </div>
            <div className={styles.conceptText}>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

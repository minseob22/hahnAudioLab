import Image from 'next/image';
import styles from './Banner.module.css';

export default async function Banner() {
  const data = {
    title: "Hahn Audio Lab",
    imageSrc:"/img/optimized/62582a53409ff.webp"

  };

  return (
    <section id ="banner">
    <div className={styles.visualSection}>
      <div className={styles.banner}>
        <Image 
          src={data.imageSrc} 
          alt={data.title}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.bannerTxt}>
          <h1>{data.title}</h1>
        </div>
      </div>
    </div>
    </section>
  );
}

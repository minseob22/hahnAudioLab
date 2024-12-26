// app/components/Packages.js (서버 컴포넌트)

import Image from 'next/image';
import styles from './Packages.module.css';

const packages = [
  {
    imgSrc: '/img/optimized/package_a.png',
    title: 'Package Type A',
    description: '– living room with Focal Speaker',
    details: [
      '○ 거실형 진공관 앰프',
      '○ 포칼 Aria 936 스피커',
      '○ 마란츠 CD 6006 플레이어',
      '※ 스피커는 타사 제품도 추천 가능합니다.',
    ],
  },
  {
    imgSrc: '/img/optimized/package_b.webp',
    title: 'Package Type B',
    description: '– personal',
    details: [
      '○ 개인형 진공관 앰프',
      '○ 클립쉬 RP-500M 스피커',
      '○ 마란츠 CD 6006 플레이어',
      '※ 스피커는 타사 제품도 추천 가능합니다.',
    ],
  },
  {
    imgSrc: '/img/optimized/package_c.png',
    title: 'Package Type C',
    description: '– bluetooth only',
    details: [
      '○ 개인형 진공관 앰프',
      '○ 클립쉬 RP-500M 스피커',
      '※ 스피커는 타사 제품도 추천 가능합니다.',
      '※ 블루투스 모듈은 앰프에 내장되어 있습니다.',
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages">
    <div className={styles.packageContainer}>
      <h2 className={styles.packagesTitle}>Packages</h2>
      <div className={styles.packageList}>
        {packages.map((pkg, index) => (
          <div key={index} className={styles.packageItem}>
            <Image
              src={pkg.imgSrc}
              alt={pkg.title}
              width={500}
              height={300}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
            <h3>{pkg.title}</h3>
            <p>{pkg.description}</p>
            <ul>
              {pkg.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

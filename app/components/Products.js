import Image from 'next/image';  // Image 컴포넌트를 임포트합니다.
import ProductSlider from './ProductSlider';
import styles from './Product.module.css';

const products = [
  {
    images: [
      '/img/KT88.png',
      '/img/KT120.png',
      '/img/KT150.png',
      '/img/EL156.png',
    ],
    title: '거실형 진공관앰프',
    description: `
      넓은 공간을 부족함이 없이 울려주는 힘과 에너지가 실린 소리로 다양한 장르의 음악을 감동적으로 울려주며,
      KT88, KT120, EL156 또는 KT150진공관을 선택하여 주문할 수 있으며 채널당 두 개씩 사용하여 제작합니다.

      진공관과 목재베이스의 조합으로 시각적으로도 한층 따스한 질감을 내어주며 인테리어로서의 가치도 있어
      댁의 공간을 더욱 품격 있게 만들어 드리며,

      30평형대 이상의 아파트 거실 크기의 공간에 최적으로 울려줍니다.
      다양한 진공관앰프 라인업으로 선택의 폭을 넓혀 드립니다.
    `,
  },
  {
    images: ['/img/personal_amp.jpg'],
    title: '개인형 진공관앰프',
    description: `
      아날로그에의 진한 향수를 불러일으키는 고전적인 형태의 진공관으로 특히 보컬이나
      소편성 오케스트라의 음을 맑고 투명하게 잘 울려줍니다.

      순수하고 소박한 소리를 내어 주는 2A3이나 6B4G 진공관을 채널당 하나씩 사용한 가장 심플한 구성으로
      하루 종일 들어도 결코 귀에 거슬리지 않는 소리를 내어줍니다.

      개인 서재나 사무실 데스크 한 켠에 설치 가능한 콤팩트 한 사이즈로 공간 전체를 꽉 차게 하는
      훌륭한 음으로 보답합니다.
    `,
  },
];

export default function Products() {
  return (
    <div section id="products">
    <div className={styles.productContainer}>
      <div className={styles.productTitle}>
      <h2 className={styles.productTitle}>Product</h2>
      </div>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <div key={index} className={styles.productItem}>
            {index === 0 ? (
              <ProductSlider images={product.images} />
            ) : (
              <div className={styles.imagebox}>
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={500}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
            )}
            <div className={styles.productText}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

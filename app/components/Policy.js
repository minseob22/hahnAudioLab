import styles from './Policy.module.css';

export default function Policy() {
  return (
    <section id="policy">
    <div className={styles.policyContainer}>
      <h2 className={styles.policyTitle}>Policy</h2>
      <div className={styles.policyContent}>
        <ul>
          <li>스피커와 CD플레이어는 인수 시점에 danawa.com 사이트에서 제공하는 최저시장가격으로 구입, 제공합니다.</li>
          <li>패키지에서 제시한 스피커 이외의 다른 스피커 선택도 가능합니다.</li>
          <li>방문 설치 및 세팅 비용은 무료입니다.</li>
          <li>
            진공관 앰프에 한하여 Life Time Warranty를 제공하고 기타 기기는 제조사에서 제공하는 Warranty 기간을
            적용합니다. 단, 진공관은 소모품이므로 교체 시 실비를 지불하여야 합니다.
          </li>
          <li>최상의 기기 동작을 위하여 걱정주기로 방문, AS를 제공합니다.</li>
        </ul>
      </div>
    </div>
    </section>
  );
}

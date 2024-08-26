import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div section id="contacts">
    <div className={styles.contactsContainer}>
      <h2 className={styles.contactsTitle}>Contacts</h2>
      <div className={styles.contactsContent}>
        <div className={styles.contactItem}>
          <img src="/phone-icon.png" alt="phone" />
          <a href="tel:0502-002-1000">0502-002-1000</a>
        </div>
        <div className={styles.contactItem}>
          <img src="/email-icon.png" alt="email" />
          <a href="mailto:ws908250@naver.com">ws908250@naver.com</a>
        </div>
        <div className={styles.contactItem}>
          <img src="/address-icon.png" alt="address" />
          <p>서울 서초구 양재동354-9 남석빌딩 301호 한오디오샵<br/><a href="https://map.naver.com/?query=서울 서초구 양재동354-9 남석빌딩 301호">지도보기</a></p>
        </div>
      </div>
    </div>
    </div>
  );
}

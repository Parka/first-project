import styles from './styles.module.css';

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.sitemap}>
          <ul className={styles.column}>
            <li className={styles.options}>Home</li>
          </ul>
          <ul className={styles.column}>
            <li className={styles.options}>Home</li>
          </ul>
          <ul className={styles.column}>
            <li className={styles.options}>Home</li>
          </ul>
          
        </div>
        <div className={styles.copy}>© 2021 Moneta News & Media Hungary Zrt. All rights reserved.</div>
      </div>

    </div>
  )
};

export default Footer;
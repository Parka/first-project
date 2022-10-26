import styles from './styles.module.css';
import Button from '../Button';

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <div className={styles.logo}></div>
        <div className={styles.sitemap}>
          <ul className={styles.column}>
            <li className={styles.options}>Home</li>
            <li className={styles.options}>EU Finance</li>
            <li className={styles.options}>Capital Market</li>
            <li className={styles.options}>World Economy</li>
            <li className={styles.options}>Opinion</li>
            <li className={styles.options}>Finance</li>
          </ul>
          <ul className={styles.column}>
            <li className={styles.options}>Business</li>
            <li className={styles.options}>Agriculture</li>
            <li className={styles.options}>Sport Economy</li>
            <li className={styles.options}>Blog</li>
            <li className={styles.options}>Podcats</li>
            <li className={styles.options}>Video</li>
          </ul>
          <ul className={styles.legalescolumn}>
            <li className={styles.legales}>Terms of Use</li>
            <li className={styles.legales}>Privacy</li>
            <li className={styles.legales}>Cookies Policy</li>
            <li className={styles.legales}>Manage Cookies</li>
            <li className={styles.legales}>Accessibility</li>
            <li className={styles.legales}>Contact Us</li>
          </ul>
          
        </div>
        <div className={styles.social}>
          <div className={styles.ig}></div>
          <div className={styles.facebook}></div>
          <div className={styles.youtube}></div>
        </div>
        <div className={styles.substext}>
          <div className={styles.subcribe}>
            <h1 className={styles.titlesubs}>Subscribe and be informed first hand about the actual economic news.</h1>
            <p className={styles.stext}>All the day's headlines and highlights, direct to you every morning.</p>
          </div>

          <Button text="Subscribe"/>
        </div>
      </div>
        
        
       

        <div className={styles.copy}>© 2021 Moneta News & Media Hungary Zrt. All rights reserved.</div>
        
      

    </div>
  )
};

export default Footer;
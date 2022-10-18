import styles from './styles.module.css';

const FooterImg = (props) => {
  return (
    <span className={styles.main}>{props.children}</span>
  )
};

export default FooterImg;
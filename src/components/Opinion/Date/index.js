import styles from './styles.module.css';

const Date = (props) => {
  return (
    <span className={styles.main}>{props.children}</span>
  )
};

export default Date;
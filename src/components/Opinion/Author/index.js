import styles from './styles.module.css';

const Author = (props) => {
  return (
    <h1 className={styles.main}>{props.children}</h1>
  )
};

export default Author;
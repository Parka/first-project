import styles from './styles.module.css';

const Text = (props) => {
  return (
    <p className={styles.main}>{props.children}</p>
  )
};

export default Text;
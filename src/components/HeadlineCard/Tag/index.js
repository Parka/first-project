import styles from './styles.module.css';

const Tag = (props) => {
    return (
      <span className={styles.main}>{props.children}</span>
    )
  };
  
  export default Tag;
import styles from './styles.module.css';

const Button = (props) => {
  return (
    <button className={styles.main}>{props.text}</button>
  )
};

export default Button;
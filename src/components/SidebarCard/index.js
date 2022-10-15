import styles from "./styles.module.css";
const SidebarCard = () => {
  return (
    <div className={styles.main} >
      <div className={styles.image}></div>
      <div className={styles.body}>
        <div className={styles.header}> Why is Uber selling its autonomous-vehicle division? </div>
        <div className={styles.text}> Self-driving cars were meant to be its future </div>
      </div>

    </div>
  )

};

export default SidebarCard;

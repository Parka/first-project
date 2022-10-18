import styles from "./styles.module.css";
const SidebarCard = (props) => {
  return (
    
    <div className={styles.main} > 
    <div className={styles.tag}> {props.tag}</div>
      <div className={styles.image}></div>
      <div className={styles.body}>
        <div className={styles.header}> {props.header} </div>
        <div className={styles.text}> {props.text} </div>
        <div className={styles.date}>{props.date} </div>
        
      </div>

    </div>
  )

};

export default SidebarCard;

import styles from "./styles.module.css";

const VideoCardSmall = () => {
  return (
    <div className={styles.main}>
      <div className={styles.image}></div>
      <div className={styles.body}>
        <div className={styles.header}>Hancock: vaccines 80% effective at preventing hospitalisations in over-80s</div>
        <div className={styles.text}></div>
      </div>
    </div>
  );
};

export default VideoCardSmall;

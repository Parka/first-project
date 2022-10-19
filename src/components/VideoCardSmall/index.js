import styles from "./styles.module.css";

const VideoCardSmall = () => {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <div className={styles.play}/>
      </div>
      <div className={styles.header}>Hancock: vaccines 80% effective at preventing hospitalisations in over-80s</div>
      <div className={styles.date}>23 Feb 2021</div>
    </div>
  );
};

export default VideoCardSmall;

import styles from './styles.module.css';
import Header from "./Header";
import Text from './Text'
import Tag from './Tag';

const HeadlineCard = () => {
  return (
    <div className={styles.main}>
      <span className={styles.headline}>Headlines</span>
      <div className={styles.primarynews}>
        <div className={styles.content}>
          <Tag></Tag>
          <Header></Header>
          <Text></Text>
        </div>
        <div className={styles.newsimages}>
          <div></div>
        </div>
      </div>
    </div>
  )
};

export default HeadlineCard;
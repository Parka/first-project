import styles from './styles.module.css';
import Header from "./Header";
import Text from './Text'
import Tag from './Tag';
import FooterImg from './FooterImg';

const HeadlineCard = (props) => {
  return (
    <div className={styles.main}>
      <span className={styles.headline}>{props.headline}</span>
      <div className={styles.primarynews}>
        <div className={styles.content}>
          <Tag>{props.tag}</Tag>
          <Header>{props.header}</Header>
          <Text>{props.text}</Text>
          <FooterImg>{props.time}</FooterImg>
        </div>
        <div className={styles.newsimages}>
          <div className={styles.image}></div>
          <FooterImg>{props.imgfooter}</FooterImg>
        </div>
      </div>
    </div>
  )
};

export default HeadlineCard;
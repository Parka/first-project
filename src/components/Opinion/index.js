import styles from "./styles.module.css";
import Tag from '../HeadlineCard/Tag';
import Author from "./Author";
import OpinionTitle from './OpinionTitle';
import Date from "./Date";

const Opinion = (props) => {
  return (
    <div className={styles.main}>
      <Tag>{props.tag}</Tag>
      <div className={styles.opinioncontent}>
        <div className={styles.content}>
          <Author>{props.author}</Author>
          <OpinionTitle>{props.opiniontitle}</OpinionTitle>
          <Date>{props.date}</Date>
        </div>
        <div className={styles.avatar}>
        </div>
      </div>
    </div>
  );
};

export default Opinion;

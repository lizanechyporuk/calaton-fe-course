import styles from "./BlogCard.module.scss";
import Button from "../../../../ui/Button";

interface BlogCardProps {
  src: string;
  tagText: string;
  timeText: string;
  header: string;
  text: string;
}

function BlogCard({
  src,
  tagText,
  timeText,
  header,
  text,
}: BlogCardProps): JSX.Element {
  return (
    <div className={styles.blogCard}>
      <img src={src} width="403" height="300" alt="Blog Photo"></img>

      <div className={styles.blogCardContent}>
        <p className={styles.paragraphTags}>
          <span className={styles.spanFirst}>{tagText}</span>
          <span className={styles.spanSecond}>{timeText}</span>
        </p>

        <h3 className={styles.header}>{header}</h3>

        <p className={styles.paragraphText}>{text}</p>

        <Button classBtn="arrowBtnBig" text="Read more" />
      </div>
    </div>
  );
}

export default BlogCard;

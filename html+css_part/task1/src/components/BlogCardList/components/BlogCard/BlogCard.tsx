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
      <img src={src}></img>
      <div className={styles.blogCardContent}>
        <p>
          <span>{tagText}</span>
          <span>{timeText}</span>
        </p>
        <h3>{header}</h3>
        <p>{text}</p>
        <Button text="Read more" />
      </div>
    </div>
  );
}
export default BlogCard;

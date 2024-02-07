import styles from "./Comment.module.scss";

interface CommentProps {
  src: string;
  text: string;
  name: string;
  position: string;
}

function Comment({ src, text, name, position }: CommentProps): JSX.Element {
  return (
    <div className={styles.comment}>
      <div className={styles.commentWrapper}>
        <div className={styles.stars}>
          {Array.from({ length: 5 }, (_, index) => (
            <img
              key={index}
              src="/icons/CommentsSection/star.svg"
              width="20"
              height="20"
              alt="Star"
            />
          ))}
        </div>

        <p className={styles.paragraphText}>{text}</p>

        <div className={styles.commentContent}>
          <img src={src} width="48" height="54" alt="Portait"></img>

          <div className={styles.infoContainer}>
            <p className={styles.commentName}>{name}</p>
            <p className={styles.commentPosition}>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;

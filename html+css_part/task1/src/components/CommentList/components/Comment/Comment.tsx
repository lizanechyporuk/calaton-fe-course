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
              width="20px"
              height="20px"
              alt="Star"
            />
          ))}
        </div>
        <p>{text}</p>
        <div className={styles.commentContent}>
          <img src={src} width="48px" height="54px" alt="Portait"></img>
          <div>
            <p className={styles.commentName}>{name}</p>
            <p className={styles.commentPosition}>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comment;

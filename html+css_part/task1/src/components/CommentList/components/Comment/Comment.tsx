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
      <div>
        <img src="/icons/CommentsSection/star.svg" alt="Star"></img>
        <img src="/icons/CommentsSection/star.svg" alt="Star"></img>
        <img src="/icons/CommentsSection/star.svg" alt="Star"></img>
        <img src="/icons/CommentsSection/star.svg" alt="Star"></img>
        <img src="/icons/CommentsSection/star.svg" alt="Star"></img>
      </div>
      <p>{text}</p>
      <div>
        <img src={src} alt="Portait"></img>
        <div>
          <p>{name}</p>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
}
export default Comment;

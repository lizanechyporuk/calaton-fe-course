import styles from "./CommentsSection.module.scss";
import Comments from "../../../components/CommentList/index";

function CommentsSection() {
  return (
    <section className={styles.commentsSection}>
      <h2>A words from our customers</h2>
      <p>Eu turpis vel, maximus condimentum turpis faucibus dictum accumsan.</p>
      <Comments />
      <img
        className={styles.absoluteImg}
        src="/images/CommentsSection/image1.png"
        alt="Image"
      ></img>
      <img
        className={styles.absoluteImg}
        src="/images/CommentsSection/image2.png"
        alt="Image"
      ></img>
    </section>
  );
}
export default CommentsSection;

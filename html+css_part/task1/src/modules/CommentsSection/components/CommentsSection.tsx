import styles from "./CommentsSection.module.scss";
import Container from "../../../components/Container/index";
import Comments from "../../../components/CommentList/index";

function CommentsSection() {
  const imageNumbers = [1, 2];

  return (
    <section className={styles.commentsSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <h2 className={styles.header}>A words from our customers</h2>

          <p className={styles.paragraphText}>
            Eu turpis vel, maximus condimentum turpis faucibus dictum accumsan.
          </p>

          <Comments />

          {imageNumbers.map((number) => (
            <img
              className={styles[`absoluteImg${number}`]}
              key={number}
              src={`/images/CommentsSection/image${number}.png`}
              alt={`Decor Image ${number}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CommentsSection;

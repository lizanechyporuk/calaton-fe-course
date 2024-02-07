import styles from "./BlogsSection.module.scss";
import Container from "../../../components/Container/index";
import ArticleTag from "../../../components/ArticleTag";
import Button from "../../../ui/Button";
import BlogCards from "../../../components/BlogCardList";

function BlogSection(): JSX.Element {
  return (
    <section className={styles.blogsSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <ArticleTag text="Blog" />

          <h2 className={styles.header}>Our latest blogs</h2>

          <p className={styles.paragraphText}>
            Accumsan semper euismod dolor vitae metus.
          </p>

          <BlogCards />

          <Button
            classBtn="outlinedBtnBiggerBoldBlogsSection"
            text="View all"
          />
        </div>
      </Container>
    </section>
  );
}

export default BlogSection;

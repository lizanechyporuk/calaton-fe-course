import styles from "./ArticlePercentage.module.scss";

interface ArticlePercentageProps {
  classCustom?: string;
  src: string;
  percent: string;
  text: string;
}

function ArticlePercentage({
  classCustom,
  percent,
  text,
  src,
}: ArticlePercentageProps): JSX.Element {
  return (
    <div
      className={`${styles.articlePercentage} ${
        classCustom ? classCustom : ""
      }`}
    >
      <div className={styles.textWrapper}>
        <h2 className={styles.header}>{percent}</h2>
        <p className={styles.paragraph}>{text}</p>
      </div>

      <div className={styles.imageWrapper}>
        <img src={src} height="72" width="72" alt="Icon"></img>
      </div>
    </div>
  );
}

export default ArticlePercentage;

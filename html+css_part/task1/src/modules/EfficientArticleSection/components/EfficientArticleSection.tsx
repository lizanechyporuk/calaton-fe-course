import styles from "./EfficientArticleSection.module.scss";
import Container from "../../../components/Container/index";
import ArticlePercentage from "../../../components/ArticlePercentage";
import ArticleTag from "../../../components/ArticleTag";
import Button from "../../../ui/Button";

function EfficientArticleSection(): JSX.Element {
  const efficientCardsArr = [
    {
      header: "No meetings",
      text: "Porta non eros. Ut finibus viverra neque, sed vestibulum tellus volutpat ac cras at massa.",
    },
    {
      header: "24/7 customer support",
      text: "Praesent consequat erat in orci lobortis, in accumsan orci vestibulum nam et dictum.",
    },
  ];
  return (
    <section className={styles.efficientArticleSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <ArticleTag text="Efficient" />

            <h2 className={styles.header}>Straight to the point</h2>

            <p className={styles.paragraphText}>
              Vivamus ante dolor, condimentum eget dignissim vitae, malesuada
              sed urna. Aenean consequat risus tortor, quis porta.
            </p>

            <div className={styles.efficientCards}>
              {efficientCardsArr.map((card, index) => (
                <div className={styles.efficientCard} key={index}>
                  <img
                    src={`/icons/EfficientArticleSection/icon${index + 1}.png`}
                    height="56"
                    width="56"
                    alt="Efficient Icon"
                  ></img>
                  <h3 className={styles.cardHeader}>{card.header}</h3>
                  <p className={styles.cardText}>{card.text}</p>
                </div>
              ))}
            </div>

            <p className={styles.paragraphButtons}>
              <Button classBtn="outlinedBtnBigger" text="Get started" />
              <Button classBtn="arrowBtnSmallDark" text="Try for free" />
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <img
              src="/images/EfficientArticleSection/image.png"
              width="600"
              height="600"
              alt="Efficient image"
            ></img>
          </div>
        </div>

        <ArticlePercentage
          classCustom={styles.articlePercentage}
          percent="74%"
          text="Increased in productivity"
          src="/icons/EfficientArticleSection/iconPercent2.png"
        />
      </Container>
    </section>
  );
}

export default EfficientArticleSection;

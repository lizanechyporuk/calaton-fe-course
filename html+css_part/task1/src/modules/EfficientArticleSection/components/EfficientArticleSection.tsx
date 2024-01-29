import styles from "./EfficientArticleSection.module.scss";
import Container from "../../../components/Container/index";
import ArticlePercentage from "../../../components/ArticlePercentage";
import ArticleTag from "../../../components/ArticleTag";
import Button from "../../../ui/Button";
function EfficientArticleSection(): JSX.Element {
  return (
    <section className={styles.efficientArticleSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <ArticleTag text="Efficient" />
            <h2>Straight to the point</h2>
            <p>
              Vivamus ante dolor, condimentum eget dignissim vitae, malesuada
              sed urna. Aenean consequat risus tortor, quis porta.
            </p>
            <div className={styles.efficientCards}>
              <div>
                <img
                  src="/icons/EfficientArticleSection/icon1.png"
                  height="56px"
                  width="56px"
                ></img>
                <h3>No meetings</h3>
                <p>
                  Porta non eros. Ut finibus viverra neque, sed vestibulum
                  tellus volutpat ac cras at massa.
                </p>
              </div>
              <div>
                <img
                  src="/icons/EfficientArticleSection/icon2.png"
                  height="56px"
                  width="56px"
                ></img>
                <h3>24/7 customer support</h3>
                <p>
                  Praesent consequat erat in orci lobortis, in accumsan orci
                  vestibulum nam et dictum.
                </p>
              </div>
            </div>
            <p className={styles.paragraphButtons}>
              <Button classBtn="outlinedBtnBigger" text="Get started" />
              <Button classBtn="arrowBtnSmallDark" text="Try for free" />
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/EfficientArticleSection/image.png"
              width="600px"
              height="600"
              alt="Speed image"
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

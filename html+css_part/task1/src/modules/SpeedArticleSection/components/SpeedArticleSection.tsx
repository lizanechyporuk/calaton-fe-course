import styles from "./SpeedArticleSection.module.scss";
import Container from "../../../components/Container/index";
import ArticlePercentage from "../../../components/ArticlePercentage/index";
import ArticleTag from "../../../components/ArticleTag";
import Button from "../../../ui/Button";
function SpeedArticleSection(): JSX.Element {
  return (
    <section className={styles.speedArticleSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/SpeedArticleSection/image.png"
              height="600px"
              width="600px"
              alt="Speed image"
            ></img>
          </div>
          <div className={styles.textWrapper}>
            <ArticleTag text="Speed" />
            <h2>Faster than ever before</h2>
            <p className={styles.paragraphText}>
              Morbi tristique cursus diam, at viverra felis malesuada eu. Duis
              iaculis velit ac urna fermentum interdum. Ut auctor vitae nisi
              eget varius. Phasellus rutrum pellentesque lectus pulvinar dapibus
              aenean dui justro, tempus sed oido.
            </p>
            <p className={styles.paragraphButtons}>
              <Button classBtn="outlinedBtnBigger" text="Get started" />
              <Button classBtn="arrowBtnSmallDark" text="Try for free" />
            </p>
          </div>
        </div>
      </Container>
      <ArticlePercentage
        classCustom={styles.articlePercentage}
        percent="86%"
        text="Increased in sales"
        src="/icons/SpeedArticleSection/iconPercent1.png"
      />
      <img
        className={styles.imgWave}
        src="/icons/shared/waves.svg"
        height="92px"
        width="122px"
        alt="Wave"
      ></img>
    </section>
  );
}
export default SpeedArticleSection;

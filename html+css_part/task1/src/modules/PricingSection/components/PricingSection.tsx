import styles from "./PricingSection.module.scss";
import Container from "../../../components/Container/index";
import ArticleTag from "../../../components/ArticleTag";
import PricingCards from "../../../components/PricingCardList";

function PricingSection(): JSX.Element {
  return (
    <section className={styles.pricingSection}>
      <Container>
        <div className={styles.contentWrapper}>
          <ArticleTag text="Pricing" />

          <h2 className={styles.header}>Pricing plans</h2>

          <p className={styles.paragraphText}>
            Suspendisse mattis porttitor gravida et malesuada fames.
          </p>

          <PricingCards />
        </div>

        <img
          className={styles.imgWaves}
          width="122"
          height="92"
          src="/icons/shared/waves.svg"
          alt="Wave Decor Image"
        ></img>
      </Container>
    </section>
  );
}

export default PricingSection;

import styles from "./HeroSection.module.scss";
import Container from "components/Container";
import HotTrips from "components/HotTripsList";

function HeroSection(): JSX.Element {
  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Explore the World with our{" "}
            <span className={styles.titleHighlight}>Hot Trips</span>
          </h2>

          <HotTrips />

          <p className={styles.text}>
            Embark on{" "}
            <span className={styles.textHighlight}>unforgettable</span> journeys
            with our travel agency, where each adventure is crafted with{" "}
            <span className={styles.heroSectionTextHighlight}>precision</span>{" "}
            and <span className={styles.heroSectionTextHighlight}>passion</span>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;

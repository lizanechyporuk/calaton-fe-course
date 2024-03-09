import styles from "./HeroSection.module.scss";
import Container from "components/Container";
import HotTrips from "components/HotTripsList";

function HeroSection(): JSX.Element {
  return (
    <section className={styles.hero_section}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Explore the World with our{" "}
            <span className={styles.title_highlight}>Hot Trips</span>
          </h2>

          <HotTrips />

          <p className={styles.text}>
            Embark on{" "}
            <span className={styles.text_highlight}>unforgettable</span>{" "}
            journeys with our travel agency, where each adventure is crafted
            with <span className={styles.text_highlight}>precision</span> and{" "}
            <span className={styles.text_highlight}>passion</span>.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;

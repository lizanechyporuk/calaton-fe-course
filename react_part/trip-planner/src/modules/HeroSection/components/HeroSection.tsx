import styles from "./HeroSection.module.scss";
import Container from "components/Container";
import HotTrips from "components/HotTripsList";

function HeroSection(): JSX.Element {
  return (
    <section className={styles.hero__section}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Explore the World with our{" "}
            <span className={styles.title__highlight}>Hot Trips</span>
          </h2>

          <HotTrips />

          <p className={styles.text}>
            Embark on{" "}
            <span className={styles.text__highlight}>unforgettable</span>{" "}
            journeys with our travel agency, where each adventure is crafted
            with <span className={styles.text__highlight}>precision</span> and{" "}
            <span className={styles.text__highlight}>passion</span>.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;

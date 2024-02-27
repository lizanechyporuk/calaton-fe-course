import styles from "./HeroSection.module.scss";
import Container from "../../../components/Container";
import HotTrips from "../../../components/HotTripsList/components/HotTrips/HotTrips";

function HeroSection(): JSX.Element {
  return (
    <div className={styles.heroSection}>
      <Container>
        <div className={styles.heroSectionContent}>
          <h2 className={styles.heroSectionTitle}>
            Explore the World with our{" "}
            <span className={styles.heroSectionTitleHighlight}>Hot Trips</span>
          </h2>

          <HotTrips />

          <p className={styles.heroSectionText}>
            Embark on{" "}
            <span className={styles.heroSectionTextHighlight}>
              unforgettable
            </span>{" "}
            journeys with our travel agency, where each adventure is crafted
            with{" "}
            <span className={styles.heroSectionTextHighlight}>precision</span>{" "}
            and <span className={styles.heroSectionTextHighlight}>passion</span>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;

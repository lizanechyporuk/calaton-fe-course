import styles from "./TripPointsMediaSection.module.scss";
import Container from "components/Container";

interface TripPointsMediaSectionProps {
  tripPoints?: string[][];
}

function TripPointsMediaSection({
  tripPoints,
}: TripPointsMediaSectionProps): JSX.Element {
  return (
    <section className={styles.trip__medias}>
      <Container>
        <div className={styles.content}>
          {tripPoints &&
            tripPoints.map((el, index) =>
              index === 0 || index === 3 ? (
                <div className={styles.media__big} key={index}>
                  <p className={styles.header}>{el[0]}</p>
                  <p className={styles.subheader}>{el[1]}</p>
                  <img
                    src={el[2]}
                    alt={el[0]}
                    height="130"
                    width="130"
                    className={styles.big__img}
                  ></img>
                </div>
              ) : (
                <div
                  className={
                    index === 1
                      ? `${styles.media__small1}`
                      : `${styles.media__small2}`
                  }
                  key={index}
                >
                  <p className={styles.header}>{el[0]}</p>
                  <p className={styles.subheader}>{el[1]}</p>
                  <img
                    src={el[2]}
                    alt={el[0]}
                    height="85"
                    width="85"
                    className={styles.small__img}
                  ></img>
                </div>
              )
            )}
        </div>
      </Container>
    </section>
  );
}

export default TripPointsMediaSection;

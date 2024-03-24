import React, { useState } from "react";
import styles from "./WelcomeSection.module.scss";
import Container from "components/Container";
import LogInCard from "components/LogInCard";
import SignUpCard from "components/SignUpCard";

function WelcomeSection({}): JSX.Element {
  const [slideDirection, setSlideDirection] = useState("slideRight");

  const toggleCard = (direction: string) => {
    setSlideDirection(direction);
  };
  return (
    <section className={styles.welcome__section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={`${styles.item} ${styles[slideDirection]}`}>
              <LogInCard toggleCard={() => toggleCard("slideLeft")} />
            </div>
            <div className={`${styles.item} ${styles[slideDirection]}`}>
              <SignUpCard toggleCard={() => toggleCard("slideRight")} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WelcomeSection;

import React, { useState } from "react";
import styles from "./TripsSection.module.scss";
import Container from "components/Container";
import TripFilter from "components/TripsFilter";
import ContinentList from "components/Continents";

function TripsSection(): JSX.Element {
  const [activeContinent, setActiveContinent] = useState("");

  const handleFilterChange = (continent: string) => {
    setActiveContinent(continent);
  };

  return (
    <section className={styles.trips__section}>
      <Container>
        <TripFilter onFilterChange={handleFilterChange} />
        <ContinentList activeContinent={activeContinent} />
      </Container>
    </section>
  );
}

export default TripsSection;

import React, { useState } from "react";
import styles from "./TripsSection.module.scss";
import Container from "../../../components/Container";
import TripFilter from "../../../components/TripsFilter/index";
import ContinentList from "../../../components/Continents/index";

function TripsSection(): JSX.Element {
  const [activeContinent, setActiveContinent] = useState("All");

  const handleFilterChange = (continent: string) => {
    setActiveContinent(continent);
  };

  return (
    <Container>
      <TripFilter onFilterChange={handleFilterChange} />
      <ContinentList activeContinent={activeContinent} />
    </Container>
  );
}

export default TripsSection;

import React, { useState } from "react";
import styles from "./TripFilter.module.scss";

interface TripFilterProps {
  onFilterChange: (continent: string) => void;
}

function TripFilter({ onFilterChange }: TripFilterProps): JSX.Element {
  const [activeContinent, setActiveContinent] = useState("All");

  const handleFilterChange = (continent: string) => {
    setActiveContinent(continent);
    onFilterChange(continent);
  };

  return (
    <div className={styles.tripFilter}>
      <div className={styles.tripFilterContent}>
        <ul className={styles.tripFilterItems}>
          <li
            className={`${styles.tripFilterItem} ${
              activeContinent === "All" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("All")}
          >
            <a>All</a>
          </li>
          <li
            className={`${styles.tripFilterItem} ${
              activeContinent === "Europe" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("Europe")}
          >
            <a>Europe</a>
          </li>
          <li
            className={`${styles.tripFilterItem} ${
              activeContinent === "Asia" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("Asia")}
          >
            <a>Asia</a>
          </li>
          <li
            className={`${styles.tripFilterItem} ${
              activeContinent === "Africa" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("Africa")}
          >
            <a>Africa</a>
          </li>
          <li
            className={`${styles.tripFilterItem} ${
              activeContinent === "America" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("America")}
          >
            <a>America</a>
          </li>
        </ul>
        <hr className={styles.tripFilterBar}></hr>
      </div>
    </div>
  );
}

export default TripFilter;

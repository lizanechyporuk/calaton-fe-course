import React, { useState } from "react";
import styles from "./TripFilter.module.scss";
import { filterBtnTitles } from "constants/filter-btns";
import Button from "ui/Button";

interface TripFilterProps {
  onFilterChange: (continent: string) => void;
}

function TripFilter({ onFilterChange }: TripFilterProps): JSX.Element {
  const [activeContinent, setActiveContinent] = useState("All");

  const handleFilterChange = (continent: string) => {
    setActiveContinent(continent);
    onFilterChange(continent);
  };

  const onHandleFilter = (e: any) => {
    const { value } = e.target;
    handleFilterChange(value);
  };

  return (
    <div className={styles.tripFilter}>
      <div className={styles.content}>
        <ul className={styles.items}>
          {filterBtnTitles.map((title, index) => {
            return (
              <li
                className={`${styles.item} ${
                  activeContinent === `${title}` ? styles.active : ""
                }`}
              >
                <Button
                  text={title}
                  classBtn={`${
                    activeContinent === `${title}`
                      ? "filterBtnActive"
                      : "filterBtn"
                  }`}
                  value={title}
                  onClick={onHandleFilter}
                />
              </li>
            );
          })}
        </ul>
        <hr className={styles.bar}></hr>
      </div>
    </div>
  );
}

export default TripFilter;

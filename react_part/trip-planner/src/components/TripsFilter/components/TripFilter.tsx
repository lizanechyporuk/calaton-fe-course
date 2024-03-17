import React, { useState } from "react";
import styles from "./TripFilter.module.scss";
import { filterBtnTitles } from "constants/filter-btns";
import Button from "ui/Button";

interface TripFilterProps {
  onFilterChange: (continent: string) => void;
}

function TripFilter({ onFilterChange }: TripFilterProps): JSX.Element {
  const [activeContinent, setActiveContinent] = useState("");

  const handleFilterChange = (continent: string) => {
    setActiveContinent(continent);
    onFilterChange(continent);
  };

  const onHandleFilter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    handleFilterChange((e.target as HTMLButtonElement)?.value);
  };

  return (
    <div className={styles.trip__filter}>
      <div className={styles.content}>
        <ul className={styles.items}>
          {filterBtnTitles.map((el, index) => {
            return (
              <li
                key={index}
                className={`${styles.item} ${
                  activeContinent === `${el.value}` ? styles.active : ""
                }`}
              >
                <Button
                  text={el.title}
                  classBtn={
                    activeContinent === `${el.value}`
                      ? "filterBtnActive"
                      : "filterBtn"
                  }
                  value={el.value}
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

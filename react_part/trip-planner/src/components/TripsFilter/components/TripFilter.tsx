import React, { useState } from "react";
import styles from "./TripFilter.module.scss";
import { filterBtnTitles } from "constants/filter-btns";
import Button from "ui/Button";
import { useWindowWidth } from "utils/window-resize/useWindowWidth";

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

  const windowWidth = useWindowWidth();

  return (
    <div className={styles.trip_filter}>
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
                {/* {windowWidth <= 900 ? (
                  <Button
                    text={el.title}
                    classBtn={`${
                      activeContinent === `${el.value}`
                        ? "filterBtnActive"
                        : "filterBtn"
                    }`}
                    value={el.value}
                    onClick={onHandleFilter}
                  />
                ) : (
                  <Button
                    text={el.title}
                    classBtn={`${
                      activeContinent === `${el.value}`
                        ? "filterBtnActiveSmall"
                        : "filterBtnSmall"
                    }`}
                    value={el.value}
                    onClick={onHandleFilter}
                  />
                )} */}
                <Button
                  text={el.title}
                  classBtn={
                    windowWidth <= 900
                      ? activeContinent === `${el.value}`
                        ? "filterBtnActiveSmall"
                        : "filterBtnSmall"
                      : activeContinent === `${el.value}`
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

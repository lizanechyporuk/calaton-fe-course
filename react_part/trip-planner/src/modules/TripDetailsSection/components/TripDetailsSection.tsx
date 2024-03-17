import React, { useRef, useEffect } from "react";
import styles from "./TripDetailsSection.module.scss";
import Container from "components/Container";
import { createLine } from "utils/trip-details/lineCalc";
import { removeLine } from "utils/trip-details/removeLine";
import { useWindowWidth } from "utils/window-resize/useWindowWidth";

interface TripDetailsSectionProps {
  desc: string;
  descEnding: string;
  tripPoints?: string[][];
}

function TripDetailsSection({
  desc,
  descEnding,
  tripPoints,
}: TripDetailsSectionProps): JSX.Element {
  const pointsRef = useRef<HTMLUListElement>(null);
  const windowWidth = useWindowWidth();
  const createLines = () => {
    if (pointsRef.current) {
      const points = Array.from(
        pointsRef.current.querySelectorAll("li")
      ) as HTMLElement[];
      createLine(points);
    }
  };

  useEffect(() => {
    createLines();
  });

  useEffect(() => {
    removeLine();
    createLines();
  }, [windowWidth]);

  return (
    <Container>
      <section className={styles.trip__details}>
        <p className={styles.heading}>Detail Trip</p>

        <p>{desc}</p>

        <div className={styles.points__wrapper}>
          <ul className={styles.points} ref={pointsRef}>
            {tripPoints &&
              tripPoints.map((el, index) => (
                <li key={index} className={styles.point}>
                  <p className={styles.point__header}>{el[0]}</p>
                  <p>{el[1]}</p>
                </li>
              ))}
          </ul>
        </div>

        <p>{descEnding}</p>
      </section>
    </Container>
  );
}

export default TripDetailsSection;

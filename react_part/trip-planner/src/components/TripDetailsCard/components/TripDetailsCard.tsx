import React from "react";
import styles from "./TripDetailsCard.module.scss";

interface TripDetailsProps {
  cityData: any;
}

function TripDetailsCard({ cityData }: TripDetailsProps): JSX.Element {
  return (
    <div className={styles.trip__card}>
      <p className={styles.heading}>
        {cityData.arrCity}{" "}
        <span className={styles.heading__small}>{cityData.arrCountry}</span>
      </p>

      <div className={styles.details}>
        <div className={styles.date__info}>
          <div>
            <p className={styles.time}>{cityData.depTime}</p>
            <p className={styles.date}>{cityData.depDate}</p>
          </div>

          <div>
            <p className={styles.time}>{cityData.arrTime}</p>
            <p className={styles.date}>{cityData.arrDate}</p>
          </div>
        </div>

        <img
          src="/icons/GallerySection/galleryCard-divider.svg"
          width="13"
          height="92"
          alt="Divider"
          className={styles.divider}
        ></img>

        <div className={styles.station__info}>
          <div>
            <p className={styles.location}>
              {cityData.depCountry}, {cityData.depCity}
            </p>
            <p className={styles.station}>{cityData.depStation}</p>
          </div>

          <div>
            <p className={styles.location}>
              {cityData.arrCountry}, {cityData.arrCity}
            </p>
            <p className={styles.station}>{cityData.arrStation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetailsCard;

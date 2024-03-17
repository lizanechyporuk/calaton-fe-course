import styles from "./CardListItem.module.scss";
import { formatDate } from "utils/continent-cards/formatDate";
import { useWindowWidth } from "utils/window-resize/useWindowWidth";
import { Link } from "react-router-dom";

interface CardListItemProps {
  src: string;
  continentIndex: number;
  tripIndex: number;
  header: string;
  depDate: string;
  arrDate: string;
  price: string;
}

function CardListItem({
  src,
  continentIndex,
  tripIndex,
  header,
  depDate,
  arrDate,
  price,
}: CardListItemProps): JSX.Element {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.trip__card}>
      <img
        src="/icons/TripsSection/favouriteBtn_empty.svg"
        height="24"
        width="24"
        alt="Favourite button"
        className={styles.favourite__btn}
      ></img>

      <p className={styles.header}>{header}</p>

      <div className={styles.date}>
        <img
          src="/icons/TripsSection/calendar.svg"
          height={windowWidth <= 900 ? "18" : "20"}
          width={windowWidth <= 900 ? "18" : "20"}
          alt="Calendar"
        ></img>
        <p>
          <span>{formatDate(depDate)}</span>-<span>{formatDate(arrDate)}</span>
        </p>
      </div>

      <img
        src={src}
        height={windowWidth <= 900 ? "95" : "180"}
        width={windowWidth <= 900 ? "160" : "297"}
        alt={header}
        className={styles.photo}
      ></img>

      <div className={styles.price__info}>
        <p>Total price:</p>

        <p className={styles.price}>{price}</p>
      </div>

      <Link
        to={`/trip-details/${continentIndex}/${tripIndex}`}
        className={styles.link}
      >
        View Details
      </Link>
    </div>
  );
}

export default CardListItem;

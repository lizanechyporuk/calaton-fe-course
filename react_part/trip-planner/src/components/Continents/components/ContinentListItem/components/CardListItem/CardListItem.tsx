import styles from "./CardListItem.module.scss";
import { formatDate } from "utils/continent-cards/formatDate";
import { useWindowWidth } from "utils/window-resize/useWindowWidth";

interface CardListItemProps {
  src: string;
  header: string;
  depDate: string;
  arrDate: string;
  price: string;
}

function CardListItem({
  src,
  header,
  depDate,
  arrDate,
  price,
}: CardListItemProps): JSX.Element {
  const windowWidth = useWindowWidth();

  return (
    <div className={styles.trip_card}>
      <img
        src="/icons/TripsSection/favouriteBtn_empty.svg"
        height="24"
        width="24"
        alt="Favourite button"
        className={styles.favourite_btn}
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

      <div className={styles.price_info}>
        <p>Total price:</p>

        <p className={styles.price}>{price}</p>
      </div>

      <a className={styles.link}>View Details</a>
    </div>
  );
}

export default CardListItem;

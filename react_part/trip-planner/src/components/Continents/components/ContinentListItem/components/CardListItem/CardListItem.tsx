import styles from "./CardListItem.module.scss";
import { formatDate } from "utils/continent-cards/formatDate";

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
  return (
    <div className={styles.tripCard}>
      <img
        src="/icons/TripsSection/favouriteBtn_empty.svg"
        height="24"
        width="24"
        alt="Favourite button"
        className={styles.favouriteBtn}
      ></img>

      <p className={styles.header}>{header}</p>

      <div className={styles.date}>
        <img
          src="/icons/TripsSection/calendar.svg"
          height="20"
          width="20"
          alt="Calendar"
        ></img>
        <p>
          <span>{formatDate(depDate)}</span>-<span>{formatDate(arrDate)}</span>
        </p>
      </div>

      <img
        src={src}
        height="180"
        width="297"
        alt={header}
        className={styles.photo}
      ></img>

      <div className={styles.priceInfo}>
        <p>Total price:</p>

        <p className={styles.price}>{price}</p>
      </div>

      <a className={styles.link}>View Details</a>
    </div>
  );
}

export default CardListItem;

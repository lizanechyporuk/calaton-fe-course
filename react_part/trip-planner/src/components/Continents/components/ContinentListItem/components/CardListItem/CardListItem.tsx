import styles from "./CardListItem.module.scss";

interface CardListItemProps {
  src: string;
  header: string;
  depDate: string;
  arrDate: string;
  price: string;
}

function formatDate(dateString: string): string {
  const [day, month, year] = dateString.split(".");

  const date = new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10)
  );

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthResult = monthNames[date.getMonth()];
  const dayResult = date.getDate();

  return `${monthResult} ${dayResult}`;
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

      <p className={styles.tripCardHeader}>{header}</p>

      <div className={styles.tripCardDate}>
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
        className={styles.tripCardPhoto}
      ></img>

      <div className={styles.tripCardPriceInfo}>
        <p>Total price:</p>

        <p className={styles.tripCardPrice}>{price}</p>
      </div>

      <a className={styles.tripCardLink}>View Details</a>
    </div>
  );
}

export default CardListItem;

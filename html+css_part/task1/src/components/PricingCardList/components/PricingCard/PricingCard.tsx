import styles from "./PricingCard.module.scss";
import Button from "../../../../ui/Button";

interface PricingCardProps {
  cardClass: string;
  header: string;
  price: string;
  text: string;
  ulComponents: string[];
  src: string;
}

function PricingCard({
  cardClass,
  header,
  price,
  text,
  ulComponents,
  src,
}: PricingCardProps): JSX.Element {
  const classBtn =
    cardClass === "secondaryPricingCard"
      ? "filledBtnSecondaryBiggestBold"
      : "filledBtnPrimaryBiggestBold";

  return (
    <div className={styles.pricingCard}>
      <div className={styles[cardClass]}>
        <h3 className={styles.header}>{header}</h3>

        <p className={styles.paragraphPrice}>
          <span className={styles.price}>{price}</span>/mo
        </p>

        <p className={styles.paragraphText}>{text}</p>

        <hr className={styles.hrDivider}></hr>

        <p className={styles.paragraphListHeader}>Includes:</p>

        <ul className={styles.cardList}>
          {ulComponents.map((component, index) => (
            <li className={styles.cardListItem} key={index}>
              {component}
            </li>
          ))}
        </ul>

        <Button classBtn={classBtn} text="Get started" />

        <img
          className={styles.image}
          src={src}
          width="48"
          height="48"
          alt="Price Photo"
        ></img>
      </div>
    </div>
  );
}

export default PricingCard;

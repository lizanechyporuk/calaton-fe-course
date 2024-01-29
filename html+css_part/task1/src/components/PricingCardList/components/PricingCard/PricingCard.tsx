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
  return (
    <div className={styles.pricingCard}>
      <div className={styles[cardClass]}>
        <h3>{header}</h3>
        <p className={styles.paragraphPrice}>
          <span>{price}</span>/mo
        </p>
        <p className={styles.paragraphText}>{text}</p>
        <hr></hr>
        <p className={styles.paragraphListHeader}>Includes:</p>
        <ul>
          {ulComponents.map((component, index) => (
            <li key={index}>{component}</li>
          ))}
        </ul>
        <Button
          classBtn={`${
            cardClass === "secondaryPricingCard"
              ? "filledBtnSecondaryBiggest"
              : "filledBtnPrimaryBiggest"
          }`}
          text="Get started"
        />
        <img src={src} width="48px" height="48px"></img>
      </div>
    </div>
  );
}
export default PricingCard;

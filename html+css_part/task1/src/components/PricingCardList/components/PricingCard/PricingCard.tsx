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
        <p>
          <span>{price}</span>/mo
        </p>
        <p>{text}</p>
        <hr></hr>
        <p>Includes:</p>
        <ul>
          {ulComponents.map((component, index) => (
            <li key={index}>{component}</li>
          ))}
        </ul>
        <Button text="Get started" />
        <img src={src}></img>
      </div>
    </div>
  );
}
export default PricingCard;

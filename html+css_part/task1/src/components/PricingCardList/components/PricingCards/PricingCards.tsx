import styles from "./PricingCards.module.scss";
import PricingCard from "../PricingCard/PricingCard";

function PricingCards(): JSX.Element {
  const cards = [
    {
      cardClass: "secondaryPricingCard",
      header: "Basic plan",
      price: "$19",
      text: "or $199 yearly",
      ulComponents: [
        "Vestibulum posuere odio",
        "Id purus maximus condimentum",
        "Vel convallis nibh duis",
      ],
      src: "/icons/PricingSection/light-card.png",
    },
    {
      cardClass: "primaryPricingCard",
      header: "Business plan",
      price: "$29",
      text: "or $299 yearly",
      ulComponents: [
        "Maximus condimentum turpis",
        "Nullam faucibus dictum accumsan",
        "Vivamus ante dolor",
        "Purus in convallis pharetra",
      ],
      src: "/icons/PricingSection/dark-card.png",
    },
    {
      cardClass: "secondaryPricingCard",
      header: "Enterprise plan",
      price: "$49",
      text: "or $499 yearly",
      ulComponents: [
        "Phasellus finibus lectus",
        "At blandit mollis maecenas",
        "Nec ultrices lectus eune",
        "Mattis facilisis lacus aliquet",
        "Am condimentum cursus",
      ],
      src: "/icons/PricingSection/light-card.png",
    },
  ];
  return (
    <div className={styles.pricingCards}>
      {cards.map((card, index) => (
        <PricingCard
          key={index}
          cardClass={card.cardClass}
          header={card.header}
          price={card.price}
          text={card.text}
          ulComponents={card.ulComponents}
          src={card.src}
        ></PricingCard>
      ))}
    </div>
  );
}

export default PricingCards;

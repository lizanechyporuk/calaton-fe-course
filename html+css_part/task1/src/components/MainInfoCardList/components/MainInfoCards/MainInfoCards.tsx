import styles from "./MainInfoCards.module.scss";
import MainInfoCard from "../MainInfoCard/MainInfoCard";

function MainInfoCards(): JSX.Element {
  const cards = [
    {
      header: "Better results",
      text: "Vestibulum posuere odio id purus maximus, vel condimentum nunc tincidunt. Duis sit amet vulputa.",
    },
    {
      header: "Less paper work",
      text: "Duis convallis eros eu dolor posuere, sit amet mollis turpis elementum. Aliquam ut sapien enim.",
    },
    {
      header: "More profit",
      text: "Donec tincidunt est pellentesque, ullamcorper quam sed, aliquam eros. Proin finibus luctus nisi.",
    },
  ];

  return (
    <div className={styles.mainInfoCards}>
      {cards.map(({ header, text }, index) => (
        <MainInfoCard
          key={index}
          src={`/icons/MainInfoSection/card${index + 1}.svg`}
          header={header}
          text={text}
        />
      ))}
    </div>
  );
}

export default MainInfoCards;

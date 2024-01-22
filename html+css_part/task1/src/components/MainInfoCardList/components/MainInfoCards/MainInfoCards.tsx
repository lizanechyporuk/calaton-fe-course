import styles from "./MainInfoCards.module.scss";
import MainInfoCard from "../MainInfoCard/MainInfoCard";

function MainInfoCards(): JSX.Element {
  return (
    <section className={styles.mainInfoCards}>
      <MainInfoCard
        src="/icons/MainInfoSection/card1.svg"
        header="Better results"
        text="Vestibulum posuere odio id purus maximus, vel condimentum nunc tincidunt. Duis sit amet vulputa."
      />
      <MainInfoCard
        src="/icons/MainInfoSection/card2.svg"
        header="Less paper work"
        text="Duis convallis eros eu dolor posuere, sit amet mollis turpis elementum. Aliquam ut sapien enim."
      />
      <MainInfoCard
        src="/icons/MainInfoSection/card2.svg"
        header="More profit"
        text="Donec tincidunt est pellentesque, ullamcorper quam sed, aliquam eros. Proin finibus luctus nisi."
      />
    </section>
  );
}
export default MainInfoCards;

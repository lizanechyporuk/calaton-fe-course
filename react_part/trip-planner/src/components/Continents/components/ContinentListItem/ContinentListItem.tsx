import styles from "./ContinentListItem.module.scss";
import CardList from "./components/CardList/CardList";

interface ContinentListItemProps {
  continent: string;
  continentIndex: number;
  continentData: any[];
}

function ContinentListItem({
  continent,
  continentIndex,
  continentData,
}: ContinentListItemProps): JSX.Element {
  return (
    <div className={styles.continent}>
      <div className={styles.heading}>
        <h4 className={styles.title}>{continent}</h4>

        <a className={styles.more__btn}>View All</a>
      </div>

      <CardList data={continentData} continentIndex={continentIndex} />
    </div>
  );
}

export default ContinentListItem;

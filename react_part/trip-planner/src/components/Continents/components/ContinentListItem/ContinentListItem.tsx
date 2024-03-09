import styles from "./ContinentListItem.module.scss";
import CardList from "./components/CardList/CardList";

interface ContinentListItemProps {
  continent: string;
  continentData: any[];
}

function ContinentListItem({
  continent,
  continentData,
}: ContinentListItemProps): JSX.Element {
  return (
    <div className={styles.continent}>
      <div className={styles.heading}>
        <h4 className={styles.title}>{continent}</h4>

        <a className={styles.more_btn}>View All</a>
      </div>

      <CardList data={continentData} />
    </div>
  );
}

export default ContinentListItem;

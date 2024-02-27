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
    <div className={styles.continentWrapper}>
      <div className={styles.continentHeader}>
        <h4 className={styles.continentTitle}>{continent}</h4>

        <a className={styles.viewMoreBtn}>View All</a>
      </div>

      <CardList data={continentData} />
    </div>
  );
}

export default ContinentListItem;

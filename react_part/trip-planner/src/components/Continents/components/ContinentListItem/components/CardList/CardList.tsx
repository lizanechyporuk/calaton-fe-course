import styles from "./CardList.module.scss";
import CardListItem from "../CardListItem/CardListItem";

interface CardListProps {
  data: any[];
  continentIndex: number;
}

function CardList({ data, continentIndex }: CardListProps): JSX.Element {
  return (
    <div className={styles.trip__card__list}>
      {data.map((item: any, index: number) => (
        <CardListItem
          key={index}
          src={item.cardImg}
          continentIndex={continentIndex}
          tripIndex={index}
          header={item.arrCity}
          depDate={item.depDate}
          arrDate={item.arrDate}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default CardList;

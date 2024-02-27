import React, { useEffect, useState } from "react";
import styles from "./CardList.module.scss";
import CardListItem from "../CardListItem/CardListItem";

interface CardListProps {
  data: any[];
}

function CardList({ data }: CardListProps): JSX.Element {
  return (
    <div className={styles.tripCardList}>
      {data.map((item: any, index: number) => (
        <CardListItem
          key={index}
          src={item.cardImg}
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

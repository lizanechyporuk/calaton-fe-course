import styles from "./ContinentList.module.scss";
import ContinentListItem from "../ContinentListItem/ContinentListItem";
import { fetchData } from "utils/firebase/fetch";
import { useState, useEffect } from "react";
import { filter } from "utils/continent-cards/filter";

interface ContinentListProps {
  activeContinent: string;
}

function ContinentList({ activeContinent }: ContinentListProps): JSX.Element {
  const [continentData, setContinentsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchContinentsData = async () => {
      const data = await fetchData();
      const dataCopy = [...data];

      setContinentsData(dataCopy);
    };
    fetchContinentsData();
  }, []);

  const filteredData = filter(activeContinent, continentData);

  return (
    <div className={styles.continent__list}>
      {filteredData.map((el: any, index: number) => {
        return (
          <ContinentListItem
            key={index}
            continent={el.continent}
            continentIndex={index}
            continentData={el.trips}
          />
        );
      })}
    </div>
  );
}

export default ContinentList;

import styles from "./ContinentList.module.scss";
import ContinentListItem from "../ContinentListItem/ContinentListItem";
import { fetchData } from "utils/firebase/fetch";
import { useState, useEffect, useMemo } from "react";
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

  const filteredData = useMemo(() => {
    return filter(activeContinent, continentData);
  }, [continentData, activeContinent]);

  return (
    <div className={styles.continent_list}>
      {filteredData.map((el: any, index: number) => {
        return (
          <ContinentListItem
            key={index}
            continent={el.continent}
            continentData={el.trips}
          />
        );
      })}
    </div>
  );
}

export default ContinentList;

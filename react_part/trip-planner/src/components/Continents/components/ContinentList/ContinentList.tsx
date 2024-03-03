import styles from "./ContinentList.module.scss";
import ContinentListItem from "../ContinentListItem/ContinentListItem";
import { fetchData } from "utils/firebase/fetch";
import { useState, useEffect, useMemo } from "react";
import { objToArr } from "utils/continent-cards/objToArr";
import { filter } from "utils/continent-cards/filter";

interface ContinentListProps {
  activeContinent: string;
}

function ContinentList({ activeContinent }: ContinentListProps): JSX.Element {
  const [continentData, setContinentsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchContinentsData = async () => {
      const data = await fetchData();
      const constants: any = {};

      data?.forEach((obj: any) => {
        const [key, value] = Object.entries(obj)[0];
        constants[key] = value;
      });

      setContinentsData(data);
    };
    fetchContinentsData();
  }, []);

  const filteredData = useMemo(() => {
    return filter(activeContinent, continentData);
  }, [continentData, activeContinent]);

  return (
    <div className={styles.continentList}>
      {filteredData.map((el: any, index: number) => {
        console.log(Object.values(el));
        return (
          <ContinentListItem
            key={index}
            continent={Object.keys(el)[0]}
            continentData={objToArr(Object.values(el)[0])}
          />
        );
      })}
    </div>
  );
}

export default ContinentList;

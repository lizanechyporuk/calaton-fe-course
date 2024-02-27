import styles from "./ContinentList.module.scss";
import ContinentListItem from "../ContinentListItem/ContinentListItem";
import { fetchData } from "../../../../index";
import { useState, useEffect } from "react";

interface ContinentListProps {
  activeContinent: string;
}

function ContinentList({ activeContinent }: ContinentListProps): JSX.Element {
  const continents = ["Europe", "Asia", "Africa", "America"];
  const [continentData, setFirebaseData] = useState<any[]>([]);

  useEffect(() => {
    const fetchFirebaseData = async () => {
      const data = await fetchData();

      if (data && typeof data === "object") {
        const dataArray = Object.values(data);
        setFirebaseData(dataArray);
      } else {
        console.error("Fetched data is not an object:", data);
      }
    };

    fetchFirebaseData();
  }, []);

  let filteredData = continentData;
  if (activeContinent !== "All") {
    filteredData = continentData.filter(
      (item) => item.worldPart === activeContinent
    );
  }

  return (
    <div className={styles.continentList}>
      {activeContinent === "All" ? (
        continents.map((continentEl, index) => {
          const filteredData = continentData.filter(
            (item) => item.worldPart === continentEl
          );
          return (
            <ContinentListItem
              key={index}
              continent={continentEl}
              continentData={filteredData}
            />
          );
        })
      ) : (
        <ContinentListItem
          continent={activeContinent}
          continentData={filteredData}
        />
      )}
    </div>
  );
}

export default ContinentList;

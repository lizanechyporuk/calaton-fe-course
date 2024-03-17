import React from "react";
import styles from "./TripDetailsPage.module.scss";
import Layout from "modules/Layout";
import GallerySection from "modules/GallerySection";
import TripDetailsSection from "modules/TripDetailsSection";
import TripPointsMediaSection from "modules/TripPointsMediaSection";
import { fetchCurCity } from "utils/firebase/fetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TripDetailsPage() {
  const [cityData, setCityData] = useState<any>({});
  const { continent, trip } = useParams<{ continent: string; trip: string }>();

  useEffect(() => {
    const fetchCityData = async () => {
      if (continent && trip) {
        const data = await fetchCurCity(parseInt(continent), parseInt(trip));
        if (data) {
          setCityData(data);
        }
      }
    };
    fetchCityData();
  }, [continent, trip]);

  return (
    <Layout>
      <GallerySection cityData={cityData} />

      <TripDetailsSection
        desc={cityData.desc}
        descEnding={cityData.descEnding}
        tripPoints={cityData.tripPoints}
      />

      <TripPointsMediaSection tripPoints={cityData.tripPointsMedia} />
    </Layout>
  );
}

export default TripDetailsPage;

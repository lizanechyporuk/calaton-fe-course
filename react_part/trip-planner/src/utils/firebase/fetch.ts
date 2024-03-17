import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { firebaseConfig } from "configs/firebase/index";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database, "cities");

const fetchData = async () => {
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const fetchCurCity = async (continentIndex: number, tripIndex: number) => {
  const cityRef = ref(database, `cities/${continentIndex}/trips/${tripIndex}`);

  try {
    const snapshot = await get(cityRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export { app, fetchData, fetchCurCity };

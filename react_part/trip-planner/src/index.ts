import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyB6HhQhH9DZpneAE5bzEn-ywvwb3O52vPU",
  authDomain: "trip-app-b02c8.firebaseapp.com",
  databaseURL:
    "https://trip-app-b02c8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "trip-app-b02c8",
  storageBucket: "trip-app-b02c8.appspot.com",
  messagingSenderId: "571397823666",
  appId: "1:571397823666:web:11ff4f4bf117882c1cbdab",
  measurementId: "G-FPHBK2PR57",
};

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

export { app, fetchData };

root.render(App());

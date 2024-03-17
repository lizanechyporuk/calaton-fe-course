import HomePage from "pages/HomePage";
import TripDetailsPage from "pages/TripDetailsPage";
import { Routes, Route } from "react-router-dom";
import { routes } from "constants/routes";
import "styles/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.homepage} element={<HomePage />} />
        <Route path={routes.tripdetails} element={<TripDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;

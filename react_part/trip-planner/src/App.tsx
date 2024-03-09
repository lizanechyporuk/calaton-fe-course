import HomePage from "pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { routes } from "constants/routes";
import "styles/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.homepage} element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

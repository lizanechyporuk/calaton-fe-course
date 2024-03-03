import HomePage from "pages/HomePage";
import { Routes, Route } from "react-router-dom";
import "styles/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

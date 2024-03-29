import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(React.createElement(BrowserRouter, null, React.createElement(App)));

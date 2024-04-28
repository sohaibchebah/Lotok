import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./normelize.css";
import "./index.css";
import "./global.css";
// import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

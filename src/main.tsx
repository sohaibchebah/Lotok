import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./comp/home.tsx";

import "./normelize.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./_auth/forms/Login.tsx";
import Signup from "./_auth/forms/Signup.tsx";
import NotFound from "./comp/NotFound.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./comp/home.tsx";

import "./normelize.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Login from "./_auth/forms/Login.tsx";
import Signup from "./_auth/forms/Signup.tsx";
import NotFound from "./comp/NotFound.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1078976749464-r070et3besmikif0c186rc3gvkqpcj2h.apps.googleusercontent.com">
      
        <BrowserRouter>
          <App />
        </BrowserRouter>

      
    </GoogleOAuthProvider>
  </React.StrictMode>
);

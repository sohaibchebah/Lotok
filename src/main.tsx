import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./normelize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './compenents/Login.tsx';
import Signup from "./compenents/Signup.tsx";
import NotFound from "./compenents/NotFound.tsx";

const router = createBrowserRouter([{
  path: '/',
  element : <App/>,
  errorElement: <NotFound/>,
},
  {
    path: '/Login',
    element  : <Login/>,

  }
  ,
  {
    path: '/Signup',
    element : <Signup/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

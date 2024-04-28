import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./normelize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Login from './comp/Login.tsx';
// import Signup from "./comp/Signup.tsx";
// import NotFound from "./comp/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <NotFound/>,
  },
  // {
  //   path: '/Login',
  //   element  : <Login/>,

  // }
  // ,
  // {
  //   path: '/Signup',
  //   element : <Signup/>,
  // }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

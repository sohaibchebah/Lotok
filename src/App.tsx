import React from "react";

import { Routes, Route } from 'react-router-dom';
import "../src/App.css";
import "../src/index.css";
import Signup from "./_auth/forms/Signup";
import Login from "./_auth/forms/Login";
import Authlayout from "./_auth/Authlayout";
// import Home from "./comp/home";
import Home from "./comp/Home";
// import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <main className="">
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home/>} />
        <Route element={<Authlayout/>}>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Login" element={<Login/>} />
        </Route>
        {/* private routes */}
      </Routes>

    </main>
  );
};

export default App;

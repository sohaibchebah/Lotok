import React from "react";
import Profile from "./_auth/forms/Profile.tsx";
import { Routes, Route } from 'react-router-dom';
import "../src/App.css";
import "../src/index.css";
import Signup from "./_auth/forms/Signup";
import Login from "./_auth/forms/Login";
import Authlayout from "./_auth/Authlayout";
import BrandPage from "./comp/brandPage/bransPage.tsx";
// import Home from "./comp/home";
import Home from "./comp/Home.tsx";
// import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import ButtonOfSection from "./comp/BrandsSection.tsx";


const App = () => {
  return (
    <main className="">
      <Routes>
        {/* public routes */}
        
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/" element={<Home />} />
        <Route/>
        <Route path="/brands" element={<BrandPage />}></Route>
        <Route element={<Authlayout />}>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Route>
        {/* private routes */}
      </Routes>
    </main>
  );
};

export default App;

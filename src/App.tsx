import React from "react";

import { Routes, Route } from "react-router-dom";
import "../src/App.css";
import "../src/index.css";
import Signup from "./_auth/forms/Signup";
import Login from "./_auth/forms/Login";
import Authlayout from "./_auth/Authlayout";
import BrandsList from "./comp/BrandsList.tsx";
import BrandsSection from "./comp/BrandsSection.tsx";
import Vehiclespage from "./comp/VehiclesPage.tsx/Vehiclespage.tsx";
import VehiceBySearchPage from "./comp/VehiclesBySearch/VehiceBySearchPage.tsx";
import ModelPage from "./comp/ModelPage/ModelPage.tsx";
import VehiclesByBrands from "./comp/VehiclesByBrands/VehiclesByBrands.tsx";
import Post from "./comp/Post/Post.tsx";
import Profile from "./comp/Profile/Profile.tsx";
import Yprofile from "./_auth/forms/Yprofile.tsx";
import AboutSetction from "./comp/AboutSetction.tsx";
import admin from "./_root/Admin.tsx";
// import Home from "./comp/home";
import Home from "./comp/home.tsx";
import Reservations from "./comp/Reservation/Reservations.tsx";
import UserProfile from "./comp/UserProfile/UserProfile.tsx";
import AddPost from "./comp/AddPost.tsx/AddPost.tsx";
import BrandsListGrand from "./comp/brandPage/BrandsListGrand.tsx";
import BrandPage from "./comp/brandPage/bransPage.tsx";
// import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import ButtonOfSection from "./comp/BrandsSection.tsx";

const App = () => {
  return (
    <main className="">
      <Routes>
        {/* public routes */}
        <Route path="/Yprofile" element={<Yprofile />} />
        <Route path="/Profile" element={<Profile />} />

        <Route path="/Profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSetction/>} />
        <Route />
        <Route path="/brands" element={<BrandPage/>}></Route>
        <Route path="/Models" element={<ModelPage />}></Route>
        <Route path="/VehiclesPage" element={<Vehiclespage />}></Route>
        <Route
          path="/VehiceBySearchPage"
          element={<VehiceBySearchPage />}
        ></Route>
        <Route path="/VehiclesByBrands" element={<VehiclesByBrands />}></Route>
        <Route path="/Post" element={<Post />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Reservations" element={<Reservations />}></Route>
        <Route path="/AddPost" element={<AddPost />}></Route>
        <Route element={<Authlayout />}>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Route>
        {/* private routes */}
        <Route path="/Admin" element={<admin />}></Route>
      </Routes>
    </main>
  );
};

export default App;

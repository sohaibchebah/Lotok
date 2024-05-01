import React from "react";
import Home from "./comp/Home.tsx";
import "../src/App.css";
import "../src/index.css";
// import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import ButtonOfSection from "./comp/BrandsSection.tsx";


const App = () => {
  return (
    <div className="relative">
      {/* <Router>
       
         
          <Route path="/page2" component={BrandPage} />
      
      </Router> */}
      <Home />
    </div>
  );
};

export default App;

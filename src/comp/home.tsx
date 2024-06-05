import Hero from "./Hero";
import Nav from "./nav";
// import Navexemple from "./navexemple";
import Searching from "./Searching";
import BrandsSection from "./BrandsSection";
import VehiclesSection from "./VehiclesSection";
import AboutSetction from "./AboutSetction";
import AppSection from "./AppSection";
import FooterSection from "./FooterSection";

const Home = () => {
  return (
    <div className="">
      <div className="landing-page">
        <div className="bg-primary-red relative">
          <Nav />
        </div>
        <Hero />
        <Searching />
      </div>
      <div className="brand-section" id="brands">
        <BrandsSection />
      </div>
      <div className="Vehicles-section mb-[100px]" id="vehicles">
        <VehiclesSection />
      </div>
      <div className="AboutUs-section mb-[100px]" id="about">
        <AboutSetction />
      </div>
      <div className="App-section mb-[100px]" id="app">
        <AppSection />
      </div>
      <footer className="Footer bg-black">
        <FooterSection />
      </footer>
    </div>
  );
};

export default Home;

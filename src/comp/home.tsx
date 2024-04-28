import Hero from "./Hero";
import Nav from "./nav";
// import Navexemple from "./navexemple";
import Searching from "./Searching";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="relative">
      <Nav />
      <Hero></Hero>
      <Searching />
      
      
    </div>
  );
};

export default Home;

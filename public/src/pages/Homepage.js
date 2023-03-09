import { HeroSection } from "../pages/HeroSection";
import { Cards } from "../components/Cards";
import { Teampage } from "../components/Teamsection";

import "../styles/index.css";
import "../styles/homepage.css";

export const Homepage = () => {
  return (
    <div className="flex flex-col" >
      <HeroSection />
      <div className="Cards-component-container">
        <Cards />
      </div>
      <Teampage />
    </div>
  );
};

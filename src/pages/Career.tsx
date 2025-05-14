import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import MetaLogicValues from "../components/MetalogicValues";
import Benefits from "../components/Benefits";
import MetalogicCares from "../components/MetalogicCares";
import VacanciesSection from "../components/VacanciesSection";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

const Career: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <MetaLogicValues />
      <Benefits />
      <MetalogicCares />
      <VacanciesSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Career;

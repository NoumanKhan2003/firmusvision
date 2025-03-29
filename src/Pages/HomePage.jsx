import React from "react";
import PrMarketingSection from "../Components/PrMarketingSection";
import MainSection from "../Components/MainSection";
import ClientsSection from "../Components/ClientsSection";
import ContactSection from "../Components/ContactSection";

const HomePage = () => {
  return (
    <div className="main">
      <MainSection />
      <PrMarketingSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;

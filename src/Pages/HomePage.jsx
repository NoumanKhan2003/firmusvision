import React from "react";
import PrMarketingSection from "../Components/PrMarketingSection";
import MainSection from "../Components/MainSection";
import ClientsSection from "../Components/ClientsSection";
import ContactSection from "../Components/ContactSection";
import ServicesSection from "../Components/ServicesSection";

const HomePage = () => {
  return (
    <div className="main">
      <MainSection />
      <PrMarketingSection />
      <ClientsSection />
      <ServicesSection/>
      <ContactSection />
    </div>
  );
};

export default HomePage;

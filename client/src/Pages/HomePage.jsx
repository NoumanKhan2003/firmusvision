import React, { useEffect } from "react";
import PrMarketingSection from "../Components/PrMarketingSection";
import MainSection from "../Components/MainSection";
import ClientsSection from "../Components/ClientsSection";
import ContactSection from "../Components/ContactSection";
import ServicesSection from "../Components/ServicesSection";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";
import ViewsSection from "../Components/ViewsSection";

const HomePage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="main">
      <MainSection />
      <PrMarketingSection />
      <ClientsSection />
      <ServicesSection/>
      <WhyChooseUsSection/>
      <ViewsSection/>
      <ContactSection />
    </div>
  );
};

export default HomePage;

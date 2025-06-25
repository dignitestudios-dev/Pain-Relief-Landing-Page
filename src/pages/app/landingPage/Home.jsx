import React from "react";
import HeroSection from "../../../components/app/landingPage/herosection/HeroSection";
import About from "../../../components/app/landingPage/herosection/AboutUs";
import PainRelief from "../../../components/app/landingPage/herosection/PainRelief";
import Management from "../../../components/app/landingPage/herosection/Management";
import SubscriptionSection from "../../../components/app/landingPage/herosection/SubscriptionSection";
import FAQAccordion from "../../../components/app/landingPage/herosection/Faqs";
import JoinNowCards from "../../../components/app/landingPage/herosection/JoinNowCards";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <PainRelief />
      <Management />
      <SubscriptionSection />
      <FAQAccordion />
      <JoinNowCards />
    </div>
  );
};

export default Home;

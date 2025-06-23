import React, { useEffect } from "react";
import HeroSection from "../../../components/app/landingPage/herosection/HeroSection";
import About from "../../../components/app/landingPage/herosection/AboutUs";
import PainRelief from "../../../components/app/landingPage/herosection/PainRelief";
import Management from "../../../components/app/landingPage/herosection/Management";
import SubscriptionSection from "../../../components/app/landingPage/herosection/SubscriptionSection";
import FAQAccordion from "../../../components/app/landingPage/herosection/Faqs";
import JoinNowCards from "../../../components/app/landingPage/herosection/JoinNowCards";
import { ErrorToast } from "../../../components/global/Toaster";

const Home = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("User Location:", latitude, longitude);
      },
      (error) => {
        ErrorToast("Reset Your Permissions", error);
      }
    );
  }, []);

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

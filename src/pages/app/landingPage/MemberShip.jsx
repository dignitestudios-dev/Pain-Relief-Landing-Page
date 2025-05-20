import React from "react";
import HeroSection from "../../../components/app/landingPage/membership/HeroSection";
import Cards from "../../../components/app/landingPage/membership/Cards";
import MemeberContent from "../../../components/app/landingPage/membership/MemeberContent";
import SubscriptionCards from "../../../components/app/landingPage/herosection/SubscriptionCards";
import Button from "../../../components/app/landingPage/Inputs/Button";
import { useNavigate } from "react-router";

const MemberShip = () => {
    const navigate =useNavigate()

  return (
    <div>
      <HeroSection />
      <div className="flex justify-center items-center">
        <div className=" w-[80%] ">
          <Cards />
          <MemeberContent />
          <div className="w-full">
            <SubscriptionCards />
          </div>
          <div className="flex justify-center">
            <div className="xl:w-[249px] lg:w-[200px] md:w-[150px]  w-[160px]  my-10 ">
              <Button text={"Get Started Now"}  onClick={() => navigate("/auth/account-selection")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;

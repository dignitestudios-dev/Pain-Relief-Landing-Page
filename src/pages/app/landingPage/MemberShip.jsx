import React, { useEffect, useState } from "react";
import HeroSection from "../../../components/app/landingPage/membership/HeroSection";
import Cards from "../../../components/app/landingPage/membership/Cards";
import MemeberContent from "../../../components/app/landingPage/membership/MemeberContent";
import Button from "../../../components/app/landingPage/Inputs/Button";
import { useLocation, useNavigate } from "react-router";
import SubscriptionCards from "../../../components/app/userInterface/subscription/SubscriptionsCards";
import { useSubscriptions } from "../../../hooks/api/Get";

const MemberShip = () => {
  const navigate = useNavigate();
  const { data, loading } = useSubscriptions("/payment/get-subscriptions");

  const [selectedPlans, setSelectedPlans] = useState({});
  const [billingPeriods, setBillingPeriods] = useState({});

  const handlePlanChange = (cardId, planType) => {
    setSelectedPlans((prev) => ({
      ...prev,
      [cardId]: planType,
    }));
  };

  const handleBillingPeriodChange = (cardId, period) => {
    setBillingPeriods((prev) => ({
      ...prev,
      [cardId]: period,
    }));
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <HeroSection />
      <div className="flex justify-center items-center">
        <div className=" w-[80%] ">
          <Cards />
          <MemeberContent />
          <div className="w-full">
            <SubscriptionCards
              subscriptionsData={data}
              handleBillingPeriodChange={handleBillingPeriodChange}
              selectedPlans={selectedPlans}
              handlePlanChange={handlePlanChange}
              billingPeriods={billingPeriods}
            />
          </div>
          <div className="flex justify-center">
            <div className="xl:w-[249px] lg:w-[200px] md:w-[150px]  w-[160px]  my-10 ">
              <Button
                text={"Get Started Now"}
                onClick={() => navigate("/auth/account-selection")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;

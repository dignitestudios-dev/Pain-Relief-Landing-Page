import React from "react";
import HeroSection from "../../../../components/app/userInterface/subscription/HeroSection";
import SubscriptionsPlan from "../../../../components/app/userInterface/subscription/SubscriptionsPlan";
import { useSubscriptions } from "../../../../hooks/api/Get";

const Subscriptions = () => {
  const { data, loading } = useSubscriptions("/payment/get-subscriptions");
  console.log(data,"data==>")
  return (
    <div className="bg-[#F5F5F5] ">
      <HeroSection />
      <SubscriptionsPlan subscriptionsData={data} />
    </div>
  );
};

export default Subscriptions;

import React, { useState } from "react";
import ClinicProfile from "./ClinicProfile";
import CareCosts from "./CareCosts";
import MapSection from "./MapSection";
import { useSubscriptions } from "../../../../hooks/api/Get";
import SubscriptionCards from "../../userInterface/subscription/SubscriptionsCards";

const DetailSection = ({ providerDetail, loading, provider }) => {
  const [tabActive, setTabActive] = useState("Provider Detail");
  const tabs = [
    "Provider Detail",
    "Membership Plans",
    "Care Costs",
    "Contact & Map",
  ];
  const { data, loadingLloader } = useSubscriptions("/payment/get-subscriptions");

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

  return (
    <div className="flex flex-col xl:px-20 lg:px-14  md:px-10 px-8 mb-10">
      <div className="xl:w-[60%] w-[100%]   md:mt-4">
        <div className="bg-white rounded-[8px] p-3 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2  flex-wrap">
          {tabs.map((item, index) => (
            <button
              key={index}
              onClick={() => setTabActive(item)}
              className={`rounded-[8px] h-[50px]   xl:text-[18px] lg:text-[16px] font-[500] ${
                tabActive === item
                  ? "bg-gradient-to-l to-[#63CFAC]  from-[#29ABE2] text-white"
                  : "bg-white text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {tabActive === "Provider Detail" && (
        <ClinicProfile providerDetail={providerDetail} loading={loading} />
      )}
      {tabActive === "Membership Plans" && (
        <div className="xl:w-[90%] w-[100%] ">
          <SubscriptionCards
            subscriptionsData={data}
            handleBillingPeriodChange={handleBillingPeriodChange}
            selectedPlans={selectedPlans}
            handlePlanChange={handlePlanChange}
            billingPeriods={billingPeriods}
          />
        </div>
      )}
      {tabActive === "Care Costs" && <CareCosts />}
      {tabActive === "Contact & Map" && (
        <MapSection provider={provider} providerDetail={providerDetail} />
      )}
    </div>
  );
};

export default DetailSection;

import { useState } from "react";
import HeroSection from "../../../../components/app/userInterface/subscription/HeroSection";
import { useSubscriptions } from "../../../../hooks/api/Get";
import SubscriptionCards from "../../../../components/app/userInterface/subscription/SubscriptionsCards";

const Subscriptions = () => {
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

  return (
    <div className="bg-[#F5F5F5] ">
      <HeroSection />
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col justify-center items-center md:my-8 my-4">
          <h2 className="md:text-[40px] text-[24px] text-[#212121] md:font-[600] font-[500] ">
            Explore Our Membership Plans
          </h2>
          <p className=" text-[#565656] md:text-[16px] text-[12px] md:font-[400] font-[400] md:w-[60%] w-[80%] text-center ">
            Choose from our subscription plans to suit your needs. Whether
            standard or premium, we have the right plan for you. For any
            questions, our support team is here to help.
          </p>
        </div>
        <div className="w-[80%]">
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-20 ">
            {loading &&
              Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full bg-white rounded-[22px] p-6 lg:h-[552px] h-full flex flex-col justify-between animate-pulse"
                >
                  <div>
                    <div className="grid md:grid-cols-2 grid-cols-1 border-b border-[#e8e8e8] pb-2">
                      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                      <div className="h-10 bg-gray-300 rounded w-1/2 md:justify-self-end"></div>
                    </div>

                    <div className="mt-4 flex justify-between gap-2 xl:items-center lg:items-start border-b border-[#e8e8e8] pb-2">
                      <div className="space-y-2">
                        <div className="h-5 w-24 bg-gray-300 rounded"></div>
                        <div className="flex gap-4">
                          <div className="h-4 w-20 bg-gray-300 rounded"></div>
                          <div className="h-4 w-20 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                      <div className="h-10 w-24 bg-gray-300 rounded"></div>
                    </div>

                    <div className="mt-6 mb-3 h-6 w-32 bg-gray-300 rounded"></div>
                    <ul className="space-y-3">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-[18px] h-[18px] bg-gray-300 rounded-full"></div>
                          <div className="h-4 w-48 bg-gray-300 rounded"></div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 grid md:grid-cols-2 grid-cols-1 gap-3">
                    <div className="w-[249px] h-10 bg-gray-300 rounded"></div>
                    <div className="h-4 w-64 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
          </div>

          <SubscriptionCards
            subscriptionsData={data}
            handleBillingPeriodChange={handleBillingPeriodChange}
            selectedPlans={selectedPlans}
            handlePlanChange={handlePlanChange}
            billingPeriods={billingPeriods}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;

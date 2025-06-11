import React, { useState } from "react";
import MemberDetails from "./MemberDetails";
import EffectiveDate from "./EffectiveDate";
import MemberShipAgreement from "./MemberShipAgreement";
import IDCardsSection from "./IDCardsSection";
import { useGetCards } from "../../../../../hooks/api/Get";
import CancelSubscriptionModal from "../upgradeplan/CancelSubscriptionModal";
import SubscriptionStatusModal from "../upgradeplan/SubscriptionStatusModal";
import { useCancelSubscription } from "../../../../../hooks/api/Post";
import { processCancelSubscription } from "../../../../../lib/utils";

const DetailsSection = () => {
  const [cancelSubscriptionModal, setCancelSubscriptionModal] = useState(false);
  const [subscriptionActiveModal, setSubscriptionActiveModal] = useState(false);
  const [tabActive, setTabActive] = useState("Membership Details");
  const tabs = [
    "Membership Details",
    "Effective Date",
    "ID Card",
    "Member Agreement",
  ];

  const { data, loading } = useGetCards("/payment/get-subscription-user");
  const { postData, loading: loader } = useCancelSubscription();
  const handleCancelSubscription = () => {
    postData(
      "/payment/cancel-subscription",
      data?.userSubscription?._id,
      processCancelSubscription
    );
  };

  return (
    <div className="flex flex-col mt-4 xl:px-20 lg:px-14  md:px-10 px-8 mb-10 ">
      <div className="w-[85%]">
        <div className="xl:w-[70%] w-[100%]   md:mt-4">
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
      </div>
      {tabActive === "Membership Details" && (
        <MemberDetails
          subscriptiondata={data}
          setCancelSubscriptionModal={setCancelSubscriptionModal}
          loading={loading}
        />
      )}
      {tabActive === "Effective Date" && (
        <EffectiveDate subscriptiondata={data} />
      )}
      {tabActive === "ID Card" && <IDCardsSection />}
      {tabActive === "Member Agreement" && <MemberShipAgreement />}
      {cancelSubscriptionModal && (
        <CancelSubscriptionModal
          onClose={() => setCancelSubscriptionModal(false)}
          onClick={() => handleCancelSubscription()}
          loader={loader}
        />
      )}
      {subscriptionActiveModal && (
        <SubscriptionStatusModal
          onClick={() => setSubscriptionActiveModal(false)}
          heading={"Subscription Activated Successfully"}
          para={
            "Your subscription is now active! Enjoy full access to all features.  Thank you for subscribing!"
          }
        />
      )}
    </div>
  );
};

export default DetailsSection;

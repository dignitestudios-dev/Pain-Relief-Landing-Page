import { useState } from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/upgradeplan/HeroSection";
import PlansSection from "../../../../components/app/userInterface/dashboard/upgradeplan/PlansSection";
import CancelSubscriptionModal from "../../../../components/app/userInterface/dashboard/upgradeplan/CancelSubscriptionModal";
import SubscriptionStatusModal from "../../../../components/app/userInterface/dashboard/upgradeplan/SubscriptionStatusModal";

import { useSubscriptions } from "../../../../hooks/api/Get";

const UpgradePlan = () => {
  const [cancelModal, setCancelModal] = useState(false);
  const [subscriptionStatusModal, setSubscriptionStatusModal] = useState(false);
  const [subscriptionActiveModal, setSubscriptionActiveModal] = useState(false);

  const { data, loading } = useSubscriptions("/payment/get-subscriptions");

  return (
    <div>
      <HeroSection />
      <div className="flex justify-center">
        <PlansSection subscriptionsData={data} loader={loading} />
      </div>
      {cancelModal && (
        <CancelSubscriptionModal
          onClose={() => {
            setCancelModal(false);
          }}
          onClick={() => {
            setCancelModal(false);
            setSubscriptionStatusModal(true);
          }}
        />
      )}
      {subscriptionStatusModal && (
        <SubscriptionStatusModal
          onClick={() => setSubscriptionStatusModal(false)}
          heading={"Subscription Cancelled Successfully"}
          para={
            "Your subscription is now active! Enjoy full access to all features.  Thank you for subscribing!"
          }
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

export default UpgradePlan;

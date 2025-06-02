import React, { useState } from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/upgradeplan/HeroSection";
import PlansSection from "../../../../components/app/userInterface/dashboard/upgradeplan/PlansSection";
import CancelSubscriptionModal from "../../../../components/app/userInterface/dashboard/upgradeplan/CancelSubscriptionModal";
import SubscriptionStatusModal from "../../../../components/app/userInterface/dashboard/upgradeplan/SubscriptionStatusModal";
import PaymentMethodModal from "../../../../components/app/userInterface/dashboard/upgradeplan/PaymentMethodModal";

const UpgradePlan = () => {
  const [cancelModal, setCancelModal] = useState(false);
  const [subscriptionStatusModal, setSubscriptionStatusModal] = useState(false);
  const [subscriptionActiveModal, setSubscriptionActiveModal] = useState(false);
  const [paymentMethodModal, setpaymentMethodModal] = useState(false);
  const [isactive, setIsActive] = useState(false);
  return (
    <div>
      <HeroSection />
      <div className="flex justify-center">
        <PlansSection
          setCancelModal={setCancelModal}
          setpaymentMethodModal={setpaymentMethodModal}
        />
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
      {paymentMethodModal && (
        <PaymentMethodModal
          setIsActive={setIsActive}
          isactive={isactive}
          onClose={() => {
            setpaymentMethodModal(false);
          }}
          onClick={() => {
            setpaymentMethodModal(false);
            setSubscriptionActiveModal(true);
          }}
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

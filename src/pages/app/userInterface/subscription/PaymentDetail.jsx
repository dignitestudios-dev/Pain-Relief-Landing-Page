import { useLocation } from "react-router";
import HeroSection from "../../../../components/app/userInterface/subscription/HeroSection";
import PaymentDetails from "../../../../components/app/userInterface/subscription/PaymentDetails";

const PaymentDetail = () => {
  const location = useLocation();
  const { subscriptionData, planType, billingPeriod } = location.state || {};

  return (
    <div className="bg-[#F5F5F5] ">
      <HeroSection />
      <PaymentDetails
        subscriptionData={subscriptionData}
        planData={{
          planType,
          billingPeriod,
        }}
      />
    </div>
  );
};

export default PaymentDetail;

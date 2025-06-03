import { useEffect, useState } from "react";
import { RadioBtn, RadioBtnActive, SubsTick } from "../../../../assets/export";
// import Button from "../../landingPage/Inputs/Button";

import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import SubscriptionSuccessModal from "./SubscriptionSuccessModal";
import { useNavigate } from "react-router";

const PaymentDetails = ({ planData, subscriptionData }) => {
  const { planType } = planData;
  const navigate = useNavigate();

  const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);
  const [billingPeriod, setBillingPeriod] = useState("yearly");
  const [selectedPlan, setSelectedPlan] = useState(planType?.planType);
  const [isSubscription, setIsSubscription] = useState(false);

  const plans =
    billingPeriod === "yearly"
      ? subscriptionData?.yearly
      : subscriptionData?.monthly;
  const selectedPlanData = plans?.find(
    (plan) => plan?.planType === selectedPlan
  );

  useEffect(() => {
    setSelectedPlan(planType?.planType);
  }, [planType]);

  return (
    <div className="mt-10 pb-10 ">
      <h2 className=" text-center text-[40px] text-[#212121] md:font-[600] font-[500] ">
        Purchase Details
      </h2>
      <div className="flex justify-center my-10 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-[70%]  ">
          <div className="w-full bg-white rounded-[22px] p-6 lg:h-[652px] h-full flex flex-col justify-between">
            <div>
              {/* Header with billing period toggle */}
              <div className="flex justify-between border-b border-[#e8e8e8] pb-2">
                <h2 className="lg:text-[24px] text-[18px] text-[#000000] font-semibold">
                  {subscriptionData?.name}
                </h2>
                {subscriptionData?.monthly?.length > 0 && (
                  <div className="flex gap-2 border h-[43px] border-[#63CFAC] p-[2px] w-[120px] md:w-[150px] xl:w-[180px] rounded-[6px]">
                    <button
                      className={`w-1/2 rounded-[6px] ${
                        billingPeriod === "monthly"
                          ? "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] text-white"
                          : "text-black"
                      }`}
                      onClick={() => setBillingPeriod("monthly")}
                    >
                      Month
                    </button>
                    <button
                      className={`w-1/2 rounded-[6px] ${
                        billingPeriod === "yearly"
                          ? "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] text-white"
                          : "text-black"
                      }`}
                      onClick={() => setBillingPeriod("yearly")}
                    >
                      Year
                    </button>
                  </div>
                )}
              </div>

              {/* Plan selection */}
              <div className="mt-4 flex justify-between gap-2 xl:items-center lg:items-start border-b border-[#e8e8e8] pb-2">
                <div>
                  <h3 className="text-[18px] font-semibold text-[#181818] mb-2">
                    Select Plan
                  </h3>
                  <div className="flex flex-col xl:flex-row xl:space-x-4">
                    {plans?.map((plan) => (
                      <label
                        key={plan?._id}
                        className="flex items-center space-x-1 text-sm cursor-pointer"
                      >
                        <img
                          onClick={() => setSelectedPlan(plan?.planType)}
                          src={
                            selectedPlan === plan?.planType
                              ? RadioBtnActive
                              : RadioBtn
                          }
                          alt=""
                          className="cursor-pointer w-[17px] h-[17px]"
                        />
                        <span className="text-black capitalize">
                          {plan?.planType}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent xl:text-[45px] text-[25px] font-bold">
                  ${selectedPlanData?.price?.toFixed(2) || "0.00"}
                  <span className="text-[18px] font-normal">/mo</span>
                </div>
              </div>

              {/* Features */}
              <h3 className="mt-6 mb-3 font-[600] text-[20px] text-[#181818]">
                Plan Details
              </h3>
              <ul className="space-y-3">
                {subscriptionData?.features?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-[#181818]"
                  >
                    <img src={SubsTick} className="w-[18px] h-[18px]" alt="" />
                    <span className="xl:text-[16px] text-[14px] font-[500] text-[#181818]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer with Buy Button */}

            {/* <div className="mt-6 flex items-center gap-3">
              <div className="w-[249px]">
                <Button
                  text={"Buy Now"}
                  onClick={
                    
                    navigate("/user/subscription-payment-detail", {
                      state: {
                        subscriptionData,
                        planType: selectedPlan,
                        billingPeriod,
                      },
                    })
                  }
                />
              </div> 
            <p className="xl:text-[12px] text-[10px] font-[500] text-[#000000]">
                All membership plans will have an additional $20 one-time
                application fee
              </p>
             </div> */}
          </div>

          <Elements stripe={stripePromise}>
            <PaymentForm
              planData={planData}
              setIsSubscription={setIsSubscription}
            />
          </Elements>
        </div>
      </div>

      {isSubscription && (
        <SubscriptionSuccessModal
          onClick={() => {
            setIsSubscription(!isSubscription);
            navigate("/onboard/create-profile");
          }}
        />
      )}
    </div>
  );
};

export default PaymentDetails;

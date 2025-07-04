import { useLocation, useNavigate } from "react-router";
import { RadioBtn, RadioBtnActive, SubsTick } from "../../../../assets/export";
import Button from "../../landingPage/Inputs/Button";
import { AppContext } from "../../../../context/AppContext";
import { useContext } from "react";

const SubscriptionCards = ({
  subscriptionsData,
  handleBillingPeriodChange,
  selectedPlans,
  handlePlanChange,
  billingPeriods,
}) => {
  const navigate = useNavigate();
  const { token } = useContext(AppContext);
  console.log("🚀 ~ token:", token);

  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-20 mt-10 my-16">
      {subscriptionsData?.map((data, index) => {
        const cardId = data._id || index;
        const currentPeriod = billingPeriods[cardId] || "yearly";
        const selectedPlan = selectedPlans[cardId] || "individual";
        const plans = currentPeriod === "yearly" ? data?.yearly : data?.monthly;
        const selectedPlanData = plans?.find(
          (plan) => plan?.planType === selectedPlan
        );

        return (
          <div
            key={cardId}
            className="w-full bg-white rounded-[22px] p-6 lg:h-[752px] h-full flex flex-col justify-between"
          >
            <div>
              <div className="grid md:grid-cols-2 grid-cols-1 border-b border-[#e8e8e8] pb-2">
                <h2 className="lg:text-[24px] text-[18px] text-center md:text-start text-[#000000] font-semibold">
                  {data?.name}
                </h2>
                <div className="w-full flex md:justify-end justify-center">
                  {data?.monthly?.length > 0 && (
                    <div className="flex gap-2 border h-[43px] border-[#63CFAC] p-[2px] w-[120px] md:w-[150px] xl:w-[180px] rounded-[6px]">
                      <button
                        className={`w-1/2 rounded-[6px] ${
                          currentPeriod === "monthly"
                            ? "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] text-white"
                            : "text-black"
                        }`}
                        onClick={() =>
                          handleBillingPeriodChange(cardId, "monthly")
                        }
                      >
                        Month
                      </button>
                      <button
                        className={`w-1/2 rounded-[6px] ${
                          currentPeriod === "yearly"
                            ? "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] text-white"
                            : "text-black"
                        }`}
                        onClick={() =>
                          handleBillingPeriodChange(cardId, "yearly")
                        }
                      >
                        Year
                      </button>
                    </div>
                  )}
                </div>
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
                        className="flex items-center space-x-1 text-sm cursor-pointer capitalize"
                      >
                        <img
                          onClick={() =>
                            handlePlanChange(cardId, plan?.planType)
                          }
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
                  <span className="text-[18px] font-normal">
                    {selectedPlanData?.billingPeriod == "monthly"
                      ? "/mo"
                      : "/yr"}
                  </span>
                </div>
              </div>

              {/* Features */}
              <h3 className="mt-6 mb-3 font-[600] text-[20px] text-[#181818]">
                Plan Details
              </h3>
              <ul className="space-y-3">
                {data?.features?.map((item, idx) => (
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

            {/* Footer with button */}
            <div className="mt-6 grid md:grid-cols-2 grid-cols-1 gap-3">
              <div className="w-[249px]">
                <Button
                  text={"Buy Now"}
                  onClick={() => {
                    if (!token) {
                      navigate("/auth/account-selection");
                      return;
                    }
                    navigate("/onboard/subscription-payment-detail", {
                      state: {
                        subscriptionData: data,
                        planType: selectedPlanData,
                        billingPeriod: currentPeriod,
                      },
                    });
                  }}
                />
              </div>
              <p className="xl:text-[12px] text-[10px] font-[500] text-[#000000]">
                All membership plans will have an additional $20 one-time
                application fee
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubscriptionCards;

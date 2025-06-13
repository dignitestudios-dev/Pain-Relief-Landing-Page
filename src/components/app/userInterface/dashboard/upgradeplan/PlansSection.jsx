import Button from "../../../landingPage/Inputs/Button";
import { useNavigate } from "react-router";
import {
  RadioBtn,
  RadioBtnActive,
  SubsTick,
} from "../../../../../assets/export";
import { useGetCards } from "../../../../../hooks/api/Get";
import { useState } from "react";
import UpgradePlanModal from "./UpgradePlanModal";
import { ErrorToast, SuccessToast } from "../../../../global/Toaster";
import axios from "../../../../../axios";

const PlansSection = ({ subscriptionsData, loader }) => {
  const navigate = useNavigate();
  const [Isactive, setIsActive] = useState("Year");
  const [paymentModal, setPaymentModal] = useState(false);
  console.log("🚀 ~ PlansSection ~ paymentModal:", paymentModal);
  const [priceId, setPriceId] = useState(false);
  const [update, setUpdate] = useState(false);

  const [selectedPlans, setSelectedPlans] = useState({
    0: null,
    1: null,
  });

  const handleSelectPlan = (cardIndex, plan) => {
    setSelectedPlans((prev) => ({ ...prev, [cardIndex]: plan }));
  };

  const handlePeriodChange = (period) => {
    setIsActive(period);
    setSelectedPlans((prev) => ({ ...prev, 1: null }));
  };

  const { data: subData } = useGetCards(
    "/payment/get-subscription-user",
    update
  );

  /** send only the plan that belongs to the clicked card */
  const handleBuyNow = (cardIndex) => {
    const plan = selectedPlans[cardIndex];
    console.log("🚀 ~ PlansSection ~ plan:", plan);
    if (!plan) return ErrorToast("Please choose a plan first");
    setPriceId(plan?._id);
    setPaymentModal(true);
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.post("/payment/create-subscriptionplan", {
        priceId: priceId,
      });
      if (response.status === 200) {
        // loginAuth(response?.data);
        // setIsSubscription(true);
        setPaymentModal(false);
        setUpdate((prev) => !prev);
        navigate("/user/membership");
        SuccessToast("Plan Updated");
      }
    } catch (apiError) {
      ErrorToast(apiError?.response?.data?.message);
      console.error("the error is ===", apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-[80%] ">
      <div className="grid grid-cols-12 gap-10 my-10 ">
        {loader ? (
          Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="w-full  col-span-6 bg-white rounded-[22px] p-6 lg:h-[552px] h-full flex flex-col justify-between animate-pulse"
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
          ))
        ) : (
          <>
            <div className="w-full  col-span-6  mt-4 bg-white rounded-[22px] p-6 lg:h-[752px] h-full flex flex-col justify-between">
              {/* ---------- header ---------- */}
              <h2 className="text-[24px] font-semibold border-b pb-2">
                {subscriptionsData[0]?.name}
              </h2>

              {/* ---------- plan radios ---------- */}
              <div className="flex justify-between border-b pb-2">
                <div>
                  <h3 className="text-[18px] font-semibold mb-2">
                    Select Plan
                  </h3>

                  <div className="flex flex-col xl:flex-row xl:space-x-4">
                    {subscriptionsData[0]?.yearly
                      ?.filter(
                        (plan) =>
                          !(
                            plan.planType ===
                              subData?.userSubscription?.priceDetails
                                ?.planType &&
                            plan.billingPeriod ===
                              subData?.userSubscription?.priceDetails
                                ?.billingPeriod
                          )
                      )
                      .map((plan) => (
                        <label
                          key={plan._id}
                          className="flex items-center space-x-1 text-sm"
                        >
                          <img
                            src={
                              selectedPlans[0]?._id === plan._id
                                ? RadioBtnActive
                                : RadioBtn
                            }
                            onClick={() => handleSelectPlan(0, plan)}
                            className="cursor-pointer w-[17px] h-[17px]"
                            alt=""
                          />
                          <span className="text-black">{plan.planType}</span>
                        </label>
                      ))}
                  </div>
                </div>

                <div
                  className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2]
                    bg-clip-text text-transparent xl:text-[45px] text-[25px] font-bold"
                >
                  ${selectedPlans[0]?.price ?? "00"}
                  <span className="text-[18px] font-normal">/mo</span>
                </div>
              </div>

              {/* ---------- features ---------- */}
              <h3 className="mt-6 mb-3 font-semibold text-[20px]">
                Plan Details
              </h3>
              <ul className="space-y-3">
                {subscriptionsData[0]?.features?.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <img src={SubsTick} alt="" className="w-[18px] h-[18px]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* ---------- buy now ---------- */}
              <div className="w-[249px]">
                <Button text={"Buy Now"} onClick={() => handleBuyNow(0)} />
              </div>
            </div>

            <div className="w-full  col-span-6  mt-4 bg-white rounded-[22px] p-6 lg:h-[752px] h-full flex flex-col justify-between">
              <div className="">
                <div className="flex justify-between border-b border-[#e8e8e8] pb-2">
                  {/* ---------- header ---------- */}
                  <h2 className="lg:text-[24px] text-[18px] text-[#000000] font-semibold ">
                    {subscriptionsData[1]?.name}
                  </h2>
                  {/* ---------- Toggle Button ---------- */}

                  <div className="flex gap-2 border xl:h-[43px] lg:h-[43px] h-[42px] border-[#63CFAC] p-[2px] xl:w-[180px] lg:w-[180px] md:w-[150px] w-[120px] rounded-[6px] ">
                    <button
                      className={`w-[88.06px]  rounded-[6px] ${
                        Isactive === "Monthly"
                          ? "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] text-white "
                          : "text-black"
                      }   `}
                      onClick={() => handlePeriodChange("Monthly")}
                    >
                      Month{" "}
                    </button>
                    <button
                      className={`w-[88.06px] rounded-[6px] ${
                        Isactive === "Year"
                          ? "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2]  text-white"
                          : "text-black"
                      }   `}
                      onClick={() => handlePeriodChange("Year")}
                    >
                      Year{" "}
                    </button>
                  </div>
                </div>

                {/* ---------- plan radios ---------- */}
                <div className="mt-4 flex justify-between gap-2  xl:items-center lg:items-start border-b border-[#e8e8e8] pb-2">
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#181818] mb-2">
                      Select Plan
                    </h3>
                    <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row xl:space-x-4">
                      {(Isactive === "Monthly"
                        ? subscriptionsData[1]?.monthly
                        : subscriptionsData[1]?.yearly
                      )?.map((plan, index) => (
                        <label
                          key={plan._id}
                          className="flex items-center space-x-1 text-sm"
                        >
                          <img
                            src={
                              selectedPlans[1]?._id === plan._id
                                ? RadioBtnActive
                                : RadioBtn
                            }
                            onClick={() => handleSelectPlan(1, plan)}
                            className="cursor-pointer w-[17px] h-[17px]"
                            alt=""
                          />
                          <span>{plan.planType}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent xl:text-[45px] text-[25px] font-bold">
                    ${selectedPlans[1]?.price ?? "00"}
                    <span className="text-[18px] font-normal">
                      {subscriptionsData[1]?.yearly ? "/yr" : "/mo"}
                    </span>
                  </div>
                </div>

                <h3 className="mt-6 mb-3 font-[600] text-[20px] text-[#181818]">
                  Plan Details
                </h3>
                <ul className="space-y-3">
                  {subscriptionsData[1]?.features?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-[#181818]"
                    >
                      <img
                        src={SubsTick}
                        className="w-[18px] h-[18px]"
                        alt=""
                      />
                      <span className="xl:text-[16px] text-[14px] font-[500] text-[#181818]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-[249px]">
                <Button text={"Buy Now"} onClick={() => handleBuyNow(1)} />
              </div>
            </div>
          </>
        )}
      </div>
      {paymentModal && (
        <UpgradePlanModal
          onClose={() => setPaymentModal(false)}
          onClick={() => handleSubmit()}
          loader={loading}
        />
      )}
    </div>
  );
};

export default PlansSection;

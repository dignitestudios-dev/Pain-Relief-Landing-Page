import Button from "../../../landingPage/Inputs/Button";
import { useNavigate } from "react-router";
import {
  RadioBtn,
  RadioBtnActive,
  SubsTick,
} from "../../../../../assets/export";
import { useGetCards } from "../../../../../hooks/api/Get";
import { useEffect, useRef, useState } from "react";
import UpgradePlanModal from "./UpgradePlanModal";
import { ErrorToast, SuccessToast } from "../../../../global/Toaster";
import axios from "../../../../../axios";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PlansSection = ({
  subscriptionsData,
  loader,
  handleBillingPeriodChange,
  handlePlanChange,
  billingPeriods,
  setBillingPeriods,
  selectedPlans,
  setSelectedPlans,
}) => {
  const navigate = useNavigate();
  // const [Isactive, setIsActive] = useState("Year");
  const [paymentModal, setPaymentModal] = useState(false);

  const [priceId, setPriceId] = useState(false);
  const [update, setUpdate] = useState(false);

  const { data: subData } = useGetCards(
    "/payment/get-subscription-user",
    update
  );

  const handleBuyNow = (cardId) => {
    const selectedPlanType = selectedPlans[cardId];
    const currentPeriod = billingPeriods[cardId] || "yearly";

    const cardData = subscriptionsData.find((card) => card._id === cardId);
    if (!cardData) return ErrorToast("Plan not found");

    const plans =
      currentPeriod === "monthly" ? cardData.monthly : cardData.yearly;

    const selectedPlan = plans.find(
      (plan) => plan.planType === selectedPlanType
    );

    if (!selectedPlan) return ErrorToast("Please choose a plan first");

    setPriceId(selectedPlan._id); // for backend reference
    setPaymentModal(true); // open modal
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

  useEffect(() => {
    if (!subscriptionsData?.length) return;

    const selected = {};
    const billing = {};

    subscriptionsData.forEach((card) => {
      const cardId = card._id;
      const period = card?.monthly?.length ? "monthly" : "yearly";
      const plans = period === "monthly" ? card.monthly : card.yearly;

      billing[cardId] = period;

      const eligible = plans.find(
        (p) =>
          !(
            p.planType === subData?.userSubscription?.priceDetails?.planType &&
            p.billingPeriod ===
              subData?.userSubscription?.priceDetails?.billingPeriod &&
            card.name === subData?.userSubscription?.name
          )
      );

      if (eligible) selected[cardId] = eligible.planType;
    });

    setBillingPeriods((prev) => ({ ...prev, ...billing }));
    setSelectedPlans((prev) => ({ ...prev, ...selected }));
  }, [subscriptionsData, subData]);

  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log("🚀 ~ PlansSection ~ scrollPosition:", scrollPosition);

  const handleScroll = (direction) => {
    const scrollAmount = 400;
    if (scrollRef.current) {
      const newScroll =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
      setScrollPosition(newScroll);
    }
  };

  const isCarousel = subscriptionsData?.length > 2;
  return (
    <div className=" w-[80%] ">
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
        <div className="relative w-full mt-10 my-16">
          {isCarousel && (
            <>
              <button
                onClick={() => handleScroll("left")}
                className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
              >
                <IoIosArrowBack color="black" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
              >
                <IoIosArrowForward color="black" />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className={`w-full ${
              isCarousel
                ? "flex overflow-hidden space-x-6 scroll-smooth px-2 snap-x snap-mandatory"
                : "grid xl:grid-cols-2 grid-cols-1 gap-20"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}

            // className="grid xl:grid-cols-2 grid-cols-1 gap-20 mt-10 my-16"
          >
            {subscriptionsData?.map((data, index) => {
              const cardId = data._id || index;
              const currentPeriod = billingPeriods[cardId] || "yearly";
              const selectedPlan =
                currentPeriod === "yearly"
                  ? selectedPlans[cardId] || data?.yearly[0]?.planType
                  : selectedPlans[cardId] || data?.monthly[0]?.planType;
              const plans =
                currentPeriod === "yearly" ? data?.yearly : data?.monthly;
              const selectedPlanData = plans?.find(
                (plan) => plan?.planType === selectedPlan
              );

              return (
                <div
                  key={cardId}
                  className={`bg-white rounded-[22px] p-6 lg:h-[752px] h-auto flex flex-col justify-between ${
                    isCarousel
                      ? "snap-start flex-shrink-0 w-[90%] md:w-[48%]"
                      : "w-full"
                  }`}
                >
                  <div>
                    <div className="grid md:grid-cols-2 grid-cols-1 border-b border-[#e8e8e8] pb-2">
                      <h2 className="lg:text-[24px] text-[18px] text-center md:text-start text-[#000000] font-semibold">
                        {data?.name}
                      </h2>
                      <div className="w-full flex md:justify-end justify-center">
                        {data?.monthly?.length > 0 &&
                          data?.yearly?.length > 0 && (
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

                  {/* Footer with button */}
                  <div className="mt-6 grid lg:grid-cols-2 grid-cols-1 gap-3">
                    <div className="md:w-[239px] w-[209px] ">
                      <Button
                        text={"Buy Now"}
                        onClick={() => handleBuyNow(data?._id)}
                      />
                      {/* <Button
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
                    /> */}
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
        </div>
      )}

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

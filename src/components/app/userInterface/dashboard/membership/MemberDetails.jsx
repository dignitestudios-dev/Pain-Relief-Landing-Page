import React, { useState } from "react";
import { RadioBtnActive, SubsTick } from "../../../../../assets/export";
import { getDateFormat } from "../../../../../lib/helpers";
import { SubscriptionSkeleton } from "../../../../global/Sekelton";

const MemberDetails = ({
  subscriptiondata,
  setCancelSubscriptionModal,
  loading,
}) => {
  return (
    <div>
      {loading ? (
        <SubscriptionSkeleton />
      ) : (
        <div className="w-full xl:w-[50%] mt-4 bg-white rounded-[22px] p-6 lg:h-[752px] h-full flex flex-col justify-between">
          <div className="">
            <h2 className="text-[24px] text-[#000000] font-semibold border-b border-[#e8e8e8] pb-2">
              {subscriptiondata?.userSubscription?.name}
            </h2>

            <div className="mt-4 flex justify-between gap-2  xl:items-center lg:items-start border-b border-[#e8e8e8] pb-2">
              <div>
                <h3 className="text-[18px] font-semibold text-[#181818] mb-2">
                  Select Plan
                </h3>
                <div className="flex flex-col md:flex-col items-center gap-3 lg:flex-col xl:flex-row xl:space-x-4 capitalize">
                  <img
                    src={RadioBtnActive}
                    alt=""
                    className="cursor-pointer w-[17px] h-[17px] "
                  />
                  {subscriptiondata?.userSubscription?.priceDetails?.planType}
                  {/* {["Individual", "Couples", "Family"].map((plan) => (
                  <label
                    key={plan}
                    className="flex items-center space-x-1 text-sm"
                  >
                    <img
                      onClick={() => setSelectedPlan(plan)}
                      src={selectedPlan === plan ? RadioBtnActive : RadioBtn}
                      alt=""
                      className="cursor-pointer w-[17px] h-[17px] "
                    />

                    <span className="text-black">{plan}</span>
                  </label>
                ))} */}
                </div>
              </div>
              <div className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent xl:text-[45px] text-[25px] font-bold">
                {subscriptiondata?.userSubscription?.priceDetails?.price}
                <span className="text-[18px] font-normal">
                  /{" "}
                  {subscriptiondata?.userSubscription?.priceDetails
                    ?.billingPeriod == "monthly"
                    ? "mo"
                    : "yr"}
                </span>
              </div>
            </div>

            <h3 className="mt-6 mb-3 font-[600] text-[20px] text-[#181818]">
              Plan Details
            </h3>
            <ul className="space-y-3">
              {subscriptiondata?.userSubscription?.features?.map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-[#181818]"
                  >
                    <img src={SubsTick} className="w-[18px] h-[18px]" alt="" />
                    <span className="xl:text-[16px] text-[14px] font-[500] text-[#181818]">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="w-[249px]">
              <button
                onClick={() => setCancelSubscriptionModal(true)}
                disabled={
                  subscriptiondata?.userSubscription?.cancelAtPeriodEnd === true
                }
                className={`h-[49px] w-[249px] rounded-[8px] text-white ${
                  subscriptiondata?.userSubscription?.cancelAtPeriodEnd
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#EE3131]"
                }`}
              >
                Cancel Subscription
              </button>
            </div>
            <p className="xl:text-[12px] text-[10px] font-[500] text-[#000000]">
              Your subscription will expire on
              <br />
              <span className="text-[#EE3131]">
                {" "}
                {getDateFormat(
                  subscriptiondata?.userSubscription?.endDate
                )}{" "}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberDetails;

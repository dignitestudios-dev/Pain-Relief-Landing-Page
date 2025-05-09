import React from "react";
import SubscriptionCards from "./SubscriptionCards";

const SubscriptionSection = () => {
  return (
    <div className="bg-subscription text-white xl:mt-0 mt-10">
      <div className="flex flex-col  justify-center py-20 lg:items-center w-[90%] mx-auto">
        <div>
          <h2 className="text-3xl text-center md:text-5xl lg:text-[64px] font-semibold leading-tight">
            Flexible Membership Plans
          </h2>
          <p className="mt-4 lg:text-[24px] text-center  md:text-[18px] text-[16px] ">
            Choose a plan that fits your needs and get started today.
          </p>
        </div>
        <div className="xl:w-[90%]">

        <SubscriptionCards />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;

import React from "react";
import SubscriptionCards from "./SubscriptionsCards";

const SubscriptionsPlan = ({ subscriptionsData }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center my-8">
        <h2 className="text-[40px] text-[#212121] font-[600] ">
          Explore Our Membership Plans
        </h2>
        <p className=" text-[#565656] text-[16px] font-[400] w-[60%] text-center ">
          Choose from our subscription plans to suit your needs. Whether
          standard or premium, we have the right plan for you. For any
          questions, our support team is here to help.
        </p>
      </div>
      <div className="w-[80%]">
        <SubscriptionCards subscriptionsData={subscriptionsData} />
      </div>
    </div>
  );
};

export default SubscriptionsPlan;

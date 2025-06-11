import React from "react";
import { getDateFormat } from "../../../../../lib/helpers";

const EffectiveDate = ({ subscriptiondata }) => {
  return (
    <div className="bg-white w-full rounded-[8px] h-[488px]  mt-4">
      <div className="p-6">
        <h2 className="text-[24px] font-[600] ">Effective Date</h2>
      </div>
      <div className="border-t p-6">
        <p className="text-[16px] font-[500] ">
          Your subscription activate on{" "}
          {getDateFormat(subscriptiondata?.userSubscription?.createdAt)}
        </p>
      </div>
      <div className="border-t p-6">
        <p className="text-[16px] font-[500] ">
          Your subscription will expire on{" "}
          {getDateFormat(subscriptiondata?.userSubscription?.endDate)}
        </p>
      </div>
    </div>
  );
};

export default EffectiveDate;

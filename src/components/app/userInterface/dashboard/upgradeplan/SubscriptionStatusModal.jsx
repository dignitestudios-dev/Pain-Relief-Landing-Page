import React from "react";
import { InfoCircle, SmallTick } from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";

const SubscriptionStatusModal = ({ onClick, heading, para }) => {
  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[470px] ">
        <div className="flex flex-col justify-center items-center  ">
          <div className="text-center flex my-4 flex-col justify-center items-center">
            <div className=" mb-5">
              <img src={SmallTick} className="w-[107px] " />
            </div>
            <p className="text-[24px] text-nowrap font-[600] capitalize">
              {heading}
            </p>
            <p className="text-[16px] mt-3 text-[#565656]">{para}</p>
          </div>
        </div>

        <Button text={"Continue"} onClick={onClick} />
      </div>
    </div>
  );
};

export default SubscriptionStatusModal;

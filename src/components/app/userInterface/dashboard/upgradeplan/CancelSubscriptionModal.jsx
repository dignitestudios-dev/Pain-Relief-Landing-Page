import React from "react";
import { InfoCircle } from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";

const CancelSubscriptionModal = ({ onClick ,onClose,loader}) => {
  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[470px] ">
        <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen ">
          <div className="text-center w-[330px] flex flex-col justify-center items-center">
            <div className=" mb-8">
              <img src={InfoCircle} className="w-[107px] " />
            </div>
            <p className="text-[24px] font-[600] capitalize">
              Cancel Subscription
            </p>
            <p className="text-[16px] text-[#565656]">
              Are you sure you want to cancel your subscription?
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 mt-4">
          <button className="w-[205px] h-[49px] rounded-[8px] bg-[#E0E0E0] text-[#565656] " onClick={onClose}>
            {" "}
            No, Keep it
          </button>
          <div className="w-[205px] ">
            <Button text={"Yes, Cancel Now"} onClick={onClick} loading={loader} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelSubscriptionModal;

import React from "react";
import { ErrorIcon, SmallTick } from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";

const RequestSentSuccess = ({ onClick }) => {
  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[470px] ">
        <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen ">
          <div className="text-center w-[330px] flex flex-col justify-center items-center">
            <div className=" mb-8">
              <img src={SmallTick} className="w-[107px] " />
            </div>
            <p className="text-[24px] font-[600] capitalize">
              Request Sent Successfully
            </p>
            <p className="text-[16px] text-[#565656] mb-5">
              You have sent the appointment request. Thank you for taking action
              promptly!
            </p>
          </div>
        </div>

        <Button text={"View Details"} onClick={onClick} />
      </div>
    </div>
  );
};

export default RequestSentSuccess;

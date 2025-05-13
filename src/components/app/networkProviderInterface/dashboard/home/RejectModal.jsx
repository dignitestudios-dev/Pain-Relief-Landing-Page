import React from "react";
import { ErrorIcon } from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";

const RejectModal = ({onClick}) => {
  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[470px] ">
        <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen ">
          <div className="text-center w-[330px] flex flex-col justify-center items-center">
            <div className=" mb-8">
              <img src={ErrorIcon} className="w-[107px] " />
            </div>
            <p className="text-[24px] font-[600] capitalize">Reject Request</p>
            <p className="text-[16px] text-[#565656]">
            Are you sure you want reject this request
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 mt-4">
          <button className="w-[205px] h-[49px] rounded-[8px] bg-[#E0E0E0] text-[#565656] ">
            {" "}
            Cancel
          </button>
          <div className="w-[205px] ">
            <Button text={"Reject"} onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectModal;

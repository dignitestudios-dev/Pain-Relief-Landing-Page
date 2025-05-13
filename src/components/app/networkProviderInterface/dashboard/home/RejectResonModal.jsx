import React from "react";
import Button from "../../../landingPage/Inputs/Button";
import { ErrorIcon } from "../../../../../assets/export";

const RejectResonModal = ({ onClick }) => {
  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[470px] ">
        <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen ">
          <div className="text-center w-[330px] flex flex-col justify-center items-center">
            <p className="text-[24px] font-[600] capitalize">Reject Request!</p>
          </div>
        </div>
        <div>
          <textarea
            name=""
            className="border mt-4 w-full border-[#D9D9D9] p-2 rounded-[8px]  "
            id=""
            rows={5}
            placeholder="Describe your pain, symptoms,"
          ></textarea>
        </div>
        <div className="flex justify-between gap-4 mt-4">
          <button className="w-[205px] h-[49px] rounded-[8px] bg-[#E0E0E0] text-[#565656] ">
            {" "}
           Not Now
          </button>
          <div className="w-[205px] ">
            <Button text={"Submit"} onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectResonModal;

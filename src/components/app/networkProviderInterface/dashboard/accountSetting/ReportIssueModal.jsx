import React from "react";
import { SmallTick } from "../../../../../assets/export";
import { RxCross2 } from "react-icons/rx";
const ReportIssueModal = ({ onClick }) => {
  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[470px] h-[337px]">
        <div className="flex justify-end items-center" onClick={onClick}>
          <div className="border  p-2">
            <RxCross2 />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen ">
          <div className="pb-4 text-center w-[330px] flex flex-col justify-center items-center">
            <div className=" mb-8">
              <img src={SmallTick} />
            </div>
            <p className="text-[24px] font-semibold capitalize">
              Report Summited
            </p>
            <p className="text-[16px] text-[#565656]">
              Your report has been sent successfully
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIssueModal;

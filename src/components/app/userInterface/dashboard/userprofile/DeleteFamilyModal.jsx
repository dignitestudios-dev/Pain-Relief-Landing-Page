import React from "react";
import { DustbinIcon } from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";


const DeleteFamilyModal = ({onClick,onClose,loading}) => {
  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[470px] ">
        <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen ">
          <div className="text-center  flex flex-col justify-center items-center">
            <div className=" mb-4">
              <img src={DustbinIcon} className="w-[107px] " />
            </div>
            <p className="text-[24px] font-[600] capitalize">
             Delete Family Member Account
            </p>
            <p className="text-[16px] mt-2 mb-4 text-[#565656]">
            Are you sure you want to Delete this Account
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4 mt-4">
          <button
            className="w-[205px] h-[49px] rounded-[8px] bg-[#E0E0E0] text-[#565656] "
            onClick={onClose}
          >
            {" "}
         Cancel
          </button>
          <div className="w-[205px] ">
            <Button text={"Delete Member"} onClick={onClick} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteFamilyModal;

import React from "react";
import { SmallTick } from "../assets/export";

const PasswordUpdatedModal = ({ isOpen }) => {
  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-10 z-50 flex items-center justify-center">
      <div className="bg-white bg-opacity-10 rounded-[26px] shadow-md p-8 w-[470px] h-[337px]">
        <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen ">
          <div className="pb-4 text-center w-[330px] flex flex-col justify-center items-center">
            <div className=" mb-8">
              <img src={SmallTick} />
            </div>
            <p className="text-[24px] font-bold capitalize">
              Password Updated!
            </p>
            <p className="text-[16px] text-[#565656]">
              Your password has been reset successfully
            </p>
          </div>

          <button
            onClick={() => isOpen(false)}
            className="bg-[#29ABE2] text-white w-[420px] h-[48px] rounded-[8px] mt-6"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordUpdatedModal;

import React, { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { OtpLogo, SideImg } from "../../../../assets/export";
import AuthInput from "../../../../components/app/userInterface/onboarding/AuthInput";
import PasswordUpdatedModal from "../../../../components/app/userInterface/onboarding/PasswordUpdatedModal";


const UpdatePassword = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center lg:h-auto h-screen">
        <div className="pb-4 text-center">
          <div className="w-[350px] flex justify-center mb-8">
            <img src={OtpLogo} className="w-[216px]" />
          </div>
          <p className="text-[32px] font-semibold capitalize">
            Set New Password{" "}
          </p>
          <p className="text-[16px] capitalize text-[#565656]">
            Enter new password to Continue
          </p>
        </div>

        <div className="space-y-4 lg:w-[350px] md:w-[550px] w-[320px]">
          <AuthInput
            text={" New Password"}
            placeholder={"New Password"}
            type={"password"}
            id={"password"}
            name={"password"}
            max
            Length={50}
          />
          <AuthInput
            text={" Confirm Password"}
            placeholder={"Confirm Password"}
            type={"password"}
            id={"cPassword"}
            name={"cPassword"}
            max
            Length={50}
          />
        </div>

        <button
          onClick={() => setIsModal(true)}
          className="bg-[#29ABE2] text-white lg:w-[350px] md:w-[550px] w-[320px] h-[48px] rounded-[8px] mt-6"
        >
          Send
        </button>
        <button
          type="button"
          className="w-full flex justify-center items-center gap-1 cursor-pointer mt-6"
        >
          <IoIosArrowDropleftCircle className="text-lg text-[#212121]" />
          <p className="text-[12px] uppercase font-bold leading-none tracking-wider text-[#212121] ">
            Back
          </p>
        </button>
      </div>
      {isModal && <PasswordUpdatedModal isOpen={setIsModal} />}
    </div>
  );
};

export default UpdatePassword;

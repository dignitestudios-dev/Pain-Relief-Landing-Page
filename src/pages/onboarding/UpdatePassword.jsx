import React, { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { OtpLogo, SideImg } from "../../assets/export";
import AuthInput from "../../components/onboarding/AuthInput";
import PasswordUpdatedModal from "../../components/onboarding/PasswordUpdatedModal";
import Button from "../../components/app/landingPage/Inputs/Button";

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

        <div className="xl:w-[350px] lg:w-[350px] md:w-[550px] w-full mt-6">
          <Button text="Save" onClick={() => setIsModal(true)} />
        </div>
      </div>
      {isModal && <PasswordUpdatedModal isOpen={setIsModal} />}
    </div>
  );
};

export default UpdatePassword;

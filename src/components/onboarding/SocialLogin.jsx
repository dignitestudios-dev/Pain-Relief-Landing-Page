import React from "react";
import { FaApple } from "react-icons/fa";
import { GoogleIcon } from "../../assets/export";

const SocialLogin = () => {
  return (
    <div className="justify-center lg:w-[350px] md:w-[550px] w-[340px] space-y-4 mt-6">
      <div
        className="flex justify-center items-center bg-white text-black font-medium text-[14px]
       text-center h-[48px]  rounded-[8px] border-[1px] border-[#D9D9D9] cursor-pointer"
      >
        <div>
          <img className="w-[20px] h-[20px] " alt="google" src={GoogleIcon} />
        </div>
        <div className="pl-4 text-[16px]">Continue With Google</div>
      </div>
      <div
        className="flex justify-center items-center bg-white text-black font-medium text-[14px]
       text-center h-[48px]  rounded-[8px] border-[1px] border-[#D9D9D9] cursor-pointer"
      >
        <div>
          <FaApple className="text-[26px]" />
        </div>
        <div className="pl-4 text-[16px]">Continue With Apple</div>
      </div>
    </div>
  );
};

export default SocialLogin;

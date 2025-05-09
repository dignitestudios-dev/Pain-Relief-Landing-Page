import React from "react";
import {
  OtpLogo,
  SideImg,
  SmallTick,
} from "../../../../painRelief/src/assets/export";

const SignUpSuccess = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center lg:h-auto h-screen ">
        <div className="pb-4 text-center w-[330px] flex flex-col justify-center items-center">
          <div className=" mb-8">
            <img src={SmallTick} />
          </div>
          <p className="text-[32px] font-semibold capitalize">
            Email Address Verified Successfully
          </p>
        </div>

        <button className="bg-[#29ABE2] text-white w-[350px] h-[48px] rounded-[8px] mt-6">
          Continue
        </button>
      </div>
    </div>
  );
};

export default SignUpSuccess;

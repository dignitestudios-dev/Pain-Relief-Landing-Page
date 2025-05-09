import React from "react";
import {
  Logo,
  NetworkProvider,
  SideImg,
  SmallTick,
  User,
} from "../../../../painRelief/src/assets/export";
import AuthInput from "../../../../components/app/userInterface/onboarding/AuthInput";
import SelectField from "../../../../components/app/userInterface/onboarding/SelectField";
import SocialLogin from "../../../../components/app/userInterface/onboarding/SocialLogin";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const SignUpRequest = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen">
        <div className="pb-4 text-center">
          <div>
            <img src={Logo} />
          </div>
          <p className="text-[26px] font-semibold capitalize">
            Pain Relief USA
          </p>
          <p className="text-[14px] capitalize text-[#565656]">
            pain Relief made easy
          </p>
        </div>
        <div className="py-4">
          <p className="text-[32px] font-semibold capitalize">
            Create Account Request
          </p>
        </div>

        <div className="space-y-4 lg:w-[350px] md:w-[550px] sm:w-[320px]">
          <SelectField icon={User} text="I'm a member" tick={SmallTick} />
          <SelectField
            icon={NetworkProvider}
            text="I’m a service provider "
            tick={SmallTick}
          />
        </div>

        <button className="bg-[#29ABE2] text-white w-[350px] h-[48px] rounded-xl mt-6">
          Continue
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
    </div>
  );
};

export default SignUpRequest;

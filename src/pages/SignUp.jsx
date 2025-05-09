import React from "react";
import {
  Logo,
  NetworkProvider,
  SideImg,
  SmallTick,
  User,
} from "../assets/export";
import AuthInput from "../components/AuthInput";
import SelectField from "../components/SelectField";
import SocialLogin from "../components/SocialLogin";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const SignUp = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen">
        <div className="pb-4 text-center">
          <p className="text-[32px] font-bold capitalize">Sign Up</p>
          <p className="text-[16px] text-[#565656]">
            Please enter details to continue
          </p>
        </div>

        <div className="space-y-4 lg:w-[350px] md:w-[550px] w-[340px]">
          <div className="grid grid-cols-2 justify-between  gap-2">
            <AuthInput
              text={"First Name"}
              placeholder={"First Name"}
              type={"text"}
              id={"fname"}
              name={"fname"}
              maxLength={50}
            />
            <AuthInput
              text={"Last Name"}
              placeholder={"Last Name"}
              type={"text"}
              id={"lname"}
              name={"lname"}
              maxLength={50}
            />
          </div>
          <AuthInput
            text={"Email Address"}
            placeholder={"Email Address"}
            type={"email"}
            id={"email"}
            name={"email"}
            maxLength={50}
          />
          <AuthInput
            text={"Mobile Number"}
            placeholder={"Mobile Number"}
            type={"text"}
            id={"number"}
            name={"number"}
            maxLength={50}
          />
          <AuthInput
            text={" Password"}
            placeholder={"Password"}
            type={"password"}
            id={"password"}
            name={"password"}
            max
            Length={50}
          />
          <AuthInput
            text={"Confirm Password"}
            placeholder={"Confirm Password"}
            type={"password"}
            id={"cPassword"}
            name={"cPassword"}
            max
            Length={50}
          />
        </div>

        <button className="bg-[#29ABE2] text-white lg:w-[350px] md:w-[550px] w-[340px] h-[48px] rounded-xl mt-6">
          Sign Up
        </button>
        <div className="flex items-center mt-8 lg:w-[350px] md:w-[550px] w-[340px]">
          <hr className="w-full border-t border-[#D9D9D9]" />
          <p className="px-2 text-[#D9D9D9]">OR</p>
          <hr className="w-full border-t border-[#D9D9D9]" />
        </div>
        <SocialLogin />
        <div className="flex items-center justify-center gap-2 mt-4 mb-3 relative z-10">
          <p className="text-center text-[16px] leading-[21.6px] text-[#181818]">
            Don’t have an account?
            <span className="text-[#29ABE2] font-medium pl-1">Sign In</span>
          </p>
        </div>
        <button
          type="button"
          className="w-full flex justify-center items-center gap-1 cursor-pointer"
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

export default SignUp;

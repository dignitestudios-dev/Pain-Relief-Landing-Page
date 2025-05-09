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

const Login = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center h-auto">
        <div className="pb-4 text-center">
          <div>
            <img src={Logo} />
          </div>
          <p className="text-[26px] font-bold capitalize">Pain Relief USA</p>
          <p className="text-[14px] capitalize text-[#565656]">
            pain Relief made easy
          </p>
        </div>
        <div className="py-4">
          <p className="text-[32px] font-bold capitalize">Welcome Back</p>
          <p className="text-[16px] text-light capitalize text-[#565656]">
            Please enter details to continue
          </p>
        </div>

        <div className="space-y-4 lg:w-[350px] md:w-[550px] w-[320px]">
          <div className=" flex justify-between gap-2">
            <SelectField icon={User} text="I'm a member" tick={SmallTick} />
            <SelectField
              icon={NetworkProvider}
              text="I’m a service provider "
              tick={SmallTick}
            />
          </div>

          <AuthInput
            text={"Email address"}
            placeholder={"Enter email here"}
            type={"email"}
            id={"email"}
            name={"email"}
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
        </div>
        <div className="flex justify-end lg:w-[350px] md:w-[550px] w-[320px]">
          <p
            type="button"
            className="text-[#181818] text-[12px] font-[500] pt-1 cursor-pointer"
          >
            Forgot password?
          </p>
        </div>
        <button className="bg-[#29ABE2] text-white lg:w-[350px] md:w-[550px] w-[320px] h-[48px] rounded-xl mt-6">
          Login
        </button>
        <div className="flex items-center mt-8 lg:w-[350px] md:w-[550px] w-[320px]">
          <hr className="w-full border-t border-[#D9D9D9]" />
          <p className="px-2 text-[#D9D9D9]">OR</p>
          <hr className="w-full border-t border-[#D9D9D9]" />
        </div>
        <SocialLogin />
        <div className="flex items-center justify-center gap-2  mt-4 mb-3 relative z-10">
          <p className="text-center text-[16px] leading-[21.6px] text-[#181818]">
            Don’t have an account?
            <span className="text-[#29ABE2] font-medium pl-1">Sign Up</span>
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

export default Login;

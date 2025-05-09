import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import {
  Logo,
  NetworkProvider,
  SideImg,
  SmallTick,
  User,
  UserWhite,
} from "../../../../assets/export";
import SocialLogin from "../../../../components/app/userInterface/onboarding/SocialLogin";
import AuthInput from "../../../../components/app/userInterface/onboarding/AuthInput";
import SelectableField from "../../../../components/app/userInterface/onboarding/SelectableField";
import SelectField from "../../../../components/app/userInterface/onboarding/SelectField";
import { useNavigate } from "react-router";
import Button from "../../../../components/app/landingPage/Inputs/Button";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full bg-[#fcfcfc]">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center h-auto">
        <div className="my-4 text-center">
          <div className="w-[158px] h-[158px]">
            <img src={Logo} />
          </div>
          <p className="text-[26px] mt-2  font-semibold capitalize">
            Pain Relief USA
          </p>
          <p className="text-[14px] font-[500] capitalize text-[#565656]">
            pain Relief made easy
          </p>
        </div>
        <div className="py-4">
          <p className="text-[32px] font-[600] capitalize">Welcome Back</p>
          <p className="text-[16px]  capitalize text-[#565656]">
            Please enter details to continue
          </p>
        </div>

        <div className="space-y-4 lg:w-[350px] md:w-[550px] w-[320px]">
          <div className=" flex justify-between gap-2">
            <SelectField icon={UserWhite} text="I'm a member" tick={SmallTick} />
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
        <div className="flex my-2 justify-end lg:w-[350px] md:w-[550px] w-[320px]">
          <p
            type="button"
            className="text-[#181818] text-[12px] font-[500] pt-1 cursor-pointer"
            onClick={() => navigate("/auth/forget-password")}
          >
            Forgot password?
          </p>
        </div>
        <div className="w-[350px] mt-3 mb-4">
          <Button text={"Login"} />
        </div>
        <div className="flex items-center  lg:w-[350px] md:w-[550px] w-[320px]">
          <hr className="w-full border-t border-[#D9D9D9]" />
          <p className="px-2 text-[#D9D9D9]">OR</p>
          <hr className="w-full border-t border-[#D9D9D9]" />
        </div>
        <SocialLogin />
        <div className="flex items-center justify-center gap-2 my-6  ">
          <p className="text-center text-[16px] leading-[21.6px] text-[#181818]">
            Don’t have an account?
            <span
              className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent font-medium pl-1 cursor-pointer "
              onClick={() => navigate("/auth/sign-up")}
            >
              Sign Up
            </span>
          </p>
        </div>
        <button
          type="button"
          className="w-full flex justify-center  items-center gap-1 cursor-pointer"
          onClick={() => navigate(-1)}
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

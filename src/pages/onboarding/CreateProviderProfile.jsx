import React from "react";
import { SideImg, UserProfile } from "../../assets/export";
import InputField from "../../components/onboarding/InputField";
import Button from "../../components/app/landingPage/Inputs/Button";
import { useNavigate } from "react-router";

const CreateProviderProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen">
        <div className="pb-4 text-center xl:w-[500px] lg:w-[400px] md:w-[500px] w-[400px]">
          <p className="text-[32px] font-semibold capitalize">
            Create Account Request
          </p>
          <p className="text-[16px] text-[#565656] font-medium">
            Please complete details to access all features
          </p>
        </div>
        <div className="flex items-center xl:w-[500px] lg:w-[400px] md:w-[500px] w-[320px]">
          <div className="md:w-[80px] w-[60px] md:h-[80px] h-[60px]">
            <img src={UserProfile} />
          </div>
          <div className="pl-2">
            <p className="text-[#BEC2C9]">
              <span className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
                Upload a file
              </span>{" "}
              or drag and drop PNG, JPG up to 10mb
            </p>
          </div>
        </div>

        <div className="py-4 xl:w-[500px] lg:w-[400px] md:w-[600px]">
          <p className="text-[24px] font-semibold capitalize">Basic Details</p>
        </div>

        <div className="space-y-4 xl:w-[500px] lg:w-[400px] md:w-[600px] w-[350px]">
          <div className="grid grid-cols-2 gap-3">
            <InputField
              text={"Name of Service Provider"}
              placeholder={"First Name"}
              type={"text"}
              id={"fname"}
              name={"fname"}
              maxLength={50}
            />
            <InputField
              text={"Name of Clinic/Practice (required)"}
              placeholder={"Last Name"}
              type={"text"}
              id={"lname"}
              name={"lname"}
              maxLength={50}
            />

            <InputField
              text={"Email Address (required)"}
              placeholder={"Email Address"}
              type={"email"}
              id={"email"}
              name={"email"}
              maxLength={50}
            />
            <InputField
              text={"Mobile Number (required)"}
              placeholder={"Mobile Number"}
              type={"text"}
              id={"number"}
              name={"number"}
              maxLength={50}
            />
          </div>
          <InputField
            text={"Provider Individual NPI (required)"}
            placeholder={"Enter you provider "}
            type={"text"}
            id={"number"}
            name={"number"}
            maxLength={50}
          />
          <InputField
            text={"Website"}
            placeholder={"URL"}
            type={"text"}
            id={"number"}
            name={"number"}
            maxLength={50}
          />
          <div>
            <label className="text-[12px] text-[#121516] font-medium">
              Description (Required)
            </label>
            <textarea
              name=""
              placeholder="Describe your self"
              className="xl:w-[500px] border border-[#BEC2C9] rounded-[8px] p-2 "
              rows={5}
              cols={10}
              id=""
            ></textarea>
          </div>
          <div className="flex  justify-end">
            <div className="w-[128px]">
              <Button
                text={"Next"}
                onClick={() => navigate("/auth/create-account-request")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProviderProfile;

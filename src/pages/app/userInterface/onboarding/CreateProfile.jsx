import React from "react";
import {
  Logo,
  MapImg,
  NetworkProvider,
  SideImg,
  SmallTick,
  User,
  UserProfile,
} from "../../../../painRelief/src/assets/export";

import InputField from "../../../../components/app/userInterface/onboarding/InputField";

const CreateProfile = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen">
        <div className="pb-4 text-center xl:w-[500px] lg:w-[400px] md:w-[500px] w-[400px]">
          <p className="text-[32px] font-semibold capitalize">
            Complete Profile Details
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
              <span className="text-[#55C9FA]">Upload a file</span> or drag and
              drop PNG, JPG up to 10mb
            </p>
          </div>
        </div>

        <div className="py-4 xl:w-[500px] lg:w-[400px] md:w-[600px]">
          <p className="text-[24px] font-semibold capitalize">Basic Details</p>
        </div>

        <div className="space-y-4 xl:w-[500px] lg:w-[400px] md:w-[600px] w-[350px]">
          <div className="grid grid-cols-2 gap-3">
            <InputField
              text={"First Name (required)"}
              placeholder={"First Name"}
              type={"text"}
              id={"fname"}
              name={"fname"}
              maxLength={50}
            />
            <InputField
              text={"Last Name"}
              placeholder={"Last Name"}
              type={"text"}
              id={"lname"}
              name={"lname"}
              maxLength={50}
            />

            <InputField
              text={"Email Address"}
              placeholder={"Email Address"}
              type={"email"}
              id={"email"}
              name={"email"}
              maxLength={50}
            />
            <InputField
              text={"Mobile Number"}
              placeholder={"Mobile Number"}
              type={"text"}
              id={"number"}
              name={"number"}
              maxLength={50}
            />
          </div>

          <InputField
            text={"Home address (required)"}
            placeholder={"Enter your street, city, state, zip?"}
            type={"text"}
            id={"number"}
            name={"number"}
            maxLength={50}
          />
          <div>
            <img src={MapImg} className="rounded-md" />
          </div>
          <div className="flex justify-end">
            <button className="bg-[#29ABE2] text-white w-[128px] h-[48px] rounded-xl mt-2">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;

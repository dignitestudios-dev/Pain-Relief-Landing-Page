import React, { useRef } from "react";
import { MapImg, ProfileImg } from "../../../../../assets/export";
import InputField from "../../../../onboarding/InputField";
import Button from "../../../landingPage/Inputs/Button";
import { IoIosArrowBack } from "react-icons/io";
import SelectableField from "../../../../onboarding/SelectableField";

const EditForm = () => {
  const fileInputRef = useRef(null);

  const ServiceSpecialityOptions = [
    "Chiropractic Care",
    "Massage Therapy Care",
    "Acupuncture Care",
    "Diet/Wellness Services",
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // handle image upload or preview here
      console.log("Selected image:", file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full md:w-[50%]">
        <h2 className="text-center font-[600] xl:text-[32px] lg:text-[24px] md:text-[20px] text-[18px]">
          Edit Profile
        </h2>
        <p className="text-[16px] text-[#565656] text-center">
          Please complete details to access all features
        </p>
      </div>

      <form className="w-full md:w-[50%] mt-4">
        {/* Profile Image Upload */}
        <div className="flex items-center gap-4 mb-4">
          <label
            htmlFor="profileUpload"
            className="cursor-pointer bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] p-[3px] rounded-full"
          >
            <img
              src={ProfileImg}
              alt="Avatar"
              className="w-16 h-16 rounded-full bg-white object-cover"
            />
            <input
              type="file"
              id="profileUpload"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <h2 className="text-[16px] font-[500]">Change Profile</h2>
        </div>

        {/* Responsive Grid Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputField placeholder="John" text="Name of Chiropractor" />
          <InputField
            placeholder="Doe"
            text="Name of Clinic/Practice (required)"
          />
          <InputField
            placeholder="olivia.james@gmail.com"
            text="Email Address (required)"
          />
          <InputField
            placeholder="+000 0000 00"
            text="Mobile Number (required)"
          />
          <InputField
            placeholder="Enter your NPI"
            text="Provider Individual NPI (required)"
          />
          <SelectableField
            label="Specialty Services"
            placeholder="Select"
            options={ServiceSpecialityOptions}
          />
        </div>

        <div className="mt-4">
          <InputField placeholder="URL" text="Website" />
        </div>

        <div className="mt-4">
          <InputField
            placeholder="Enter your street, city, state, zip?"
            text="Primary Clinic Location"
          />
        </div>

        <div className="mt-3">
          <img src={MapImg} className="h-[108px] w-full object-cover" alt="Map" />
        </div>

        <div className="mt-4">
          <label className="text-[12px] text-[#121516] font-medium">
            Description
          </label>
          <textarea
            rows={5}
            className="w-full rounded-[8px] bg-transparent border border-[#BEC2C9] p-2 mt-1"
            placeholder="Describe yourself"
          ></textarea>
        </div>

        <div className="my-5">
          <Button text="Save" />
          <div className="flex items-center justify-center mt-4">
            <IoIosArrowBack />
            <button className="text-[16px] font-[600] ml-2">Back</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;

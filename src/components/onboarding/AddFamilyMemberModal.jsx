import React from "react";
import { UserProfile } from "../../../../painRelief/src/assets/export";
import InputField from "./InputField";
import SelectableField from "./SelectableField";

const AddFamilyMemberModal = ({ setIsModal, setIsMemberAdded }) => {
  const subjectOptions = ["Brother", "Sister", "Father"];
  const genderOptions = [
    "Male",
    "Female",
    "Non-binary",
    "Transgender",
    "Genderqueer",
    "Agender",
    "Two-Spirit",
    "Prefer not to say",
    "Other",
  ];

  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-10 z-50 flex items-center justify-center p-1">
      <div
        className="bg-white overflow-y-auto overflow-x-hidden bg-opacity-10 rounded-[18px] shadow-md p-6 
      lg:w-[900px] md:w-[600px] w-full lg:h-[625px] h-[725px]"
      >
        <div className="flex justify-between items-center pb-4 border-b-[1px] border-b-gray-200">
          <p className="text-[24px] font-semibold">Add New Family Members</p>
          <span
            onClick={() => setIsModal(false)}
            className="cursor-pointer border-[1px] border-gray-300 rounded-sm p-[2px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 font-light text-gray-500 hover:text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05A1 1 0 015.05 3.636L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="flex items-center w-[500px] pt-4">
          <div className="w-[80px] h-[80px]">
            <img src={UserProfile} />
          </div>
          <div className="pl-3">
            <p className="text-[#55C9FA] underline">Upload Picture</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 pt-4 space-y-3">
          <InputField
            text={"Full Name (required)"}
            placeholder={"First Name"}
            type={"text"}
            id={"fname"}
            name={"fname"}
            maxLength={50}
          />
          <InputField
            text={"Date of Birth (required)"}
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
          <SelectableField
            label="Gender (required)"
            placeholder="Select"
            options={genderOptions}
          />
          <InputField
            text={"Phone Number"}
            placeholder={"Mobile Number"}
            type={"text"}
            id={"number"}
            name={"number"}
            maxLength={50}
          />

          <div>
            <textarea
              placeholder="Description"
              className="border border-[#D9D9D9] focus:outline-none focus:ring-2 placeholder:text-[#565656]
               focus:ring-blue-300 w-full rounded-[12px] p-4 text-[16px]"
              id=""
              rows={10}
            ></textarea>
          </div>

          <SelectableField
            label="Relation (required)"
            placeholder="Select"
            options={subjectOptions}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              setIsMemberAdded(true);
              setIsModal(false);
            }}
            className="cursor-pointer bg-[#29ABE2] text-white w-[228px] h-[48px] rounded-[8px] mt-2 "
          >
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFamilyMemberModal;

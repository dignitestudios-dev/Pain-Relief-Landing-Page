import React from "react";
import { InputsDark } from "../Inputs/Inputs";
import { DropDownDark } from "../Inputs/DropDown";
import Button from "../Inputs/Button";

const FilterSection = ({ setShowFilter }) => {
  return (
    <div className="bg-white h-full md:h-[618px] p-4 rounded-[8px] w-full md:w-auto">
      <h2 className="text-[24px] font-[600] border-b border-b-[#8B8B8B5E] pb-3">
        Filter
      </h2>
      <div className="space-y-3 my-4">
        <InputsDark
          placeholder={"Dallas, TX – 802 PainEase Plaza"}
          label={"Therapist Last Name "}
        />
        <InputsDark
          placeholder={"Practice Name"}
          label={"Dallas, TX – 802 PainEase Plaza "}
        />
        <DropDownDark placeholder={"Select "} label={"Therapy Type"} />
        <InputsDark
          placeholder={"Zip Code"}
          label={"Dallas, TX – 802 PainEase Plaza"}
        />
        <DropDownDark placeholder={"Select "} label={"Distance From Zip"} />
        <div className="flex justify-center items-center gap-4 text-[#565656] font-[500] ">
          <button
            onClick={() => setShowFilter(false)}
            className="bg-[#E0E0E0] rounded-[8px] h-[49px] w-[150px]"
          >
            Clear
          </button>
          <div className="w-[150px]">
            <Button text={"Apply"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

import React from "react";
import { Inputs } from "../Inputs/Inputs";
import { DropDown } from "../Inputs/DropDown";

const HeroSection = ({ setShowFilter, showFilter }) => {
  const ZipCode = ["1", "2", "3"];
  const TherapyOptions = [
    "Physical Therapy",
    "Chiropractic",
    "Acupuncture",
    "Massage",
  ];

  return (
    <div>
      {" "}
      <div className="lg:h-[550px]   ">
        <div className="bg-hero  text-white">
          <div className="flex flex-col   justify-center lg:items-center py-40 min-h-screen w-[90%] mx-auto">
            <div className="text-center ">
              <h2 className="text-3xl md:text-5xl lg:text-[64px] font-semibold leading-tight">
                Search for Pain Relief Professionals
              </h2>
              <p className="lg:text-[24px] mt-3 md:text-[18px] tex-[16px] font-[500]   ">
                Explore certified professionals near you, specializing in
                various providers treatments.
              </p>
            </div>
            {!showFilter && (
              <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 items-center gap-4 mt-4  ">
                <Inputs
                  label={"Therapist Last Name "}
                  type={"text"}
                  placeholder={"Enter therapist name"}
                />
                <Inputs
                  label={"Practice Name "}
                  type={"text"}
                  placeholder={"Enter practice name"}
                />
                <DropDown
                  label={"Therapy Type"}
                  placeholder={"Select "}
                  options={TherapyOptions}
                />
                <Inputs
                  label={"Zip Code "}
                  type={"text"}
                  placeholder={"Enter zip Code"}
                />

                <DropDown
                  label="Distance From Zip"
                  options={ZipCode}
                  placeholder={"Select Miles"}
                />
                <button
                  onClick={() => setShowFilter(true)}
                  className="borde h-[49px] w-[135.27px] mt-6 text-[#63CFAC] bg-white rounded-md"
                >
                  Find Therapist
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

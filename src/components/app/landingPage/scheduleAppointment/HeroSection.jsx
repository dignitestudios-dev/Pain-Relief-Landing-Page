import React, { useState } from "react";
import { Inputs } from "../Inputs/Inputs";
import { DropDown } from "../Inputs/DropDown";

const HeroSection = ({
  setFilter,
  filters,
  therapyTypes,
  services,
  radius,
  handleSelect,
  handleDistance,
  radiusOptions,
  isTrue,
  handleFetchProvider,
  loader,
}) => {
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
            {!isTrue && (
              <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 items-center gap-4 mt-4  ">
                <Inputs
                  label={"Therapist Last Name "}
                  type={"text"}
                  placeholder={"Enter therapist name"}
                  value={filters?.therapistName}
                  onChange={(e) =>
                    setFilter((prev) => ({
                      ...prev,
                      therapistName: e.target.value,
                    }))
                  }
                />
                <Inputs
                  label={"Practice Name "}
                  type={"text"}
                  placeholder={"Enter practice name"}
                  value={filters?.practiceName}
                  onChange={(e) =>
                    setFilter((prev) => ({
                      ...prev,
                      practiceName: e.target.value,
                    }))
                  }
                />
                <DropDown
                  label={"Therapy Type"}
                  placeholder={"All "}
                  options={therapyTypes}
                  value={services}
                  onChange={handleSelect}
                  loader={loader}
                />
                <Inputs
                  label={"Zip Code "}
                  type={"text"}
                  placeholder={"Enter zip Code"}
                  value={filters?.zipCode}
                  onChange={(e) =>
                    setFilter((prev) => ({
                      ...prev,
                      zipCode: e.target.value,
                    }))
                  }
                />

                <DropDown
                  label="Distance From Zip"
                  placeholder={"Select Miles"}
                  options={radiusOptions}
                  value={radius}
                  onChange={handleDistance}
                />
                <button
                  onClick={handleFetchProvider}
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

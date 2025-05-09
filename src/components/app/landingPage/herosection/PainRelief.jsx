import React from "react";
import { InputsDark } from "../Inputs/Inputs";
import { DropDownDark } from "../Inputs/DropDown";
import Button from "../Inputs/Button";
import Carousel from "./Carousel";

const PainRelief = () => {
  return (
    <div className="bg-[#EAF7FB] flex flex-col items-center justify-center  lg:h-[740px] h-auto mt-10 ">
      <div className="w-[90%] mt-4">
        <div>
          <h2 className="xl:text-[50px] lg:text-[45px] md:text[35px] text-[22px]  font-[600] text-center ">
            Search for Pain Relief Professionals
          </h2>
          <p className="text-center xl:text-[18px] lg:text-[16px] md:text-[14px] text-[14px] font-[400] text-[#565656] ">
            Explore certified professionals near you, specializing in various
            providers treatments.
          </p>
        </div>
        <div className="grid xl:grid-cols-6  lg:grid-cols-4 md:grid-cols-3 grid-cols-1 items-center gap-4 mt-10  ">
          <InputsDark
            label={"Therapist Last Name "}
            type={"text"}
            placeholder={"Enter therapist name"}
          />
          <InputsDark
            label={"Practice Name "}
            type={"text"}
            placeholder={"Enter practice name"}
          />
          <DropDownDark
            label={"Therapy Type"}
            placeholder={"Select "}
            // options={TherapyOptions}
          />
          <InputsDark
            label={"Zip Code "}
            type={"text"}
            placeholder={"Enter zip Code"}
          />

          <DropDownDark
            label="Distance From Zip"
            // options={ZipCode}
            placeholder={"Select Miles"}
          />
          <div className="mt-7 w-[164px] ">
            <Button text={"Find Therapist"} />
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default PainRelief;

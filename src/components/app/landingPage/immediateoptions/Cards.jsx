import React from "react";
import {
  AppoitmentCard,
  ChossePlanCard,
  PainCard,
} from "../../../../assets/export";
import Button from "../Inputs/Button";

const Cards = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[80%] ">
        <h2 className="lg:text-[50px] md:text-[35px] text-[28px] font-semibold capitalize mt-4  xl:text-start text-center">
          Getting Started is{" "}
          <span className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
            simple and easy
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-14 mt-8">
          {[ChossePlanCard, AppoitmentCard, PainCard].map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[30%] flex justify-center"
            >
              <img
                src={item}
                alt=""
                className="w-full h-auto max-w-[538px] object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="xl:w-[249px] lg:w-[200px] md:w-[150px] w-[140px] mb-10">
            <Button text={"Get Started Now"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[550px]">
      <div className="bg-flexible-hero  text-white">
        <div className="flex   justify-center lg:items-center py-40 min-h-screen w-[60%] mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-semibold leading-[50px] ">
              Pain Relief Coach
            </h2>
            <div className="flex  justify-center items-center mt-3">
              <p className="lg:text-[24px] md:text-[18px] tex-[16px] font-[500]  lg:w-[80%] ">
              Your personal certified health care coach dedicated to finding pain relief for Premium members
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

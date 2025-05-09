import React from "react";
import Cards from "./Cards";

const HeroSection = () => {
  return (
    <div>
      <div className="h-[550px]">
        <div className="bg-flexible-hero  text-white">
          <div className="flex   justify-center lg:items-center py-40 min-h-screen w-[60%] mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl lg:text-[64px] font-semibold leading-[50px] ">
                Flexible Memberships to Meet Your Needs
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

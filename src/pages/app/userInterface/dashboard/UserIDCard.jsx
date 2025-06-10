import React from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/idcards/HeroSection";
import IDCards from "../../../../components/app/userInterface/dashboard/idcards/IDCards";

const UserIDCard = () => {
  return (
    <>
      <HeroSection />
      <div className="flex justify-center relative bottom-40 ">
        <div className="w-[90%]">
          <IDCards />
        </div>
      </div>
    </>
  );
};

export default UserIDCard;

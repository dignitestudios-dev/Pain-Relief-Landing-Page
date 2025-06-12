import React, { useContext } from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/membership/HeroSection";
import DetailsSection from "../../../../components/app/userInterface/dashboard/membership/DetailsSection";
import { AppContext } from "../../../../context/AppContext";

const MemberShip = () => {
  const {userData}=useContext(AppContext)
  return (
    <div>
      <HeroSection userData={userData} />
      <DetailsSection userData={userData} />
    </div>
  );
};

export default MemberShip;

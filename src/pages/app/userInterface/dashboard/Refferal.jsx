import React from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/refferal/HeroSection";
import ReferralTable from "../../../../components/app/userInterface/dashboard/refferal/ReferralTable";

const Refferal = () => {
  return (
    <div>
      <HeroSection />
      <div className="w-[90%] relative bottom-40  mx-auto mt-10">
        <ReferralTable />
      </div>
    </div>
  );
};

export default Refferal;

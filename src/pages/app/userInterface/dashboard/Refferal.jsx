import React from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/refferal/HeroSection";
import ReferralTable from "../../../../components/app/userInterface/dashboard/refferal/ReferralTable";
import { useUserProfile } from "../../../../hooks/api/Get";

const Refferal = () => {
  const { data: tableData, loading: tableloader } = useUserProfile(
    "/user/get-refferal-users"
  );
  return (
    <div>
      <HeroSection />
      <div className="w-[90%] relative bottom-40  mx-auto mt-10">
        <ReferralTable tableData={tableData} tableloader={tableloader} />
      </div>
    </div>
  );
};

export default Refferal;

import React, { useState } from "react";
import ClinicProfile from "../../../landingPage/providerdetail/ClinicProfile";
import SubscriptionCards from "../../../landingPage/herosection/SubscriptionCards";
import CareCosts from "../../../landingPage/providerdetail/CareCosts";
import MapSection from "../../../landingPage/providerdetail/MapSection";
import MedicalLicense from "./MedicalLicense";
import ReferralTable from "./ReferralTable";

const ProfileDetailSection = () => {
  const [tabActive, setTabActive] = useState("Provider Detail");
  const tabs = ["Provider Detail", "Medical License", "Referral Friends"];

  return (
    <div className="flex flex-col xl:px-20 lg:px-14  md:px-10 px-8 mb-10">
      <div className="xl:w-[60%] w-[100%]   md:mt-4">
        <div className="bg-white  rounded-[8px] p-3 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 flex-wrap">
          {tabs.map((item, index) => (
            <button
              key={index}
              onClick={() => setTabActive(item)}
              className={`rounded-[8px] h-[50px]  px-8 xl:text-[18px] lg:text-[16px] font-[500] ${
                tabActive === item
                  ? "bg-gradient-to-l to-[#63CFAC]  from-[#29ABE2] text-white"
                  : "bg-white text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {tabActive === "Provider Detail" && <ClinicProfile />}
      {tabActive === "Medical License" && <MedicalLicense />}
      {tabActive === "Referral Friends" && <ReferralTable />}
    </div>
  );
};

export default ProfileDetailSection;

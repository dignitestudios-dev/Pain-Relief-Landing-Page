import React, { useState } from "react";
import MemberDetails from "./MemberDetails";
import EffectiveDate from "./EffectiveDate";
import MemberShipAgreement from "./MemberShipAgreement";
import IDCardsSection from "./IDCardsSection";

const DetailsSection = () => {
  const [tabActive, setTabActive] = useState("Membership Details");
  const tabs = [
    "Membership Details",
    "Effective Date",
    "ID Card",
    "Member Agreement",
  ];
  return (
    <div className="flex flex-col mt-4 xl:px-20 lg:px-14  md:px-10 px-8 mb-10 ">
      <div className="w-[85%]">
        <div className="xl:w-[70%] w-[100%]   md:mt-4">
          <div className="bg-white rounded-[8px] p-3 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2  flex-wrap">
            {tabs.map((item, index) => (
              <button
                key={index}
                onClick={() => setTabActive(item)}
                className={`rounded-[8px] h-[50px]   xl:text-[18px] lg:text-[16px] font-[500] ${
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
      </div>
        {tabActive === "Membership Details" && <MemberDetails />}
        {tabActive === "Effective Date" && ( <EffectiveDate />)}
        {tabActive === "ID Card" && ( <IDCardsSection />)}
        {tabActive === "Member Agreement" && ( <MemberShipAgreement />)}
    </div>
  );
};

export default DetailsSection;

import React, { useState } from "react";
import ClinicProfile from "./ClinicProfile";
import SubscriptionCards from "../herosection/SubscriptionCards";
import CareCosts from "./CareCosts";
import MapSection from "./MapSection";

const DetailSection = ({providerDetail,loading}) => {
  const [tabActive, setTabActive] = useState("Provider Detail");
  const tabs = [
    "Provider Detail",
    "Membership Plans",
    "Care Costs",
    "Contact & Map",
  ];

  return (
    <div className="flex flex-col xl:px-20 lg:px-14  md:px-10 px-8 mb-10">
      <div className="xl:w-[80%] w-[100%]   md:mt-4">
        <div className="bg-white rounded-[8px] p-3 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-4 flex-wrap">
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
      {tabActive === "Provider Detail" && <ClinicProfile providerDetail={providerDetail} loading={loading} />}
      {tabActive === "Membership Plans" && (
        <div className="xl:w-[90%] w-[100%] ">
          <SubscriptionCards />
        </div>
      )}
      {tabActive === "Care Costs" && <CareCosts />}
      {tabActive === "Contact & Map" && <MapSection />}
    </div>
  );
};

export default DetailSection;

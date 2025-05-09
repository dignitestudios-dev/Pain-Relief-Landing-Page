import React from "react";
import { CrossIcon, TickWhite } from "../../../../assets/export";

const ComprehensiveCare = () => {
  const features = [
    "No referrals from primary care or specialist",
    "No Deductible",
    "Access to Digital Network",
    "No Waiting Period",
    "No pre-existing limitations",
    "No Claim Forms",
    "No Limit on Utilization",
  ];
  return (
    <div>
      <div className="xl:w-[90%] w-full mx-auto flex flex-col p-12 ">
        <h2 className="lg:text-[50px] md:text-[35px] text-[35px] font-[600] text-black ">
          Simple, comprehensive{" "}
          <span className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">Pain Relief Care</span>{" "}
        </h2>
        <p className="xl:text-[16px]  text-[14px] font-[400] text-[#565656] ">
          Your Pain Relief USA membership includes several options for access to
          pain relief professionals. Our membership programs offers a holistic
          approach to healthcare with no gatekeeper or program limits, high
          quality credentialled network, and at-home support for your entire
          family.
        </p>
        <div className="  w-full flex justify-end pt-20 gap-36 px-5 ">
          <div className="bg-[#47BEC733] xl:w-[451px] flex  justify-between rounded-t-[10px] p-3">
            <p className="text-[14px] font-[500] ">Standard Insurance</p>
            <p className="text-[14px] font-[500]">Pain Relief USA</p>
          </div>
        </div>
        <div className=" bg-white shadow-2xl  px-2 rounded-2xl">
          {features.map((features, indx) => (
            <div
              className="flex flex-wrap  items-center xl:justify-between  lg:justify-between md:justify-between justify-center  border-b xl:h-[77px] h-auto border-b-[#D4D4D4]  "
              key={indx}
            >
              <div className="p-6">
                <p> {features}</p>
              </div>
              <div className="flex items-center justify-start px-4 gap-40">
                <div>
                  <img src={CrossIcon} className="xl:w-[19px] xl:h-[19px] w-[12px] h-[12px] " alt="" />
                </div>
                <div className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] xl:h-[76.2px] xl:py-6 xl:px-9 lg:p-5 md:p-4 p-2  ">
                  <img
                    src={TickWhite}
                    className="w-[19px] h-[19px]  object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveCare;

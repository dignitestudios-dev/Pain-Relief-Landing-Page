import React from "react";
import { PremiumData } from "../../../../static/MemberCards";
import { TickBlue } from "../../../../assets/export";

const MemeberContent = () => {
  return (
    <section id="membership-section">
      <h2 className="lg:text-[24px] md:text-[18px] text-[16px] font-semibold capitalize mt-4 text-start  ">
        Membership Options
      </h2>
      <p className="text-[#565656] lg:text-[16px] md:text-[14px] text-[12px]  ">
        Our standard plans offer affordable annual memberships. You can upgrade
        at any time to either a Premium program or to add family members.
        Premium members have the added option of paying monthly with same
        flexibility of adding family members at any time.
      </p>
      <h2 className="lg:text-[24px] md:text-[18px] text-[16px] font-semibold capitalize mt-4  text-start ">
        Premium Plan Benefits
      </h2>
      <p className="text-[#565656] lg:text-[16px] md:text-[14px] text-[12px]   ">
        Premium members have the added option of paying monthly with same
        flexibility of adding family members at any time.
      </p>
      <h2 className="text-[16px] font-[500] my-3 ">
        Premium plans also include expanded member support services such as:
      </h2>
      {PremiumData.map((item, index) => (
        <div key={index} className="flex my-4 gap-2 items-start">
          <img
            src={TickBlue}
            className="xl:w-[18px] xl:h-[16px] w-[15px] h-[15px] object-contain mt-1"
            alt=""
          />
          <p className="text-[#565656] xl:text-[16px] lg:text-[14px] md:text-[14px] text-[12px]">
            {item.para}
          </p>
        </div>
      ))}
    </section>
  );
};

export default MemeberContent;

import React, { useState } from "react";
import Button from "../../../landingPage/Inputs/Button";
import { useNavigate } from "react-router";
import {
  RadioBtn,
  RadioBtnActive,
  SubsTick,
} from "../../../../../assets/export";

const MemberDetails = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("Individual");

  const features = [
    "Access to professional pain management care",
    "Chiropractors",
    "Imaging service",
    "Acupuncture services",
    "Massage Therapy services",
    "Flat fee for chiropractic manipulation/adjustment of $50 per visit",
    "Unlimited visits",
    "No prior authorizations",
    "Secure digital platform",
    "Discount of 30% on all additional services offered",
    "Includes all family members",
  ];

  return (
    <div>
      <div className="w-full xl:w-[50%] mt-4 bg-white rounded-[22px] p-6 lg:h-[752px] h-full flex flex-col justify-between">
        <div className="">
          <h2 className="text-[24px] text-[#000000] font-semibold border-b border-[#e8e8e8] pb-2">
            Standard Plan
          </h2>

          <div className="mt-4 flex justify-between gap-2  xl:items-center lg:items-start border-b border-[#e8e8e8] pb-2">
            <div>
              <h3 className="text-[18px] font-semibold text-[#181818] mb-2">
                Select Plan
              </h3>
              <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row xl:space-x-4">
                {["Individual", "Couples", "Family"].map((plan) => (
                  <label
                    key={plan}
                    className="flex items-center space-x-1 text-sm"
                  >
                    <img
                      onClick={() => setSelectedPlan(plan)}
                      src={selectedPlan === plan ? RadioBtnActive : RadioBtn}
                      alt=""
                      className="cursor-pointer w-[17px] h-[17px] "
                    />

                    <span className="text-black">{plan}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent xl:text-[45px] text-[25px] font-bold">
              $59
              <span className="text-[18px] font-normal">/mo</span>
            </div>
          </div>

          <h3 className="mt-6 mb-3 font-[600] text-[20px] text-[#181818]">
            Plan Details
          </h3>
          <ul className="space-y-3">
            {features.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-[#181818]"
              >
                <img src={SubsTick} className="w-[18px] h-[18px]" alt="" />
                <span className="xl:text-[16px] text-[14px] font-[500] text-[#181818]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="w-[249px]">
            <button className="bg-[#EE3131] text-white h-[49px] w-[249px] rounded-[8px]  ">
              Cancel Subscription
            </button>
          </div>
          <p className="xl:text-[12px] text-[10px] font-[500] text-[#000000]">
            Your subscription will expire on
            <br />
            <span className="text-[#EE3131]">30 September 2025 </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;

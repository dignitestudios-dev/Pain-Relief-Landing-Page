import React from "react";

import { ProfileImg } from "../../../../../assets/export";
import { useNavigate } from "react-router";
import { SkeletonProviderDetail } from "../../../../global/Sekelton";
import Button from "../../../landingPage/Inputs/Button";

const HeroSection = ({userData}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[250px]">
      <div className="bg-provider-detail w-full h-[250px] sm:h-[280px] md:h-[300px]" />

      <div className="flex justify-center -mt-40 sm:-mt-36 md:-mt-32 lg:-mt-28 xl:-mt-24">
        <div className="w-[90%] max-w-[1500px]">
          {false ? (
            <SkeletonProviderDetail />
          ) : (
            <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="p-[2px] rounded-full bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px]">
                  <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                    <img
                      src={userData?.profilePicture || ProfileImg}
                      className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] rounded-full object-cover"
                      alt="Profile"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[32px] font-semibold text-black">
                    {userData?.firstName} {userData?.lastName}
                  </h2>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#565656] break-all">
                   {userData?.email}
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-[160px] md:w-[180px] lg:w-[214px]">
                <Button
                  text={"Upgrade Plan"}
                  onClick={() => navigate("/user/upgrade-plan")}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

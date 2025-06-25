import React from "react";
import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";

import { ProfileImg } from "../../../../../assets/export";
import { SkeletonProviderDetail } from "../../../../global/Sekelton";
import Button from "../../../landingPage/Inputs/Button";

const HeroSection = ({ userData, loading }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[250px]">
      <div className="bg-provider-detail h-[350px] w-full">
        <div className="flex px-4 md:px-10 lg:px-20 py-32 md:py-24 lg:py-32 w-full text-white">
          <div className="w-full mt-20  cursor-pointer">
            <h2
              onClick={() => navigate(-1)}
              className="text-[19px] flex items-center gap-1 font-semibold leading-snug md:leading-[45px] mt-2"
            >
              <IoIosArrowBack size={16} /> Back
            </h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center -mt-40 sm:-mt-36 md:-mt-32 lg:-mt-28 xl:-mt-24">
        <div className="w-[90%] max-w-[1500px]">
          {loading ? (
            <SkeletonProviderDetail />
          ) : (
            <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="p-[2px] rounded-full bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[130px] h-[130px]">
                  <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                    <img
                      src={
                        userData?.profilePicture
                          ? userData?.profilePicture
                          : ProfileImg
                      }
                      className="w-[120px] h-[120px] rounded-full object-cover"
                      alt="Profile"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h2 className="text-[28px] font-semibold text-black">
                    {" "}
                    {userData?.firstName} {userData?.lastName}
                  </h2>
                  <p className="text-[16px] text-[#565656] break-all">
                    {userData?.email}
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-[160px] md:w-[180px] lg:w-[214px]">
                <Button
                  text={"Edit Profile"}
                  onClick={() =>
                    navigate("/user/user-edit-profile", {
                      state: userData,
                    })
                  }
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

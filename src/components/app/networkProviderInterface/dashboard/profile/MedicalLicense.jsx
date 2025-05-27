import React, { useState } from "react";
import { MedicallicenseCard } from "../../../../../assets/export";
import LicenseApprovedModal from "./LicenseApprovedModal";
import ApprovedPending from "./ApprovedPending";

const MedicalLicense = ({ profileData, setLicenseModal, loader }) => {
  return (
    <div className="bg-white rounded-[8px] mt-4">
      <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row gap-4 justify-between  xl:items-center border-b border-b-[#EAEAEA] p-4">
        <h2 className="text-[22px] xl:text-[24px] font-[600]">
          Medical License and Insurance
        </h2>
        <p
          onClick={() => setLicenseModal(true)}
          className="text-[14px] md:text-[14px] lg:text-[16px] xl:text-[19px] border-b border-b-black font-[500] text-[#212121] cursor-pointer"
        >
          Upload New Medical License
        </p>
      </div>
      {loader ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-8 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <div className="h-[14px] w-[120px] bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="w-[289.6px] h-[183.67px] bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-8 gap-6">
          {profileData?.documents?.map((item, index) => (
            <div key={index}>
              <h2 className="text-[14px] font-[500] px-2 text-[#565656]">
                Medical License
              </h2>
              <div>
                <img
                  src={item}
                  className="w-[289.6px] h-[183.67px] my-3"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      )}

     
    </div>
  );
};

export default MedicalLicense;

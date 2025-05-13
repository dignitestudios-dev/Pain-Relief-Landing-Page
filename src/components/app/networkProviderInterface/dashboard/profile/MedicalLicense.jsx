import React, { useState } from "react";
import { MedicallicenseCard } from "../../../../../assets/export";
import LicenseApprovedModal from "./LicenseApprovedModal";
import ApprovedPending from "./ApprovedPending";

const MedicalLicense = () => {
  const [licenseModal, setLicenseModal] = useState(false);
  const [pendingModal, setPendingModal] = useState(false);
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

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-8 gap-6">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index}>
            <h2 className="text-[14px] font-[500] px-2 text-[#565656]">
              Medical License
            </h2>
            <div>
              <img
                src={MedicallicenseCard}
                className="w-[289.6px] h-[183.67px] my-3"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      {licenseModal && (
        <LicenseApprovedModal
          onClick={() => setLicenseModal(false)}
          setLicenseModal={setLicenseModal}
          setPendingModal={setPendingModal}
        />
      )}
       {pendingModal && (
        <ApprovedPending onClick={() => setPendingModal(false)} />
      )}
      
    </div>
  );
};

export default MedicalLicense;

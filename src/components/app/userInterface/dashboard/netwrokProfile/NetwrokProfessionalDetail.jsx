import React from "react";
import { SkeletonNetworkDetail } from "../../../../global/Sekelton";
import NetworkDetail from "../../../landingPage/providerdetail/NetworkDetail";
import { phoneFormatter } from "../../../../../lib/helpers";

const NetwrokProfessionalDetail = () => {
  const profileData = {
    clinicName: "Sunrise Health Clinic",
    email: "contact@sunriseclinic.com",
    phone: "1234567890",
    addresses: [
      {
        address: "123 Main St, Springfield",
        services: [{ label: "Physiotherapy" }, { label: "Chiropractic" }],
      },
      {
        address: "456 Elm St, Springfield",
        services: [{ label: "Acupuncture" }],
      },
    ],
    isPainReliefCoach: true,
    painReliefCoachRequested: false,
    npi: "9876543210",
    website: "www.sunriseclinic.com",
    description:
      "We provide holistic health and wellness services to our community.",
  };

  const loader = false;

  return (
    <div className="flex justify-center px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="bg-white  w-[94%] max-w-[1500px] rounded-[8px] my-4">
        <div className="flex flex-wrap justify-between items-center border-b border-[#EAEAEA] px-4 py-4 sm:py-5">
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#181818]">
            Clinic Profile
          </h2>
          {/* <button className="font-[500] underline text-[14px] sm:text-[16px]">
            Add New Location
          </button> */}
        </div>

        {loader ? (
          <SkeletonNetworkDetail />
        ) : (
          <>
            <NetworkDetail
              title={"Name of Clinic/Practice"}
              detail={profileData?.clinicName || "N/A"}
            />
            <NetworkDetail
              title={"Email Address"}
              detail={profileData?.email || "N/A"}
            />
            <NetworkDetail
              title={"Mobile Number"}
              detail={phoneFormatter(profileData?.phone) || "N/A"}
            />

            {profileData?.addresses?.map((item, index) => (
              <NetworkDetail
                key={index}
                title={
                  index === 0 ? "Primary Clinic Location" : "Clinic Location"
                }
                detail={item?.address || "N/A"}
                message={item?.services?.map((s) => s?.label).join(", ")}
              />
            ))}
            <NetworkDetail
              title={"Pain Relief Coach"}
              detail={`${
                profileData?.isPainReliefCoach === false ? "N/A" : "Authorized"
              }`}
            />
            <NetworkDetail
              title={"Provider Individual NPI"}
              detail={profileData?.npi || "N/A"}
            />
            <NetworkDetail
              title={"Website"}
              detail={profileData?.website || "N/A"}
            />
            <NetworkDetail
              title={"Description"}
              detail={profileData?.description || "N/A"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NetwrokProfessionalDetail;

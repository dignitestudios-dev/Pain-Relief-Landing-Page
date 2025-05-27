import React, { useState } from "react";
import NetworkDetail from "../../../landingPage/providerdetail/NetworkDetail";
import { SkeletonNetworkDetail } from "../../../../global/Sekelton";
import { phoneFormater } from "../../../../../lib/helpers";
import RequestSendModal from "../home/RequestSendModal";
import AddNewLocationModal from "../../../../onboarding/AddNewLocationModal";
import { FaRegEdit } from "react-icons/fa";

const ClinicProvider = ({
  profileData,
  loading,
  setIsModal,
  setEditIndex,
  editIndex,
  handleRequestSend,
  setIsEditModall,
  loader
  
}) => {
  const [requestSendModal, setRequestSendModal] = useState(false);
console.log(editIndex,"editIndex")
  return (
    <div className="bg-white rounded-[8px] mt-5">
      <div className="flex justify-between items-center border-b border-[#EAEAEA] px-4 py-5">
        <h2 className="text-[24px] font-semibold text-[#181818]">
          Clinic Profile
        </h2>
        <button
          className="font-[500] underline "
          onClick={() => setIsModal(true)}
        >
          Add New Location
        </button>
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
            detail={phoneFormater(profileData?.phone) || "N/A"}
          />

          {profileData?.addresses?.map((item, index) => (
            <NetworkDetail
              title={
                index === 0 ? "Primary Clinic Location" : "Clinic Location"
              }
              detail={item?.address || "N/A"}
              message={item?.services?.map((item) => item?.label).join(", ")}
              editIcon={<FaRegEdit />}
              onClickEdit={() => {
                setEditIndex(index);
                setIsEditModall(true);
              }}
            />
          ))}
          <NetworkDetail
            title={"Pain Relief Coach"}
            detail={`${
              profileData?.isPainReliefCoach === false ? " N/A" : "Authorized"
            }`}
            request={`${
              profileData.painReliefCoachRequested === false
                ? "Send Request"
                : ""
            }`}
            onClickRequest={handleRequestSend}
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

      {requestSendModal && (
        <RequestSendModal
          isOpen={requestSendModal}
          onClick={() => setRequestSendModal(false)}
        />
      )}
    </div>
  );
};

export default ClinicProvider;

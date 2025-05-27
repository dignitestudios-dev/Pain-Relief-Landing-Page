import React, { useState } from "react";
import AddNewLocationModal from "../../../onboarding/AddNewLocationModal";
import RequestSendModal from "../../networkProviderInterface/dashboard/home/RequestSendModal";
import { phoneFormater } from "../../../../lib/helpers";
import NetworkDetail from "./NetworkDetail";
import { SkeletonNetworkDetail } from "../../../global/Sekelton";

const ClinicProfile = ({ providerDetail, loading }) => {
  const [requestSendModal, setRequestSendModal] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const [isLocationAdded, setIsLocationAdded] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  return (
    <div className="bg-white rounded-[8px] mt-5">
      <div className="flex justify-between items-center border-b border-[#EAEAEA] px-4 py-5">
        <h2 className="text-[24px] font-semibold text-[#181818]">
          Clinic Profile
        </h2>
      </div>
      {loading ? (
        <SkeletonNetworkDetail />
      ) : (
        <>
          <NetworkDetail
            title={"Name of Clinic/Practice"}
            detail={providerDetail?.clinicName || "N/A"}
          />
          <NetworkDetail
            title={"Email Address"}
            detail={providerDetail?.email || "N/A"}
          />
          <NetworkDetail
            title={"Mobile Number"}
            detail={phoneFormater(providerDetail?.phone) || "N/A"}
          />

          {providerDetail?.addresses?.map((item, index) => (
            <NetworkDetail
              title={
                index === 0 ? "Primary Clinic Location" : "Clinic Location"
              }
              detail={item?.address || "N/A"}
              message={item?.services?.map((item) => item?.name).join(", ")}
            />
          ))}
          <NetworkDetail
            title={"Provider Individual NPI"}
            detail={providerDetail?.npi || "N/A"}
          />
          <NetworkDetail
            title={"Website"}
            detail={providerDetail?.website || "N/A"}
          />
          <NetworkDetail
            title={"Description"}
            detail={providerDetail?.description || "N/A"}
          />
        </>
      )}

      {isModal && (
        <AddNewLocationModal
          setIsModal={setIsModal}
          setIsLocationAdded={setIsLocationAdded}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          isLocationAdded={isLocationAdded}
          therapyTypesOption={therapyTypesOption}
        />
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

export default ClinicProfile;

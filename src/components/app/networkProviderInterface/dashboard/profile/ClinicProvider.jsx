import React, { useState } from "react";
import NetworkDetail from "../../../landingPage/providerdetail/NetworkDetail";
import { SkeletonNetworkDetail } from "../../../../global/Sekelton";
import { phoneFormatter } from "../../../../../lib/helpers";
import RequestSendModal from "../home/RequestSendModal";
import AddNewLocationModal from "../../../../onboarding/AddNewLocationModal";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DeleteModal from "../../../../global/DeleteModal";
import axios from "../../../../../axios";

const ClinicProvider = ({
  profileData,
  loading,
  setIsModal,
  setEditIndex,
  editIndex,
  handleRequestSend,
  setIsEditModall,
  loader,
  setUpdate,
}) => {
  const [requestSendModal, setRequestSendModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [deleteLoader, setDeleteLoader] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleteLoader(true);
      const response = await axios.post("/provider/delete-address", {
        _id: deleteId,
      });

      if (response?.status === 200) {
        setDeleteModal(false);
        setUpdate((prev) => !prev);
      }
      // Optionally update your UI or state here
    } catch (err) {
      console.error("🚀 ~ handleDelete ~ err:", err);
    } finally {
      setDeleteLoader(false);
    }
  };
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
            detail={phoneFormatter(profileData?.phone) || "N/A"}
          />

          {profileData?.addresses?.map((item, index) => (
            <NetworkDetail
              key={index}
              title={
                index === 0 ? "Primary Clinic Location" : "Clinic Location"
              }
              detail={item?.address || "N/A"}
              message={item?.services?.map((item) => item?.label).join(", ")}
              editIcon={<FaRegEdit />}
              deleteIcon={
                <MdDelete className="text-red-600 hover:text-red-400" />
              }
              onClickEdit={() => {
                setEditIndex(index);
                setIsEditModall(true);
              }}
              onClickDelete={() => {
                setDeleteId(item?._id);
                setDeleteModal(true);
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

      {deleteModal && (
        <DeleteModal
          isOpen={deleteModal}
          onClick={() => setDeleteModal(false)}
          handleDelete={handleDelete}
          deleteLoader={deleteLoader}
        />
      )}
    </div>
  );
};

export default ClinicProvider;

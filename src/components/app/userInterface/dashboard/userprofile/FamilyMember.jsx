import React, { useEffect, useState } from "react";
import { EditIcon, RedBin } from "../../../../../assets/export";
import { getAgeFromDate } from "../../../../../lib/helpers";
import DeleteFamilyModal from "./DeleteFamilyModal";
import { useDeleteFamilyMember } from "../../../../../hooks/api/Post";
import { processDeleteFamilyMember } from "../../../../../lib/utils";
import { FamilyMemberSkeleton } from "../../../../global/Sekelton";
import { useGetCards } from "../../../../../hooks/api/Get";
import { ErrorToast } from "../../../../global/Toaster";

const FamilyMembers = ({
  setIsModal,
  userData,
  setUpdate,
  loader,
  setEditModal,
  setEditIndex,
}) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  const { postData: deleteData, loading: deleteLoader } =
    useDeleteFamilyMember();
    
  const { data, loading: subsloader } = useGetCards(
    "/payment/get-subscription-user"
  );
  const handleDeleteMember = () => {
    deleteData(
      "/user/delete-family-member",
      selectedMemberId,
      processDeleteFamilyMember,
      setDeleteModal,
      setUpdate
    );
  };

  const openDeleteModal = (id) => {
    setSelectedMemberId(id);
    setDeleteModal(true);
  };

  const planType = data?.userSubscription?.priceDetails?.planType;

  const maxFamilyMembers =
    planType === "individual"
      ? 1
      : planType === "couples"
      ? 2
      : planType === "family"
      ? 4
      : 5;
  const isDisabled = userData?.familyMembers?.length >= maxFamilyMembers;

  return (
    <>
      {loader ? (
        <FamilyMemberSkeleton />
      ) : (
        <div className=" bg-white rounded-[8px] my-6 ">
          <div className="flex justify-between  border-b items-center mb-4">
            <h2 className="text-xl sm:text-2xl p-4 font-semibold text-[#181818]">
              Family Members
            </h2>
            <button
              onClick={() => {
                if (isDisabled) {
                  ErrorToast("You’ve reached your family member limit.");
                  return;
                }

                setIsModal(true);
              }}
              className={` p-4 ${
                isDisabled
                  ? "opacity-50 pointer-events-none]"
                  : "text-[#00BCD4]   text-sm sm:text-base font-medium hover:underline"
              }`}
            >
              Add New Members
            </button>
          </div>

          {userData?.familyMembers?.map((member, index) => (
            <div key={member.id} className="bg-white border-b p-10 sm:p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-24">
                <div className="flex items-center gap-4">
                  <img
                    src={member?.profilePicture}
                    alt={member?.name}
                    className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-[20px] sm:text-xl font-[600] text-[#181818]">
                      {member?.name}
                    </h3>
                    <p className="text-[16px] text-[#565656]">
                      {member?.email}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1 text-sm text-[#181818]">
                  <div>
                    <p className="font-[500] text-[14px]  ">Phone Number</p>
                    <p className="font-[400] text-[16px] mt-2 text-[#565656]  ">
                      +1 {member?.phone}
                    </p>
                  </div>
                  <div>
                    <p className="font-[500] text-[14px]  ">Age</p>
                    <p className="font-[400] text-[16px] mt-2 text-[#565656]  ">
                      {getAgeFromDate(member?.dateOfBirth)}
                    </p>
                  </div>
                  <div>
                    <p className="font-[500] text-[14px]  ">Gender</p>
                    <p className="font-[400] text-[16px] mt-2 text-[#565656]  ">
                      {member?.gender}
                    </p>
                  </div>
                </div>

                <div className="flex cursor-pointer items-center gap-10 text-[#00BCD4]">
                  <span
                    onClick={() => {
                      setEditIndex(index);
                      setEditModal(true);
                    }}
                  >
                    <img src={EditIcon} />
                  </span>
                  <button onClick={() => openDeleteModal(member._id)}>
                    <img
                      src={RedBin}
                      className="h-[17px] w-[17px]"
                      alt="Delete"
                    />
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <h2 className="text-[18px] font-[500] text-[#212121] ">
                  Description
                </h2>
                <p className="text-[16px] font-[400] text-[#565656] ">
                  {member.description}
                </p>
              </div>
            </div>
          ))}

          {deleteModal && (
            <DeleteFamilyModal
              onClick={handleDeleteMember}
              onClose={() => setDeleteModal(false)}
              loading={deleteLoader}
            />
          )}
        </div>
      )}
    </>
  );
};

export default FamilyMembers;

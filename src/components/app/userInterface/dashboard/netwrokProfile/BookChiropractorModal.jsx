import { useState } from "react";
import {
  CancelIcon,
  ProfileImg,
  RadioBtn,
  RadioBtnActive,
} from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";

const BookChiropractorModal = ({
  onClick,
  onClose,
  profile,
  activeMember,
  setActiveMember,
  profileId,
}) => {
  const [memberMessage, setMemberMessage] = useState(false);
  const handleSelection = () => {
    if (!activeMember) {
      setMemberMessage(true);
      return;
    } else {
      onClick();
    }
  };
  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-4 h-[560px] overflow-y-auto w-[470px] ">
        <div className="flex border-b pb-4 border-b-gray-300 justify-between items-center">
          <p className="text-[24px] font-[600] capitalize">
            Book Now Chiropractor
          </p>
          <div>
            <img
              src={CancelIcon}
              className="w-[22px] h-[22px] cursor-pointer"
              alt=""
              onClick={onClose}
            />
          </div>
        </div>

        {/* Select Member Section */}
        <div className="mt-4">
          <h2 className="text-[18px] font-[600] capitalize">Select Member</h2>
          <p className="text-[14px] font-[400] text-[#565656]">
            Select member to continue
          </p>
        </div>
        <div
          className={`border rounded-[8px] p-[3px]  my-5 cursor-pointer ${
            activeMember === profileId
              ? "bg-gradient-to-r from-[#63CFAC] to-[#29ABE2]"
              : "border border-gray-300"
          }`}
          onClick={() => {
            setActiveMember(profileId);
            setMemberMessage(false);
          }}
        >
          <div className="bg-white  rounded-[8px] p-3 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="p-[2px] rounded-full bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[81px] h-[81px]">
                <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                  <img
                    src={profile?.profilePicture || ProfileImg}
                    className="w-full h-full rounded-full object-cover"
                    alt="Profile"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-[16px] font-[600] ">
                  {profile?.firstName}
                </h2>
                <p className="text-[12px] text-[#565656] ">{profile?.email}</p>
              </div>
            </div>

            <div>
              <img
                src={activeMember === profileId ? RadioBtnActive : RadioBtn}
                alt=""
                className="w-[18px] h-[18px]"
              />
            </div>
          </div>
        </div>
        <h2 className="text-[18px] font-[600] capitalize">
          Family Member Profile
        </h2>
        {profile?.familyMembers?.map((item) => (
          <>
            <div
              key={item._id}
              className={` border rounded-[8px] p-[2px] my-5 cursor-pointer ${
                activeMember == item?._id
                  ? "bg-gradient-to-r from-[#63CFAC] to-[#29ABE2]"
                  : "border border-gray-300"
              }`}
              onClick={() => {
                setActiveMember(item._id);
                setMemberMessage(false);
              }}
            >
              <div className="bg-white  rounded-[8px] p-3 flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="p-[2px] rounded-full bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[81px] h-[81px]">
                    <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                      <img
                        src={item?.profilePicture || ProfileImg}
                        className="w-full h-full rounded-full object-cover"
                        alt="Profile"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-[16px] font-[600] ">{item?.name}</h2>
                    <p className="text-[12px] text-[#565656] ">{item?.email}</p>
                  </div>
                </div>

                <div>
                  <img
                    src={activeMember === item?._id ? RadioBtnActive : RadioBtn}
                    alt=""
                    className="w-[18px] h-[18px]"
                  />
                </div>
              </div>
            </div>
          </>
        ))}

        {memberMessage && (
          <p className="text-red-500 text-sm pb-1">Please select the member</p>
        )}

        <div className="relative bottom-0">
          <Button text={"Next"} onClick={handleSelection} />
        </div>
      </div>
    </div>
  );
};

export default BookChiropractorModal;

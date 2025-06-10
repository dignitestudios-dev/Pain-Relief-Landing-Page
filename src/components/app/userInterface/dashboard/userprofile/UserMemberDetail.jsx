import React from "react";
import NetworkDetail from "../../../landingPage/providerdetail/NetworkDetail";
import { getAgeFromDate } from "../../../../../lib/helpers";
import { SkeletonNetworkDetail } from "../../../../global/Sekelton";

const UserMemberDetail = ({ userData, loading }) => {
  return (
    <div className="bg-white rounded-[8px] mt-5">
      {loading ? (
        <SkeletonNetworkDetail />
      ) : (
        <>
          <div className="flex justify-between items-center border-b border-[#EAEAEA] px-4 py-5">
            <h2 className="text-[24px] font-semibold text-[#181818]">
              Member Details
            </h2>
          </div>

          <NetworkDetail
            title="Full Name"
            detail={`${userData?.firstName} ${userData?.lastName}`}
          />

          <NetworkDetail title="Email Address" detail={userData?.email} />
          <NetworkDetail title="Mobile Number" detail={userData?.phone} />
          <NetworkDetail
            title="Age"
            detail={getAgeFromDate(userData?.dateOfBirth)}
          />
          <NetworkDetail
            title="Gender"
            detail={userData?.gender || "Not Found"}
          />
          <NetworkDetail title="Location" detail={userData?.address} />
        </>
      )}
    </div>
  );
};

export default UserMemberDetail;

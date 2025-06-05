import React from "react";
import NetworkDetail from "../../../landingPage/providerdetail/NetworkDetail";

const UserMemberDetail = () => {
  return (
    <div className="bg-white rounded-[8px] mt-5">
      <div className="flex justify-between items-center border-b border-[#EAEAEA] px-4 py-5">
        <h2 className="text-[24px] font-semibold text-[#181818]">
          Member Details
        </h2>
      </div>

      {/* Static Data Below */}
      <NetworkDetail title="Full Name" detail="John Doe" />
      <NetworkDetail
        title="Email Address"
        detail="contact@sunrisemedical.com"
      />
      <NetworkDetail title="Mobile Number" detail="+1 (555) 123-4567" />
      <NetworkDetail title="Age" detail="25yrs old" />
      <NetworkDetail title="Gender" detail="Male" />
      <NetworkDetail
        title="Location"
        detail="Dallas, TX – 802 PainEase Plaza"
      />

      <NetworkDetail
        title="Description"
        detail="A state-of-the-art clinic providing comprehensive care with compassion and technology."
      />
    </div>
  );
};

export default UserMemberDetail;

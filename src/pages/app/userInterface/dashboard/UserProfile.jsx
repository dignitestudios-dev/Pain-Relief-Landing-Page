import React, { useState } from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/userprofile/HeroSection";
import UserDetailSection from "../../../../components/app/userInterface/dashboard/userprofile/UserDetailSection";
import { useUserProfile } from "../../../../hooks/api/Get";

const UserProfile = () => {
  const [update, setUpdate] = useState(false);
  const { data, loading } = useUserProfile("/user/get-profile", update);
  const { data: tableData, loading: tableloader } = useUserProfile(
    "/user/get-refferal-users"
  );

  return (
    <div>
      <HeroSection userData={data} loading={loading} />

      <UserDetailSection
        userData={data}
        tableData={tableData}
        setUpdate={setUpdate}
        loader={loading}
      />
    </div>
  );
};

export default UserProfile;

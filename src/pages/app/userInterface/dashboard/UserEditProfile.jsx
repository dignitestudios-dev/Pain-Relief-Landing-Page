import React, { useEffect, useRef, useState } from "react";
import HeroSection from "../../../../components/app/networkProviderInterface/dashboard/editProfile/HeroSection";
import { useLocation } from "react-router";
import { useEditProfileProvider } from "../../../../hooks/api/Post";
import { EditproviderSchema } from "../../../../schema/app/userInfoSchema";
import { processEditProviderProfile } from "../../../../lib/utils";
import { useFormik } from "formik";
import UserEditForm from "../../../../components/app/userInterface/dashboard/edituserprofile/UserEditForm";

const UserEditProfile = () => {
  const location = useLocation();
  const editProfile = location.state;

  const [update, setUpdate] = useState(false);
  const genderOptions = [
    { _id: "1", name: "Male" },
    { _id: "2", name: "Female" },
    { _id: "9", name: "Other" },
  ];

  return (
    <div>
      <HeroSection />
      <div className="flex justify-center">
        <div className="w-[70%]">
          <UserEditForm
            genderOptions={genderOptions}
            editProfile={editProfile}
          />
        </div>
      </div>
    </div>
  );
};

export default UserEditProfile;

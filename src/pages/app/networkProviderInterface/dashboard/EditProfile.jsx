import React, { useContext, useEffect, useRef, useState } from "react";
import HeroSection from "../../../../components/app/networkProviderInterface/dashboard/editProfile/HeroSection";
import EditForm from "../../../../components/app/networkProviderInterface/dashboard/editProfile/EditForm";
import { useLocation } from "react-router";
import { useEditProfileProvider } from "../../../../hooks/api/Post";

import { EditproviderSchema } from "../../../../schema/app/userInfoSchema";
import { processEditProviderProfile } from "../../../../lib/utils";
import { useFormik } from "formik";
import { AppContext } from "../../../../context/AppContext";

const EditProfile = () => {
  const location = useLocation();
  const editProfile = location.state;
  const [selectedImage, setSelectedImage] = useState(null);
  const [update, setUpdate] = useState(false);
  const { loginAuth } = useContext(AppContext);
  const { postData, loading } = useEditProfileProvider();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: editProfile.name || "",
      clinicName: editProfile.clinicName || "",
      email: editProfile.email || "",
      phone: editProfile.phone || "",
      npi: editProfile.npi || "",
      website: editProfile.website || "",
      description: editProfile.description || "",
      profilePicture: null,
    },
    validationSchema: EditproviderSchema,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      const formData = new FormData();

      // 👇 Append all form fields
      formData.append("name", values.name || "");
      formData.append("clinicName", values.clinicName || "");
      formData.append("email", values.email || "");
      formData.append("phone", values.phone || "");
      formData.append("npi", values.npi || "");
      formData.append("website", values.website || "");
      formData.append("description", values.description || "");

      // 👇 Append image file
      if (selectedImage) {
        formData.append("profilePicture", selectedImage);
      }

      postData(
        "/provider/update-profile",
        formData,
        processEditProviderProfile,
        setUpdate,
        loginAuth
      );
    },
  });

  const fileInputRef = useRef(null);
  // store image for submission

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setFieldValue("profilePicture", file);
    }
  };

  return (
    <div>
      <HeroSection />
      <div className="flex justify-center">
        <div className="w-[70%]">
          <EditForm
            editProfile={editProfile}
            selectedImage={selectedImage}
            handleFileChange={handleFileChange}
            fileInputRef={fileInputRef}
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

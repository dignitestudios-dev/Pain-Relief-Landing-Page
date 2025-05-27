import React, { useEffect, useRef, useState } from "react";
import HeroSection from "../../../../components/app/networkProviderInterface/dashboard/editProfile/HeroSection";
import EditForm from "../../../../components/app/networkProviderInterface/dashboard/editProfile/EditForm";
import { useLocation } from "react-router";
import { useEditProfileProvider } from "../../../../hooks/api/Post";
import {
  EditProfileproviderInitialValues,
  providerInitialValues,
} from "../../../../init/app/userInformation";
import {
  EditproviderSchema,
  providerSchema,
} from "../../../../schema/app/userInfoSchema";
import { processEditProviderProfile } from "../../../../lib/utils";
import { useFormik } from "formik";

const EditProfile = () => {
  const location = useLocation();
  const editProfile = location.state;
  const [selectedImage, setSelectedImage] = useState(null);
  const [update, setUpdate] = useState(false);

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
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values, "values");
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
        setUpdate
      );
    },
  });

  const fileInputRef = useRef(null);
  // store image for submission

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Image selected:", file); // 👈 check this
      setSelectedImage(file);
      setFieldValue("profilePicture", file);
    }
  };

  return (
    <div>
      <HeroSection />
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
  );
};

export default EditProfile;

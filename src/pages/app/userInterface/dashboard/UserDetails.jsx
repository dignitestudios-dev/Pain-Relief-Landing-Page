import React, { useState } from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/userDetails/HeroSection";
import DetailsSection from "../../../../components/app/userInterface/dashboard/userDetails/DetailsSection";
import CancelModal from "../../../../components/app/userInterface/dashboard/userDetails/CancelModal";
import CancelReasonModal from "../../../../components/app/userInterface/dashboard/userDetails/CancelReasonModal";
import CancelRequestSuccess from "../../../../components/app/userInterface/dashboard/userDetails/CancelRequestSuccess";
import { useFormik } from "formik";
import * as Yup from "yup";
const UserDetails = () => {
  const [cancelModal, setCancelModal] = useState(false);
  const [cancelReasonModal, setCancelReasonModal] = useState(false);
  const [cancelRequestModal, setCancelRequestModal] = useState(false);
  const [description, setDescription] = useState("");
  const validationSchema = Yup.object().shape({
    description: Yup.string()
      .required("Description is required")
      .min(5, "Description must be at least 5 characters")
      .max(500, "Description cannot exceed 500 characters"),
  });
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
      description: "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,

    onSubmit: (values) => {
      setDescription(values.description);
      setCancelReasonModal(false);
      setCancelRequestModal(true);
    },
  });
  return (
    <div>
      <HeroSection />
      <DetailsSection
        setCancelModal={setCancelModal}
        description={description}
      />
      {cancelModal && (
        <CancelModal
          onClick={() => {
            setCancelModal(false);
            setCancelReasonModal(true);
          }}
        />
      )}
      {cancelReasonModal && (
        <CancelReasonModal
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          onCLose={() => setCancelReasonModal(false)}
        />
      )}
      {cancelRequestModal && (
        <CancelRequestSuccess onClick={() => setCancelRequestModal(false)} />
      )}
    </div>
  );
};

export default UserDetails;

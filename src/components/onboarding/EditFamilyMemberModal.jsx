import React, { useState } from "react";
import InputField from "./InputField";
import SelectableField from "./SelectableField";
import { UserProfile } from "../../assets/export";
import { useFormik } from "formik";
import Button from "../app/landingPage/Inputs/Button";
import { DropDownDark } from "../app/landingPage/Inputs/DropDown";
import Calender from "../global/DatePicker";
import PhoneInput from "../app/landingPage/Inputs/PhoneInput";
import { phoneFormatter } from "../../lib/helpers";
import { addFamilMemberSchema } from "../../schema/app/userInterface";
import { useEditFamilyMember } from "../../hooks/api/Post";
import { processUpdateFamily } from "../../lib/utils";

const EditFamilyMemberModal = ({
  editIndex,
  members,
  setEditModal,
  setUpdate,
}) => {
  const { loading, postData } = useEditFamilyMember();
  const memberToEdit = members[editIndex];

  const subjectOptions = [
    { _id: "1", name: "Brother" },
    { _id: "2", name: "Sister" },
    { _id: "3", name: "Father" },
  ];
  const genderOptions = [
    { _id: "1", name: "Male" },
    { _id: "2", name: "Female" },
    { _id: "9", name: "Other" },
  ];

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      fullname: memberToEdit.name || "",
      email: memberToEdit.email || "",
      phone: memberToEdit.phone || "",
      relation: memberToEdit.relationship || [],
      db: memberToEdit.dateOfBirth || "",
      gender: memberToEdit.gender || [],
      descriptions: memberToEdit.description || "",
      userImage: memberToEdit.profilePicture || null,
    },
    validationSchema: addFamilMemberSchema,
    onSubmit: (updatedValues) => {
      const updatedMembers = [...members];

      const formattedDate = new Date(
        updatedValues.db ? updatedValues.db : values.db
      ).toISOString();

      const updatedPayload = {
        _id: memberToEdit._id,
        name: updatedValues.fullname,
        email: updatedValues.email,
        phone: updatedValues.phone,
        relationship: updatedValues.relation || "",
        dateOfBirth: formattedDate,
        gender: updatedValues.gender || "",
        description: updatedValues.descriptions,
        profilePicture: updatedValues.userImage,
      };

      updatedMembers[editIndex] = updatedValues;
      const isFile = updatedValues.userImage instanceof File;

      if (isFile) {
        const formData = new FormData();
        for (const key in updatedPayload) {
          formData.append(key, updatedPayload[key]);
        }
        postData(
          "/user/update-family-member",
          formData,
          processUpdateFamily,
          setEditModal,
          undefined,
          setUpdate
        );
      } else {
        postData(
          "/user/update-family-member",
          updatedPayload,
          processUpdateFamily,
          setEditModal,
          undefined,
          setUpdate
        );
      }
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue("userImage", file);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-10 z-50 flex items-center justify-center p-1">
      <div
        className="bg-white overflow-y-auto overflow-x-hidden rounded-[18px] shadow-md p-6 
        lg:w-[900px] md:w-[600px] w-full lg:h-[625px] h-[725px]"
      >
        <div className="flex justify-between items-center pb-4 border-b-[1px] border-b-gray-200">
          <p className="text-[24px] font-semibold">Edit Family Member</p>
          <span
            onClick={() => setEditModal(false)}
            className="cursor-pointer border-[1px] border-gray-300 rounded-sm p-[2px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 font-light text-gray-500 hover:text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05A1 1 0 015.05 3.636L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex mt-3 items-center xl:w-[500px] lg:w-[400px] md:w-[500px] w-[320px]">
            <div className="md:w-[80px] w-[60px] md:h-[80px] h-[60px] rounded-full overflow-hidden">
              <img
                className="object-cover md:w-[80px] w-[60px] md:h-[80px] h-[60px]"
                src={
                  values.userImage
                    ? typeof values.userImage === "string"
                      ? values.userImage
                      : URL.createObjectURL(values.userImage)
                    : UserProfile
                }
                alt="User"
              />
            </div>
            <div className="pl-2">
              <p className="text-[#BEC2C9] relative">
                <span className="relative bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
                  Upload a file
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </span>{" "}
                or drag and drop PNG, JPG up to 10mb
              </p>
              {touched.userImage && errors.userImage && (
                <p className="text-red-600 text-xs mt-1">{errors.userImage}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
            {/* Left Side */}
            <div className="md:w-1/2 space-y-3">
              <InputField
                text="Full Name (required)"
                placeholder="First Name"
                type="text"
                id="fullname"
                name="fullname"
                value={values.fullname}
                maxLength={50}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.fullname}
                touched={touched.fullname}
              />
              <InputField
                text="Email Address"
                placeholder="Email Address"
                type="email"
                id="email"
                name="email"
                value={values.email}
                maxLength={50}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              />
              <PhoneInput
                value={phoneFormatter(values.phone)}
                id="phone"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phone}
                touched={touched.phone}
                autoComplete="off"
              />
              <DropDownDark
                label="Relation (required)"
                placeholder="Select"
                options={subjectOptions}
                iscolor={true}
                value={values.relation}
                onChange={(selected) =>
                  setFieldValue("relation", selected.name)
                }
              />
              {touched.relation && errors.relation && (
                <p className="text-red-600 text-xs mt-1">{errors.relation}</p>
              )}
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 space-y-3">
              <div>
                <Calender
                  startDate={new Date(values.db).toISOString().split("T")[0]}
                  setStartDate={(date) => setFieldValue("db", date)}
                  text="DD/MM/YY"
                  isStyle={true}
                  max={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() - 18)
                    )
                  }
                  label="Date of Birth (required)"
                />
                {touched.db && errors.db && (
                  <p className="text-red-600 text-xs mt-1">{errors.db}</p>
                )}
              </div>
              <DropDownDark
                label="Gender (required)"
                placeholder="Select"
                options={genderOptions}
                iscolor={true}
                value={values.gender}
                onChange={(selected) => setFieldValue("gender", selected.name)}
              />
              {touched.gender && errors.gender && (
                <p className="text-red-600 text-xs mt-1">{errors.gender}</p>
              )}
              <div>
                <textarea
                  placeholder="Description"
                  className="border border-[#D9D9D9] focus:outline-none focus:ring-2 placeholder:text-[#565656] focus:ring-blue-300 w-full rounded-[12px] p-4 text-[16px] h-[150px]"
                  id="descriptions"
                  value={values.descriptions}
                  rows={6}
                  name="descriptions"
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                {touched.descriptions && errors.descriptions && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.descriptions}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-3">
            <div className="w-[228px]">
              <Button text="Save Changes" type="submit" loading={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFamilyMemberModal;

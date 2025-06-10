import React, { useState } from "react";
import UserMemberDetail from "./UserMemberDetail";
import ReferralTable from "../refferal/ReferralTable";
import FamilyMembers from "./FamilyMember";
import AddFamilyMemberModal from "../../../../onboarding/AddFamilyMemberModal";
import { addFamilMemberSchema } from "../../../../../schema/app/userInterface";
import { addFamilMemberValues } from "../../../../../init/app/userInterface";
import { useFormik } from "formik";
import { useCreateFamilyMember } from "../../../../../hooks/api/Post";
import { useNavigate } from "react-router";
import { processUserFamilyMember } from "../../../../../lib/utils";
import EditFamilyMemberModal from "../../../../onboarding/EditFamilyMemberModal";

const UserDetailSection = ({ userData, tableData, setUpdate, loader }) => {
  const { postData, loading } = useCreateFamilyMember();
  const navigate = useNavigate();

  const [editModal, setEditModal] = useState(false);
  const [isMemberAdded, setIsMemberAdded] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [members, setMembers] = useState([]);

  const [tabActive, setTabActive] = useState("Membership Details");
  const tabs = ["Membership Details", "Family Members", "Referral Friends"];
  const [isModal, setIsModal] = useState(false);
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: addFamilMemberValues,
    validationSchema: addFamilMemberSchema,
    onSubmit: (values, action) => {
      const formattedDate = new Date(values.db).toISOString();

      setMembers((prev) => [values, ...prev]);
      const formData = new FormData();

      formData.append("name", values.fullname);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("dateOfBirth", formattedDate);
      formData.append(
        "gender",
        values.gender?.map((item) => item.name).join(", ") || ""
      );
      formData.append(
        "relationship",
        values.relation?.map((item) => item.name).join(", ") || ""
      );

      if (values.userImage) {
        formData.append("profilePicture", values.userImage);
      }

      formData.append("description", values.descriptions || "");

      postData(
        "/user/create-family-member",
        formData,
        processUserFamilyMember,
        setIsModal,
        setUpdate
      );

      setIsMemberAdded(true);

      action.resetForm();
    },
  });

  return (
    <div className="flex flex-col mt-4 xl:px-20 lg:px-14  md:px-10 px-8 mb-10 ">
      <div className="w-[85%]">
        <div className="xl:w-[70%] w-[100%]   md:mt-4">
          <div className="bg-white rounded-[8px] p-3 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  flex-wrap">
            {tabs.map((item, index) => (
              <button
                key={index}
                onClick={() => setTabActive(item)}
                className={`rounded-[8px] h-[50px]   xl:text-[18px] lg:text-[16px] font-[500] ${
                  tabActive === item
                    ? "bg-gradient-to-l to-[#63CFAC]  from-[#29ABE2] text-white"
                    : "bg-white text-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      {tabActive === "Membership Details" && (
        <UserMemberDetail userData={userData} loading={loader} />
      )}
      {tabActive === "Family Members" && (
        <FamilyMembers
          setIsModal={setIsModal}
          userData={userData}
          setUpdate={setUpdate}
          loader={loader}
          setEditIndex={setEditIndex}
          setEditModal={setEditModal}
        />
      )}
      {tabActive === "Referral Friends" && (
        <ReferralTable tableData={tableData} />
      )}
      {isModal && (
        <AddFamilyMemberModal
          setIsModal={setIsModal}
          setIsMemberAdded={setIsMemberAdded}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          setFieldValue={setFieldValue}
          loading={loading}
        />
      )}
      {editModal && (
        <EditFamilyMemberModal
          editIndex={editIndex}
          members={userData?.familyMembers}
          setMembers={setMembers}
          setEditModal={setEditModal}
          setUpdate={setUpdate}
        />
      )}
    </div>
  );
};

export default UserDetailSection;

import { Fragment, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import {
  AccountLogo,
  EditIcon,
  RedBin,
  SideImg,
  UserProfile,
} from "../../assets/export";
import AddFamilyMemberModal from "../../components/onboarding/AddFamilyMemberModal";
import Button from "../../components/app/landingPage/Inputs/Button";
import { useFormik } from "formik";
import { addFamilMemberValues } from "../../init/app/userInterface";
import { addFamilMemberSchema } from "../../schema/app/userInterface";
import { getAgeFromDate, phoneFormatter } from "../../lib/helpers";
import EditFamilyMemberModal from "../../components/onboarding/EditFamilyMemberModal";
import { useCreateFamilyMember } from "../../hooks/api/Post";
import { processUserFamilyMember } from "../../lib/utils";
import { useNavigate } from "react-router";
import AccountSuccess from "./AccountSuccess";

const CreateFamilyMember = () => {
  const { postData, loading } = useCreateFamilyMember();
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [isMemberAdded, setIsMemberAdded] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  const [editIndex, setEditIndex] = useState(null);
  const [members, setMembers] = useState([]);

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
      console.log("Form values:", values);
      const formattedDate = new Date(values.db).toISOString();

      // Update local state if needed
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

      // Handle file upload
      if (values.userImage) {
        formData.append("profilePicture", values.userImage);
      }

      // Relationship (array → send only names or ids as needed)

      // Gender (assuming it’s an array or single value — adjust as needed)

      // Example: add description if needed
      formData.append("description", values.descriptions || "");

      // Now send formData via POST
      postData("/user/create-family-member", formData, processUserFamilyMember);

      setIsMemberAdded(true);
      // setIsModal(false);
      action.resetForm();
    },
  });

  const handleCreateFamily = () => {
    setIsCreated(true);
  };

  return (
    <Fragment>
      {isCreated ? (
        <AccountSuccess onClick={() => navigate("/user/dashboard")} />
      ) : (
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
          <div className="p-4 lg:block hidden">
            <img src={SideImg} />
          </div>
          <div className="flex flex-col justify-center items-center lg:h-auto h-screen md:pl-0 pl-8">
            <div className="pb-4 text-center lg:w-[350px] ">
              <div className="lg:w-[350px] w-[450px] flex justify-center mb-8">
                <img src={AccountLogo} className="w-[216px]" />
              </div>
              <p className="text-[32px] font-bold capitalize">
                Add Family Members{" "}
              </p>
              <p className="text-[16px] text-[#565656]">
                Please enter family member details to continue
              </p>
            </div>

            <div className="space-y-4 lg:w-[350px] md:w-[500px] w-[320px]">
              <div className="border border-dashed border-[rgba(85,85,85,0.2)] bg-[#EAEAEA50] rounded-2xl flex justify-center items-center h-[142px]">
                <p
                  onClick={() => {
                    setIsModal(true);
                  }}
                  className="underline text-[#212121] cursor-pointer"
                >
                  + Add New Family Member{" "}
                </p>
              </div>
              {!isMemberAdded ? (
                <div>
                  <div className=" lg:w-[350px] md:w-[500px] w-[320px] ">
                    <Button text={"Send"} />
                  </div>

                  <button
                    type="button"
                    className="w-full flex justify-center items-center gap-1 cursor-pointer mt-6"
                  >
                    <IoIosArrowDropleftCircle className="text-lg text-[#212121]" />
                    <p className="text-[12px] uppercase font-bold leading-none tracking-wider text-[#212121] ">
                      Back
                    </p>
                  </button>
                </div>
              ) : (
                <>
                  <div className="lg:w-[350px] md:w-[500px] w-[320px] max-h-[250px] overflow-y-auto overflow-x-hidden p-3 space-y-4">
                    {members?.map((values, index) => (
                      <div key={index}>
                        <div className=" rounded-[12px] h-[194px] p-4 shadow-[0_0_16px_rgba(17,17,26,0.1)] ">
                          <div className="grid grid-cols-6 justify-between items-center gap-2 border-b-[1px] border-b-[#D9D9D9] pb-2">
                            <div className="col-span-5 flex items-center gap-2">
                              <div>
                                <img
                                  src={
                                    values.userImage
                                      ? URL.createObjectURL(values.userImage)
                                      : UserProfile
                                  }
                                  alt="Profile"
                                  className="w-10 h-10 rounded-full border-2 border-blue-600"
                                />
                              </div>

                              <div className="min-w-0">
                                {" "}
                                {/* important: restrict shrinking */}
                                <p className="capitalize text-[16px] font-medium truncate">
                                  {values.fullname || "John Alex"}
                                </p>
                                <p className="text-[12px] text-[#565656] truncate max-w-[200px]">
                                  {values.email || ""}
                                </p>
                                <p className="text-nowrap text-[12px] text-[#565656]">
                                  +1 {phoneFormatter(values.phone) || ""}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer">
                              <span
                                onClick={() => {
                                  setEditIndex(index);
                                  setEditModal(true);
                                }}
                              >
                                <img src={EditIcon} />
                              </span>
                              <span>
                                <img src={RedBin} />
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-4 text-[rgb(33,33,33)] text-[14px] border-b-[1px] border-b-[#D9D9D9] py-3">
                            <div className="col-span-1 ">
                              {getAgeFromDate(values.db)}
                            </div>
                            <div className="col-span-3 border-l-[1px] border-l-[#D9D9D9] pl-6">
                              {values?.gender?.map((item) => item?.name) || ""}
                            </div>
                          </div>
                          <div>
                            <p className="text-[#565656] text-[14px] py-3">
                              {values.descriptions || ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=" mt-4 lg:w-[350px] md:w-[500px] w-[320px] ">
                    <Button
                      text={"Next"}
                      onClick={handleCreateFamily}
                      loading={loading}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
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
          members={members}
          setMembers={setMembers}
          setEditModal={setEditModal} // <-- you should add this if you want to close the modal
        />
      )}
    </Fragment>
  );
};

export default CreateFamilyMember;

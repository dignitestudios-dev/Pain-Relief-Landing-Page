import { Fragment, useEffect, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { AccountLogo, EditIcon, RedBin, SideImg } from "../../assets/export";
import AddFamilyMemberModal from "../../components/onboarding/AddFamilyMemberModal";
import Button from "../../components/app/landingPage/Inputs/Button";
import { useFormik } from "formik";
import { addFamilMemberValues } from "../../init/app/userInterface";
import { addFamilMemberSchema } from "../../schema/app/userInterface";
import { getAgeFromDate, phoneFormatter } from "../../lib/helpers";
import EditFamilyMemberModal from "../../components/onboarding/EditFamilyMemberModal";
import {
  useCreateFamilyMember,
  useDeleteFamilyMember,
} from "../../hooks/api/Post";
import {
  processDeleteFamilyMember,
  processUserFamilyMember,
} from "../../lib/utils";
import { useNavigate } from "react-router";
import AccountSuccess from "./AccountSuccess";
import DeleteFamilyModal from "../../components/app/userInterface/dashboard/userprofile/DeleteFamilyModal";
import { useGetCards } from "../../hooks/api/Get";

const CreateFamilyMember = () => {
  const { postData, loading } = useCreateFamilyMember();
  const { data, loading: loader } = useGetCards(
    "/payment/get-subscription-user"
  );

  const { postData: deleteData, loading: deleteLoader } =
    useDeleteFamilyMember();

  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [isMemberAdded, setIsMemberAdded] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [members, setMembers] = useState([]);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [familyError, setFamilyError] = useState("");
  const [error, setErrors] = useState("");

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
      console.log("🚀 ~ CreateFamilyMember ~ values:", values);
      const formattedDate = new Date(values.db).toISOString();
      const formData = new FormData();

      formData.append("name", values.fullname);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("dateOfBirth", formattedDate);
      formData.append("gender", values.gender || "");
      formData.append("relationship", values.relation || "");

      if (values.userImage) {
        formData.append("profilePicture", values.userImage);
      }

      formData.append("description", values.descriptions || "");

      postData(
        "/user/create-family-member",
        formData,
        processUserFamilyMember,
        setIsModal,
        () => {},
        setMembers
      );
      action.resetForm();
      setIsMemberAdded(true);
    },
  });
  const storedMembers = JSON.parse(sessionStorage.getItem("familyMembers"));

  const handleCreateFamily = () => {
    setIsCreated(true);
  };

  const handleDeleteMember = () => {
    deleteData(
      "/user/delete-family-member",
      selectedMemberId,
      processDeleteFamilyMember,
      setDeleteModal,
      () => {}
    );
    setMembers("");
  };
  const openDeleteModal = (id) => {
    setSelectedMemberId(id);
    setDeleteModal(true);
  };

  const planType = data?.userSubscription?.priceDetails?.planType;

  const maxFamilyMembers =
    planType === "individual"
      ? 1
      : planType === "couples"
      ? 2
      : planType === "family"
      ? 4
      : 5;
  const isDisabled = storedMembers?.length >= maxFamilyMembers;

  useEffect(() => {
    if (isDisabled) {
      setFamilyError("You’ve reached your family member limit.");
    } else {
      setFamilyError("");
    }
  }, [isDisabled]);

  const handleValidate = () => {
    if (members?.length === 0) {
      setErrors("Please Add family members before sending");
    } else {
      setErrors("");
    }
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
              <div className="border border-dashed border-[rgba(85,85,85,0.2)] bg-[#EAEAEA50] rounded-2xl flex justify-center items-center h-[142px] flex-col">
                <p
                  onClick={() => {
                    setIsModal(true);
                  }}
                  className={`underline text-[#212121] cursor-pointer ${
                    isDisabled ? "opacity-50 pointer-events-none" : ""
                  }`}
                >
                  + Add New Family Member
                </p>
                {familyError && (
                  <p className="text-red-600 text-[13px] text-center mt-2">
                    {familyError}
                  </p>
                )}
              </div>
              {members?.length === 0 && error && (
                <div className="text-red-500 mb-2">{error}</div>
              )}

              {!storedMembers?.length > 0 ? (
                <div>
                  <div className=" lg:w-[350px] md:w-[500px] w-[320px] ">
                    <Button text={"Send"} onClick={handleValidate} />
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsCreated(true)}
                    className="w-full flex justify-center items-center gap-1 cursor-pointer mt-6"
                  >
                    {/* <IoIosArrowDropleftCircle className="text-lg text-[#212121]" /> */}
                    <p className="text-[12px] uppercase font-bold leading-none tracking-wider text-[#212121] ">
                      Skip
                    </p>
                  </button>
                </div>
              ) : (
                <>
                  <div className="lg:w-[350px] md:w-[500px] w-[320px] max-h-[250px] overflow-y-auto overflow-x-hidden p-3 space-y-4">
                    {storedMembers?.map((values, index) => (
                      <div key={index}>
                        <div className=" rounded-[12px]  p-4 shadow-[0_0_16px_rgba(17,17,26,0.1)] ">
                          <div className="grid grid-cols-6 justify-between items-center gap-2 border-b-[1px] border-b-[#D9D9D9] pb-2">
                            <div className="col-span-5 flex items-center gap-2">
                              <div>
                                <img
                                  src={values?.profilePicture}
                                  alt="Profile"
                                  className="w-10 h-10 rounded-full border-2 border-blue-600"
                                />
                              </div>

                              <div className="min-w-0">
                                {" "}
                                {/* important: restrict shrinking */}
                                <p className="capitalize text-[16px] font-medium truncate">
                                  {values.name}
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
                              <button
                                onClick={() => openDeleteModal(values._id)}
                              >
                                <img
                                  src={RedBin}
                                  className="h-[17px] w-[17px]"
                                  alt="Delete"
                                />
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-4 text-[rgb(33,33,33)] text-[14px] border-b-[1px] border-b-[#D9D9D9] py-3">
                            <div className="col-span-1 ">
                              {getAgeFromDate(values.dateOfBirth)}
                            </div>
                            <div className="col-span-3 border-l-[1px] border-l-[#D9D9D9] pl-6">
                              {values?.gender}
                            </div>
                          </div>
                          <div>
                            <p className="text-[#565656] text-[14px] py-3 text-wrap break-words ">
                              {values.description || ""}
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
          members={storedMembers}
          setMembers={setMembers}
          setEditModal={setEditModal}
        />
      )}
      {deleteModal && (
        <DeleteFamilyModal
          onClick={handleDeleteMember}
          onClose={() => setDeleteModal(false)}
          loading={deleteLoader}
        />
      )}
    </Fragment>
  );
};

export default CreateFamilyMember;

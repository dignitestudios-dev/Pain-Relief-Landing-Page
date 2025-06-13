import { ProfileImg } from "../../../../../assets/export";
import InputField from "../../../../onboarding/InputField";
import Button from "../../../landingPage/Inputs/Button";
import Calender from "../../../../global/DatePicker";
import { DropDownDark } from "../../../landingPage/Inputs/DropDown";
import { useFormik } from "formik";
import {
  userEditProfileSchema,
  userProfileSchema,
} from "../../../../../schema/app/userInterface";
import { useContext, useState } from "react";
import AddressMap from "../../../../global/AddressMap";
import GoogleMapComponent from "../../../../global/GoogleMap";
import { processEditUserProfile } from "../../../../../lib/utils";
import { useEditUserProfile } from "../../../../../hooks/api/Post";
import { AppContext } from "../../../../../context/AppContext";

const UserEditForm = ({ genderOptions, editProfile }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { loginAuth } = useContext(AppContext);
  const { loading, postData } = useEditUserProfile();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      fname: editProfile.firstName || "",
      lname: editProfile.lastName || "",
      email: editProfile.email || "",
      phone: editProfile.phone || "",
      dateOfBirth: editProfile.dateOfBirth || "",
      gender: editProfile.gender || "",
      address: editProfile?.addresses[0] || {},
      profilePicture: editProfile.profilePicture,
    },
    validationSchema: userEditProfileSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const formattedDate = new Date(values.dateOfBirth).toISOString();
      const formData = new FormData();
      formData.append("firstName", values.fname || "");
      formData.append("lastName", values.lname || "");
      formData.append("email", values.email || "");
      formData.append("phone", values.phone || "");
      formData.append("country", values.address.country || "");
      formData.append("address", values.address.address || "");
      formData.append("city", values.address.city || "");
      formData.append("state", values.address.state || "");
      formData.append("gender", values.gender || "");
      formData.append("dateOfBirth", formattedDate || "");
      formData.append(
        "location[coordinates][]",
        values?.address?.location?.coordinates?.[0]
      );
      formData.append(
        "location[coordinates][]",
        values?.address?.location?.coordinates?.[1]
      );

      formData.append("location[type]", "Point");

      if (selectedImage) {
        formData.append("profilePicture", selectedImage);
      }

      postData(
        "/user/update-profile",
        formData,
        processEditUserProfile,
        loginAuth
      );
    },
  });
  console.log(values.address);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setFieldValue("profilePicture", file);
    }
  };
  const onLocationSelect = (location) => {
    setFieldValue("address", {
      country: location.country || "",
      address: location.address || "",
      city: location.city || "",
      state: location.state || "",
      location: location.location || {
        type: "Point",
        coordinates: [],
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full md:w-[50%]">
        <h2 className="text-center font-[600] xl:text-[32px] lg:text-[24px] md:text-[20px] text-[18px]">
          Edit Profile
        </h2>
        <p className="text-[16px] text-[#565656] text-center">
          Please complete details to access all features
        </p>
      </div>

      <form className="w-full md:w-[50%] mt-4" onSubmit={handleSubmit}>
        <div className="flex items-center gap-4 mb-4">
          <label
            htmlFor="profileUpload"
            className="cursor-pointer bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] p-[3px] rounded-full"
          >
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : values?.profilePicture || ProfileImg
              }
              alt="Avatar"
              className="w-16 h-16 rounded-full bg-white object-cover"
            />

            <input
              id="profileUpload"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <h2 className="text-[16px] font-[500] cursor-pointer">
            Change Profile
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputField
            placeholder="John"
            id={"fname"}
            name="fname"
            text="First name"
            value={values.fname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.fname}
            touched={touched.fname}
          />
          <InputField
            id={"lname"}
            name="lname"
            placeholder="Doe"
            text="Last name"
            value={values.lname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.lname}
            touched={touched.lname}
          />
          <InputField
            id={"email"}
            name="email"
            placeholder="olivia.james@gmail.com"
            text="Email Address (required)"
            disabled={true}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            id={"phone"}
            name="phone"
            placeholder="Mobile Number"
            text="Mobile Number"
            disabled={true}
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div>
            <Calender
              startDate={values.dateOfBirth}
              setStartDate={(date) => setFieldValue("dateOfBirth", date)}
              text={"DD/MM/YY"}
              isStyle={true}
              label={"Date of Birth (required)"}
            />
            {touched.dateOfBirth && errors.dateOfBirth && (
              <p className="text-red-600 text-xs mt-1">{errors.dateOfBirth}</p>
            )}
          </div>
          <DropDownDark
            label={"Gender (required)"}
            placeholder={"Select "}
            options={genderOptions}
            iscolor={true}
            value={values.gender}
            onChange={(selected) =>
              setFieldValue("gender", [
                { id: selected._id, name: selected.name },
              ])
            }
          />
        </div>
        <div className="mt-3">
          <GoogleMapComponent
            onLocationSelect={onLocationSelect}
            editAddress={values?.address}
          />
          {touched.address?.address && errors.address?.address && (
            <p className="text-red-600 text-[12px]">{errors.address.address}</p>
          )}

          {console.log(errors.address?.address, "errors.address?.address==>")}
        </div>

        <div className="my-5">
          <Button text="Save" type={"submit"} loading={loading} />
        </div>
      </form>
    </div>
  );
};

export default UserEditForm;

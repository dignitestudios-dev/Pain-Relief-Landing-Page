import { ProfileImg } from "../../../../../assets/export";
import InputField from "../../../../onboarding/InputField";
import Button from "../../../landingPage/Inputs/Button";
import Calender from "../../../../global/DatePicker";
import { DropDownDark } from "../../../landingPage/Inputs/DropDown";
import { useFormik } from "formik";
import { userProfileSchema } from "../../../../../schema/app/userInterface";
import { useState } from "react";
import AddressMap from "../../../../global/AddressMap";
import GoogleMapComponent from "../../../../global/GoogleMap";

const UserEditForm = ({ genderOptions, editProfile }) => {
  const [selectedImage, setSelectedImage] = useState(null);

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
      location: editProfile.location || "",
      profilePicture: editProfile.profilePicture,
    },
    validationSchema: userProfileSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = new FormData();

      // 👇 Append all form fields
      formData.append("name", values.fname || "");
      formData.append("lname", values.lname || "");
      formData.append("email", values.email || "");
      formData.append("phone", values.phone || "");
      formData.append("npi", values.npi || "");
      formData.append("website", values.website || "");
      formData.append("description", values.description || "");

      // 👇 Append image file
      if (selectedImage) {
        formData.append("profilePicture", selectedImage);
      }

      //   postData(
      //     "/provider/update-profile",
      //     formData,
      //     // processEditProviderProfile,
      //     setUpdate
      //   );
    },
  });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Image selected:", file);
      setSelectedImage(file);
      setFieldValue("profilePicture", file);
    }
  };
  const onLocationSelect = (data) => {
    
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
                  : editProfile?.profilePicture || ProfileImg
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
        <div className="w-[421px] h-[194px] mt-3 rounded-md overflow-hidden">
          <GoogleMapComponent
          onLocationSelect={onLocationSelect}
          // editProfile={}
          />
        </div>

        <div className="my-5">
          <Button text="Save" type={"submit"} />
        </div>
      </form>
    </div>
  );
};

export default UserEditForm;

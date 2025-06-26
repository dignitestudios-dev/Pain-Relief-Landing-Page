import { useFormik } from "formik";
import { SideImg, UserProfile } from "../../assets/export";
import InputField from "../../components/onboarding/InputField";

import Button from "../../components/app/landingPage/Inputs/Button";
import { useContext, useEffect, useState } from "react";
import GoogleMapComponent from "../../components/global/GoogleMap";
import { userProfileSchema } from "../../schema/app/userInterface";
import { userProfileValues } from "../../init/app/userInterface";
import PhoneInput from "../../components/app/landingPage/Inputs/PhoneInput";
import { phoneFormatter } from "../../lib/helpers";
import { DropDownDark } from "../../components/app/landingPage/Inputs/DropDown";
import Calender from "../../components/global/DatePicker";
import { AppContext } from "../../context/AppContext";
import { useProviderCreateProfile } from "../../hooks/api/Post";
import { processUserProfileCreate } from "../../lib/utils";

const genderOptions = [
  { _id: "1", name: "Male" },
  { _id: "2", name: "Female" },
  { _id: "3", name: "Other" },
];

const CreateProfile = () => {
  const { userData } = useContext(AppContext);

  const [userImage, setUserImage] = useState("");
  const [addressError, setAddressErrors] = useState({ address: "" });
  const [form, setForm] = useState({ address: "" });
  const { loading, postData } = useProviderCreateProfile();
  console.log(addressError, "addressError");
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: userProfileValues,
    validationSchema: userProfileSchema,
    onSubmit: (values) => {
      const isoDate = new Date(values.db).toISOString().split("T")[0];
      const gender = values.gender.map((item) => item.name);
      const formData = new FormData();
      formData.append("firstName", values.fname);
      formData.append("lastName", values.lname);
      formData.append("phone", values.phone);
      formData.append("country", values.country);
      formData.append("address", values.address);
      formData.append("city", values.city);
      formData.append("state", values.state);
      formData.append("dateOfBirth", isoDate);
      formData.append("gender", gender);
      formData.append("profilePicture", values.userImage);
      formData.append(
        "location[coordinates][]",
        values?.location?.coordinates?.[0]
      );
      formData.append(
        "location[coordinates][]",
        values?.location?.coordinates?.[1]
      );

      formData.append("location[type]", "Point");
      postData(
        "/user/complete-profile",
        null,
        processUserProfileCreate,
        formData
      );
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserImage(file);
      setFieldValue("userImage", file);
    }
  };

  useEffect(() => {
    const email = userData?.email;
    const phone = userData?.phone;

    const firstName = userData?.firstName;
    const lastName = userData?.lastName;

    if (firstName) setFieldValue("fname", firstName);
    if (lastName) setFieldValue("lname", lastName);

    if (phone) setFieldValue("phone", phone);
    if (email) setFieldValue("email", email);
  }, [userData, setFieldValue]);

  const onLocationSelect = (data) => {
    setFieldValue("country", data.country);
    setFieldValue("address", data.address);
    setFieldValue("city", data.city);
    setFieldValue("state", data.state);
    setFieldValue("zipCode", data.zipCode);
    setFieldValue("location", data.location);
    setFieldValue("address", data.address || "");
  };
  const handleCapitalizedChange = (e) => {
    const { name, value } = e.target;

    const formatted =
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    handleChange({
      target: {
        name,
        value: formatted,
      },
    });
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen">
        <div className="pb-4 text-center xl:w-[500px] lg:w-[400px] md:w-[500px] w-[400px]">
          <p className="text-[32px] font-semibold capitalize">
            Complete Profile Details
          </p>
          <p className="text-[16px] text-[#565656] font-medium">
            Please complete details to access all features
          </p>
        </div>
        <div className="flex items-center xl:w-[500px] lg:w-[400px] md:w-[500px] w-[320px]">
          <div className="md:w-[80px] w-[60px] md:h-[80px] h-[60px] rounded-full  overflow-hidden">
            <img
              className="object-cover md:w-[80px] w-[60px] md:h-[80px] h-[60px] "
              src={
                values.userImage
                  ? URL.createObjectURL(values.userImage)
                  : UserProfile
              }
            />
          </div>
          <div className="pl-2 ">
            <p className="text-[#BEC2C9]">
              <span className="relative bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
                Upload a file
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e)}
                  className="absolute inset-0 opacity-0 cursor-pointer -left-24"
                />
              </span>{" "}
              or drag and drop PNG, JPG up to 10mb
            </p>
            {touched.userImage && errors.userImage && (
              <p className="text-red-600 text-xs mt-1">{errors.userImage}</p>
            )}
          </div>
        </div>

        <div className="py-4 xl:w-[500px] lg:w-[400px] md:w-[600px]">
          <p className="text-[24px] font-semibold capitalize">Basic Details</p>
        </div>

        <div className="space-y-4 xl:w-[500px] lg:w-[400px] md:w-[600px] w-[350px]">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <InputField
                text={"First Name (required)"}
                placeholder={"First Name"}
                type={"text"}
                id={"fname"}
                name={"fname"}
                maxLength={50}
                value={values.fname}
                onChange={handleCapitalizedChange}
                onBlur={handleBlur}
                error={errors.fname}
                touched={touched.fname}
              />
              <InputField
                text={"Last Name"}
                placeholder={"Last Name"}
                type={"text"}
                id={"lname"}
                name={"lname"}
                maxLength={50}
                value={values.lname}
                onChange={handleCapitalizedChange}
                onBlur={handleBlur}
                error={errors.lname}
                touched={touched.lname}
              />
              <InputField
                text={"Email Address"}
                placeholder={"Email Address"}
                type={"email"}
                id={"email"}
                name={"email"}
                maxLength={50}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
                disabled={true}
              />
              <div>
                <PhoneInput
                  label={"Phone Number (required)"}
                  isLight={true}
                  isLightTwo={true}
                  value={phoneFormatter(values.phone)}
                  id={"phone"}
                  name={"phone"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  isDisabled={true}
                />
              </div>
              <div>
                <Calender
                  startDate={
                    values.db
                      ? new Date(values.db).toISOString().split("T")[0]
                      : values.db
                  }
                  setStartDate={(date) => setFieldValue("db", date)}
                  text={"DD/MM/YY"}
                  isStyle={true}
                  label={"Date of Birth (required)"}
                  max={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() - 18)
                    )
                  }
                />
                {touched.db && errors.db && (
                  <p className="text-red-600 text-xs mt-1">{errors.db}</p>
                )}
              </div>
              <div>
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
                {touched.gender && errors.gender && (
                  <p className="text-red-600 text-xs mt-1">{errors.gender}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <GoogleMapComponent
                onLocationSelect={onLocationSelect}
                editAddress={values.address}
                error={touched.address && errors.address}
              />
            </div>

            <div className="flex justify-end mt-3">
              <div className="w-[128px] ">
                <Button text={"Next"} type={"submit"} loading={loading} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;

import { SideImg, UserProfile } from "../../assets/export";
import InputField from "../../components/onboarding/InputField";
import { useFormik } from "formik";
import { providerInitialValues } from "../../init/app/userInformation";
import { providerSchema } from "../../schema/app/userInfoSchema";
import Button from "./../../components/app/landingPage/Inputs/Button";
import { useContext, useEffect, useState } from "react";
// import PhoneInput from "../../components/app/landingPage/Inputs/PhoneInput";
// import { phoneFormatter } from "../../lib/helpers";
import { useProviderCreateProfile } from "../../hooks/api/Post";
import { processProviderProfileCreate } from "../../lib/utils";
import { AppContext } from "../../context/AppContext";

const CreateProviderProfile = () => {
  const [userImage, setUserImage] = useState("");

  const { loading, postData } = useProviderCreateProfile();
  const { userData } = useContext(AppContext);
console.log(userData,"userData")
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: providerInitialValues,
    validationSchema: providerSchema,
    onSubmit: (values) => {
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("clinicName", values.clinicName);
      formData.append("profilePicture", values.userImage); // File object
      formData.append("phone", values?.number || "");
      formData.append("npi", values.providerNPI);
      formData.append("description", values.description);
      formData.append("website", values.website);
      postData(
        "/provider/complete-profile",
        null,
        processProviderProfileCreate,
        formData
      );
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserImage(file);
      setFieldValue("userImage", file); // this sets formik value
    }
  };

  useEffect(() => {
    const email = userData?.email;
    const phone = userData?.phone;
    // const nameParts = userData?.name;
    // const firstName = nameParts[0] || "";
    // const lastName = nameParts.slice(1).join(" ") || "";
    // const nameParts = `${userData?.firstName ?? ""} ${
    //   userData?.lastName ?? ""
    // }`.trim();

    // if (nameParts) {
    //   setFieldValue("name", nameParts);
    // }
    const nameParts = userData?.name;
    if (nameParts) setFieldValue("name", nameParts);

    if (phone) setFieldValue("number", phone);
    if (email) setFieldValue("email", email);
  }, [userData, setFieldValue]);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen">
        <div className="pb-4 text-center xl:w-[500px] lg:w-[400px] md:w-[500px] w-[400px]">
          <p className="text-[32px] font-semibold capitalize">
            Create Account Request
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

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 xl:w-[500px] lg:w-[400px] md:w-[600px] w-[350px]">
            <div className="grid grid-cols-2 gap-3">
              <InputField
                text="Name of Service Provider"
                placeholder="Enter your full name"
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                touched={touched.name}
                maxLength={50}
              />
              <InputField
                text="Name of Clinic/Practice (required)"
                placeholder="Name of Clinic"
                type="text"
                id="clinicName"
                name="clinicName"
                value={values.clinicName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.clinicName}
                touched={touched.clinicName}
                maxLength={50}
              />

              <InputField
                text="Email Address (required)"
                placeholder="Email Address"
                type="email"
                id="email"
                name="email"
                value={values?.email}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={50}
                disabled={true}
              />
              <div>
                <InputField
                  text="Mobile Number (required)"
                  placeholder="Mobile Number"
                  id="number"
                  name="number"
                  value={values?.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={true}
                />
                {/* <PhoneInput
                  isDisabled={true}
                  label={"Mobile Number (required)"}
                  value={values.number}
                  // value={phoneFormatter(values.number)}
                  id={"number"}
                  name={"number"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.number}
                  touched={touched.number}
                  autoComplete="off"
                /> */}
              </div>
            </div>

            <InputField
              text="Provider Individual NPI (required)"
              placeholder="Enter your provider NPI"
              type="text"
              id="providerNPI"
              name="providerNPI"
              value={values.providerNPI}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.providerNPI}
              touched={touched.providerNPI}
              maxLength={10}
            />

            <InputField
              text="Website"
              placeholder="URL"
              type="text"
              id="website"
              name="website"
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.website}
              touched={touched.website}
              maxLength={100}
            />

            <div>
              <label className="text-[12px] text-[#121516] font-medium">
                Description (Required)
              </label>
              <textarea
                name="description"
                placeholder="Describe yourself"
                className={`xl:w-[500px] border
                 ${
                   touched.description && errors.description
                     ? "border-red-600 focus-within:border-[1px] focus-within:border-red-600"
                     : "border-[#BEC2C9] focus-within:border-[1px]  focus-within:border-[#55C9FA]"
                 }
                  rounded-[8px] p-2 mt-1`}
                rows={5}
                id="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {touched.description && errors.description && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <div className="w-[128px]">
                <Button text="Next" loading={loading} type={"submit"} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProviderProfile;

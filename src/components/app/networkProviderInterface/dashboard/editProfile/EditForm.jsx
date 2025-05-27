import { ProfileImg } from "../../../../../assets/export";
import InputField from "../../../../onboarding/InputField";
import Button from "../../../landingPage/Inputs/Button";
import { IoIosArrowBack } from "react-icons/io";
import PhoneInput from "../../../landingPage/Inputs/PhoneInput";
import { phoneFormatter } from "../../../../../lib/helpers";

const EditForm = ({
  editProfile,
  selectedImage,
  handleFileChange,
  values,
  errors,
  touched,
  handleBlur,
  handleSubmit,
  handleChange,
  loading,
}) => {
  console.log(editProfile, "editProfile");
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
        {/* Profile Image Upload */}
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

        {/* Responsive Grid Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputField
            placeholder="John"
            id={"name"}
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
            text="Name of Chiropractor"
          />
          <InputField
            id={"clinicName"}
            name="clinicName"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.clinicName}
            touched={touched.clinicName}
            value={values.clinicName}
            placeholder="Doe"
            text="Name of Clinic/Practice (required)"
          />
          <InputField
            id={"email"}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            value={values.email}
            placeholder="olivia.james@gmail.com"
            text="Email Address (required)"
            disabled={true}
          />
          <InputField
            id={"phone"}
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone}
            touched={touched.phone}
            value={values.phone}
            placeholder="Mobile Number"
            text="Mobile Number"
            disabled={true}
          />
          {/* <div className="h-[20px]">
            <PhoneInput
              label={"Mobile Number (required)"}
              isDisabled={true}
              value={phoneFormatter(values.phone)}
              onChange={handleChange}
              onBlur={handleBlur}
              id={"phone"}
              name={"phone"}
              isLight={true}
              error={errors.phone}
              touched={touched.phone}
            />
          </div> */}
        </div>
        <div className="mt-4">
          <InputField
            id={"npi"}
            name="npi"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.npi}
            touched={touched.npi}
            value={values.npi}
            placeholder="Enter your NPI"
            text="Provider Individual NPI (required)"
          />
        </div>

        <div className="mt-4">
          <InputField
            id={"website"}
            name="website"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.website}
            touched={touched.website}
            placeholder="URL"
            text="Website"
            value={values.website}
          />
        </div>

        <div className="mt-4">
          <label className="text-[12px] text-[#121516] font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={5}
            className="w-full rounded-[8px] bg-transparent border border-[#BEC2C9] p-2 mt-1"
            placeholder="Describe yourself"
          ></textarea>
        </div>

        <div className="my-5">
          <Button text="Save" type={"submit"} loading={loading} />
          <div className="flex items-center justify-center mt-4">
            <IoIosArrowBack />
            <button className="text-[16px] font-[600] ml-2" type="button">
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;

import { useState } from "react";
import { OtpLogo, SideImg } from "../../assets/export";
import AuthInput from "../../components/onboarding/AuthInput";
import PasswordUpdatedModal from "../../components/onboarding/PasswordUpdatedModal";
import Button from "../../components/app/landingPage/Inputs/Button";
import { updatePasswordSchema } from "../../schema/authentication/authenticationSchema";
import { useFormik } from "formik";
import { updatePasswordValues } from "../../init/authentication/authenticationValues";
import { useUpdatePassword } from "../../hooks/api/Post";
import { processUpdatePassword } from "../../lib/utils";
import { useNavigate } from "react-router";

const UpdatePassword = () => {
  const navigate = useNavigate();

  const { loading, postData } = useUpdatePassword();
  const [isModal, setIsModal] = useState(false);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: updatePasswordValues,
      validationSchema: updatePasswordSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        let obj = {
          newPassword: values.password,
        };
        postData(
          "/auth/reset-password",
          false,
          null,
          obj,
          processUpdatePassword,
          setIsModal
        );
      },
    });
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img className="xxl:w-[1200px] xl:w-[1000px]" src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center lg:h-auto h-screen">
        <div className="pb-4 text-center space-y-4">
          <div className="xxl:h-[188px] xxl:w-[480px] w-[350px] flex justify-center mb-8">
            <img src={OtpLogo} className="w-[216px]" />
          </div>
          <p className="xxl:text-[52px] text-[32px] font-semibold capitalize">
            Set New Password{" "}
          </p>
          <p className="xxl:text-[24px] text-[16px] capitalize text-[#565656]">
            Enter new password to Continue
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="xxl:w-[650px] xxl:space-y-8 space-y-4 lg:w-[350px] md:w-[550px] w-[320px]">
            <AuthInput
              text={" New Password"}
              placeholder={"New Password"}
              type={"password"}
              id={"password"}
              name={"password"}
              Length={50}
              maxLength={50}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors?.password}
              touched={touched?.password}
            />
            <AuthInput
              text={" Confirm Password"}
              placeholder={"Confirm Password"}
              type={"password"}
              id={"cPassword"}
              name={"cPassword"}
              Length={50}
              maxLength={50}
              value={values.cPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors?.cPassword}
              touched={touched?.cPassword}
            />
          </div>

          <div className="xxl:w-[650px] xl:w-[350px] lg:w-[350px] md:w-[550px] w-full mt-6">
            <Button text="Save" loading={loading} />
          </div>
        </form>
      </div>
      {isModal && (
        <PasswordUpdatedModal
          isOpen={setIsModal}
          onClick={() => navigate("/auth/sign-in")}
        />
      )}
    </div>
  );
};

export default UpdatePassword;

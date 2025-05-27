import { IoIosArrowDropleftCircle } from "react-icons/io";
import {
  Logo,
  NetworkProviderDark,
  NetworkProviderLight,
  SideImg,
  SmallTick,
  UserDark,
  UserWhite,
} from "../../assets/export";
import SocialLogin from "../../components/onboarding/SocialLogin";
import AuthInput from "../../components/onboarding/AuthInput";
import SelectField from "../../components/onboarding/SelectField";
import { useNavigate } from "react-router";
import Button from "../../components/app/landingPage/Inputs/Button";
import { useLogin } from "../../hooks/api/Post";
import { useFormik } from "formik";
import { signInValues } from "../../init/authentication/authenticationValues";
import { signInSchema } from "../../schema/authentication/authenticationSchema";
import { processLogin } from "../../lib/utils";
import { useState } from "react";
import RequestModal from "../../components/onboarding/RequestModal";

const Login = () => {
  const navigate = useNavigate();
  const { loading, postData } = useLogin();
  const [requestModal, setRequestModal] = useState(false);

  const [isSelected, setIsSelected] = useState("");

  const {
    values,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: signInValues,
    validationSchema: signInSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, action) => {
      console.log("🚀 ~ onSubmit: ~ action:", action);
      let payload = {
        email: values.email,
        password: values.password,
        fcmToken: "123",
        role: values?.type === "user" ? "user" : "provider",
      };
      let routeName =
        values?.type === "user" ? "/user/dashboard" : "/provider/dashboard";
      postData(
        "/auth/login",
        false,
        null,
        payload,
        processLogin,
        routeName,
        setRequestModal
      );
    },
  });

  const handleSelection = (text) => {
    setIsSelected(text);
    setFieldValue("type", text);
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full bg-[#fcfcfc]">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center h-auto">
        <div className="my-4 text-center">
          <div className="w-[158px] h-[158px]">
            <img src={Logo} />
          </div>
          <p className="text-[26px] mt-2  font-semibold capitalize">
            Pain Relief USA
          </p>
          <p className="text-[14px] font-[500] capitalize text-[#565656]">
            pain Relief made easy
          </p>
        </div>
        <div className="py-4">
          <p className="text-[32px] font-[600] capitalize">Welcome Back</p>
          <p className="text-[16px]  capitalize text-[#565656]">
            Please enter details to continue
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 lg:w-[350px] md:w-[550px] w-[320px]">
            <div className=" flex justify-between gap-2">
              <SelectField
                icon={UserWhite}
                iconDark={UserDark}
                label="I'm a member"
                value="user"
                tick={SmallTick}
                isSelected={isSelected}
                handleSelection={handleSelection}
              />
              <SelectField
                icon={NetworkProviderLight}
                iconDark={NetworkProviderDark}
                label="I’m a service provider"
                value="provider"
                tick={SmallTick}
                isSelected={isSelected}
                handleSelection={handleSelection}
              />
            </div>
            {errors?.type && touched?.type && (
              <p className="text-red-600 text-[12px]">{errors?.type}</p>
            )}

            <AuthInput
              text={"Email address"}
              placeholder={"Enter email here"}
              type={"email"}
              id={"email"}
              name={"email"}
              maxLength={50}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors?.email}
              touched={touched?.email}
            />
            <AuthInput
              text={" Password"}
              placeholder={"Password"}
              type={"password"}
              id={"password"}
              name={"password"}
              maxLength={50}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors?.password}
              touched={touched?.password}
            />
          </div>
          <div className="flex my-2 justify-end lg:w-[350px] md:w-[550px] w-[320px]">
            <p
              type="button"
              className="text-[#181818] text-[12px] font-[500] pt-1 cursor-pointer"
              onClick={() => navigate("/auth/forget-password")}
            >
              Forgot password?
            </p>
          </div>
          <div className="w-[350px] mt-3 mb-4">
            <Button text={"Login"} loading={loading} />
          </div>
        </form>
        <div className="flex items-center  lg:w-[350px] md:w-[550px] w-[320px]">
          <hr className="w-full border-t border-[#D9D9D9]" />
          <p className="px-2 text-[#D9D9D9]">OR</p>
          <hr className="w-full border-t border-[#D9D9D9]" />
        </div>
        <SocialLogin />
        <div className="flex items-center justify-center gap-2 my-6  ">
          <p className="text-center text-[16px] leading-[21.6px] text-[#181818]">
            Don’t have an account?
            <span
              className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent font-medium pl-1 cursor-pointer "
              onClick={() => navigate("/auth/account-selection")}
            >
              Sign Up
            </span>
          </p>
        </div>
        <button
          type="button"
          className="w-full flex justify-center  items-center gap-1 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowDropleftCircle className="text-lg text-[#212121]" />
          <p className="text-[12px] uppercase font-bold leading-none tracking-wider text-[#212121] ">
            Back
          </p>
        </button>
      </div>
      {requestModal && (
        <RequestModal setIsOpen={setRequestModal} isLogin={true} />
      )}
    </div>
  );
};

export default Login;

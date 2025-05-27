import { SideImg } from "../../assets/export";
import AuthInput from "../../components/onboarding/AuthInput";
import Button from "../../components/app/landingPage/Inputs/Button";
import SocialLogin from "../../components/onboarding/SocialLogin";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";
import { signUpValues } from "../../init/authentication/authenticationValues";
import { signupSchema } from "../../schema/authentication/authenticationSchema";
import { useSignUp } from "../../hooks/api/Post";
import { processSignup } from "../../lib/utils";
import { phoneFormatter } from "../../lib/helpers";
import PhoneInput from "../../components/app/landingPage/Inputs/PhoneInput";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userType = location.state?.userType;

  const { loading, postData } = useSignUp();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: signUpValues,
      validationSchema: signupSchema,
      onSubmit: (values) => {
        let formattedPhoneNumber = values?.number.startsWith("+1")
          ? values?.number
          : `+1${values?.number}`;

        let payload = {
          firstName: values.fname,
          lastName: values.lname,
          email: values.email,
          phone: formattedPhoneNumber,
          password: values.password,
          role: userType === "user" ? "user" : "provider",
          idToken: "123",
          fcmToken: "123",
        };

        postData("/auth/signup", payload, processSignup);
      },
    });

  // useEffect(() => {
  //   if (isSuccess) {
  //     const handleSubmit = async (e) => {
  //       e.preventDefault();
  //       try {
  //         const response = await axios.post("/auth/verify-reset-otp", {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         if (response.status === 200 && response?.data?.is_verified === true) {
  //           SuccessToast("OTP Send");
  //           navigate("/auth/verify-otp");
  //         }
  //       } catch (err) {
  //         console.log("🚀 ~ createAccount ~ err:", err);
  //         ErrorToast(err?.response?.data?.message);
  //       }
  //     };
  //     handleSubmit();
  //   }
  // }, [isSuccess]);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full bg-[#fcfcfc] ">
      <div className="p-4 lg:block  hidden">
        <img src={SideImg} />
      </div>
      <div
        className={`flex flex-col ${
          userType === "user" ? "justify-center" : "mt-16"
        } items-center lg:h-auto md:h-screen  `}
      >
        <div className="pb-4 text-center">
          <p className="text-[32px] font-[600] capitalize text-[#181818] ">
            Sign Up
          </p>
          <p className="text-[16px] text-[#565656]">
            Please enter details to continue
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 lg:w-[350px] md:w-[550px] w-[340px]">
            <div className="grid grid-cols-2 justify-between gap-2">
              <AuthInput
                text="First Name"
                placeholder="First Name"
                type="text"
                id="fname"
                name="fname"
                value={values.fname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.fname}
                touched={touched.fname}
                maxLength={50}
              />
              <AuthInput
                text="Last Name"
                placeholder="Last Name"
                type="text"
                id="lname"
                name="lname"
                value={values.lname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lname && errors.lname}
                touched={touched.lname}
                maxLength={50}
              />
            </div>

            <AuthInput
              text="Email Address"
              placeholder="Email Address"
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
              maxLength={50}
            />
            <PhoneInput
              value={phoneFormatter(values.number)}
              id={"number"}
              name={"number"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.number}
              touched={touched.number}
              autoComplete="off"
            />

            <AuthInput
              text="Password"
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
              maxLength={50}
            />

            <AuthInput
              text="Confirm Password"
              placeholder="Confirm Password"
              type="password"
              id="cPassword"
              name="cPassword"
              value={values.cPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.cPassword}
              touched={touched.cPassword}
              maxLength={50}
            />
          </div>
          <div className="w-[350px] my-7">
            <Button text="Sign Up" loading={loading} />
          </div>
        </form>
        {userType === "user" && (
          <>
            <div className="flex items-center lg:w-[350px] md:w-[550px] w-[340px]">
              <hr className="w-full border-t border-[#D9D9D9]" />
              <p className="px-2 text-[#D9D9D9]">OR</p>
              <hr className="w-full border-t border-[#D9D9D9]" />
            </div>
            <SocialLogin />
          </>
        )}
        <div className="flex items-center justify-center gap-2 mt-4 mb-3 relative z-10">
          <p className="text-center text-[16px] leading-[21.6px] text-[#181818]">
            Already have an account?
            <span
              className="text-[#29ABE2] font-medium pl-1 cursor-pointer"
              onClick={() => navigate("/auth/sign-in")}
            >
              Sign In
            </span>
          </p>
        </div>
        <button
          type="button"
          className="w-full flex justify-center items-center gap-1 cursor-pointer my-5"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowDropleftCircle className="text-lg text-[#212121]" />
          <p className="text-[12px] uppercase font-bold leading-none tracking-wider text-[#212121] ">
            Back
          </p>
        </button>
      </div>
    </div>
  );
};

export default SignUp;

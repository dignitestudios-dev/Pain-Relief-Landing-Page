import { SideImg } from "../../assets/export";
import AuthInput from "../../components/onboarding/AuthInput";
import Button from "../../components/app/landingPage/Inputs/Button";
import SocialLogin from "../../components/onboarding/SocialLogin";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { useFormik } from "formik";
import { signUpValues } from "../../init/authentication/authenticationValues";
import { signupSchema } from "../../schema/authentication/authenticationSchema";
import { useSignUp } from "../../hooks/api/Post";
import { processSignup } from "../../lib/utils";
import { phoneFormatter } from "../../lib/helpers";
import PhoneInput from "../../components/app/landingPage/Inputs/PhoneInput";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userType = location.state?.userType;
  const { fcmToken } = useContext(AppContext);
  console.log("🚀 ~ SignUp ~ fcmToken:", fcmToken);

  const [searchParams] = useSearchParams();
  const referralToken = searchParams.get("referral");

  const { loading, postData } = useSignUp();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: signUpValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: true,
      initialTouched: {
        fname: true,
        lname: true,
        email: true,
        number: true,
        password: true,
        cPassword: true,
      },
      onSubmit: (values) => {
        let formattedPhoneNumber = values?.number.startsWith("+1")
          ? values?.number
          : `+1${values?.number}`;

        let payload = {};

        if (referralToken) {
          payload = {
            firstName: values.fname,
            lastName: values.lname,
            email: values.email.toLocaleLowerCase(),
            phone: formattedPhoneNumber,
            password: values.password,
            referalLink: referralToken,
            role: "user",
            idToken: "123",
            fcmToken: fcmToken,
          };
        } else {
          payload = {
            firstName: values.fname,
            lastName: values.lname,
            email: values.email.toLocaleLowerCase(),
            phone: formattedPhoneNumber,
            password: values.password,
            role: userType === "user" ? "user" : "provider",
            idToken: "123",
            fcmToken: fcmToken,
          };
        }

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
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full bg-[#fcfcfc] ">
      <div className="p-4 lg:block  hidden">
        <img className="xxl:w-[1200px] xl:w-[1000px] w-full" src={SideImg} />
      </div>
      <div
        className={`flex flex-col ${
          userType === "user" ? "justify-center" : "xxl:mt-60 xl:mt-24 mt-16"
        } items-center lg:h-auto md:h-screen  `}
      >
        <div className="pb-4 text-center">
          <p className="text-[32px] xl:text-[40px] xxl:text-[56px] font-[600] capitalize text-[#181818] ">
            Sign Up
          </p>
          <p className="xxl:text-[28px] text-[16px] text-[#565656]">
            Please enter details to continue
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="xxl:space-y-8 space-y-4 xxl:w-[650px] lg:w-[350px] md:w-[550px] w-[340px]">
            <div className="grid grid-cols-2 justify-between gap-2">
              <AuthInput
                text="First Name"
                placeholder="First Name"
                type="text"
                id="fname"
                name="fname"
                value={values.fname}
                onChange={handleCapitalizedChange}
                onBlur={handleBlur}
                error={errors.fname}
                touched={touched.fname}
                maxLength={30}
              />
              <AuthInput
                text="Last Name"
                placeholder="Last Name"
                type="text"
                id="lname"
                name="lname"
                value={values.lname}
                onChange={handleCapitalizedChange}
                onBlur={handleBlur}
                error={touched.lname && errors.lname}
                touched={touched.lname}
                maxLength={30}
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
          <div className="xxl:w-[650px] w-[350px] my-7">
            <Button text="Sign Up" loading={loading} disabled={loading} />
          </div>
        </form>
        {userType === "user" && (
          <>
            <div className="flex items-center xxl:w-[650px] lg:w-[350px] md:w-[550px] w-[340px]">
              <hr className="w-full border-t border-[#D9D9D9]" />
              <p className="px-2 text-[#D9D9D9]">OR</p>
              <hr className="w-full border-t border-[#D9D9D9]" />
            </div>
            <SocialLogin />
          </>
        )}
        <div className="flex items-center justify-center gap-2 mt-4 mb-3 relative z-10">
          <p className="text-center xxl:text-[26px] text-[16px] leading-[21.6px] text-[#181818]">
            Already have an account?
            <span
              className="text-[#29ABE2] xxl:text-[26px] font-medium pl-1 cursor-pointer"
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
          <IoIosArrowDropleftCircle className="xxl:text-[26px] text-lg text-[#212121]" />
          <p className="xxl:text-[20px] text-[12px] uppercase font-bold leading-none tracking-wider text-[#212121] ">
            Back
          </p>
        </button>
      </div>
    </div>
  );
};

export default SignUp;

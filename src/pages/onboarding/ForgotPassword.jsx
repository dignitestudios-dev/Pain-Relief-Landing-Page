import { IoIosArrowDropleftCircle } from "react-icons/io";
import { OtpLogo, SideImg } from "../../assets/export";
import AuthInput from "../../components/onboarding/AuthInput";
import { useNavigate } from "react-router";
import Button from "../../components/app/landingPage/Inputs/Button";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full min-h-screen">
      {/* Left Image Panel */}
      <div className="p-4 hidden lg:block">
        <img src={SideImg} alt="Side" className="w-full h-full object-cover" />
      </div>

      {/* Right Form Panel */}
      <div className="flex flex-col justify-center items-center px-6 py-10">
        <div className="text-center w-full max-w-md">
          <div className="flex justify-center mb-8">
            <img src={OtpLogo} alt="Logo" className="w-52 sm:w-48" />
          </div>
          <p className="text-2xl sm:text-3xl font-semibold capitalize mb-1">
            Forgot Password
          </p>
          <p className="text-sm sm:text-base capitalize text-[#565656]">
            Enter your registered email address below
          </p>
        </div>

        <div className="xl:w-[350px] lg:w-[350px] md:w-[550px] w-full space-y-4 mt-8">
          <AuthInput
            text="Email address"
            placeholder="Enter email here"
            type="email"
            id="email"
            name="email"
            maxLength={50}
          />
        </div>

        <div className="xl:w-[350px] lg:w-[350px] md:w-[550px] w-full mt-6">
          <Button text="Send" onClick={()=>navigate('/auth/verify-otp')} />
        </div>

        <button
          type="button"
          className="w-full flex justify-center items-center gap-1 mt-4"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowDropleftCircle className="text-lg text-[#212121]" />
          <p className="text-xs uppercase font-bold tracking-wider text-[#212121]">
            Back
          </p>
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
  
import { useRef, useState } from "react";
import { OtpLogo, SideImg, SmallTick } from "../../assets/export";
import { useNavigate } from "react-router";
import Button from "../../components/app/landingPage/Inputs/Button";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster";
import CountDown from "../../components/global/CountDown";

const VerifyOtp = () => {
  const [loading, setLoading] = useState(false);
  const [isOtpSuccess, setIsOtpSuccess] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  // const [resendLoading, setResendLoading] = useState(false);
  const email = sessionStorage.getItem("email");
  const userType = location.state?.userType;
  // const token = sessionStorage.getItem("token");
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputs = useRef([]);
  const [isActive, setIsActive] = useState(true);
  const [seconds, setSeconds] = useState(30);
  const navigate = useNavigate();
  const handleChange = (e, index) => {
    const { value } = e.target;

    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const getOtpValue = () => {
    sessionStorage.getItem("token");
    // sessionStorage.setItem("otp", otp.join(""));
    return parseInt(otp.join(""), 10);
  };

  const isOtpFilled = otp.every((digit) => digit !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isOtpFilled) return;

    setLoading(true);
    try {
      let obj = {
        email: email,
        otp: getOtpValue(),
        type: "email",
      };

      const response = await axios.post("/auth/verify-otp", obj, {
        baseURL: "https://api.painreliefusa.com",
        headers: {
          deviceuniqueid: "123",
          devicemodel: "123",
        },
      });
      if (response.status === 200 && response?.data?.is_verified === true) {
        // login(response?.data);
        setLoading(false);
        SuccessToast("OTP Verified");
        setIsOtpSuccess(true);
      }
    } catch (err) {
      console.log("🚀 ~ createAccount ~ err:", err);
      ErrorToast(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      setResendLoading(true);
      let obj = { email: email };

      const response = await axios.post("/auth/request-email-otp", obj, {
        baseURL: "https://api.painreliefusa.com",
        headers: {
          deviceuniqueid: "123",
          devicemodel: "123",
        },
      });

      if (response.status === 200) {
        SuccessToast("Otp has been sent to your email");
        setResendLoading(false);
        setOtp(Array(4).fill("")); // Reset OTP fields
        handleRestart();
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
    } finally {
      setResendLoading(false);
    }
  };

  const handleContinue = () => {
    if (userType === "provider") {
      navigate("/auth/create-provider-profile");
    } else {
      navigate("/auth/user-profile");
    }
  };

  const handleRestart = () => {
    setSeconds(30);
    setIsActive(true);
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      {isOtpSuccess ? (
        <div className="flex flex-col justify-center items-center lg:h-auto h-screen ">
          <div className="pb-4 text-center w-[330px] flex flex-col justify-center items-center">
            <div className=" mb-8">
              <img src={SmallTick} />
            </div>
            <p className="text-[32px] font-semibold capitalize">
              Email Address Verified Successfully
            </p>
          </div>

          <button
            onClick={handleContinue}
            className="bg-[#29ABE2] text-white w-[350px] h-[48px] rounded-[8px] mt-6"
          >
            Continue
          </button>
        </div>
      ) : (
        <div className="flex flex-col mt-24 items-center lg:h-auto h-screen p-3">
          <div className="pb-4 text-center">
            <div className="flex justify-center">
              <div className="w-[210.88px] mb-8">
                <img src={OtpLogo} />
              </div>
            </div>
            <p className="text-[32px] font-semibold capitalize">Verify OTP </p>
            <p className="text-[16px] capitalize text-[#565656]">
              The code was sent to{" "}
              <span className="text-black"> johndoe@mail.com</span>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="xl:w-[300px] lg:w-[350px] md:w-[550px] w-full h-auto grid grid-cols-4 justify-center items-center gap-2 mb-2 pl-16">
              {otp.map((digit, index) => (
                <input
                  inputMode="numeric"
                  key={index}
                  type="password"
                  placeholder="0"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputs.current[index] = el)}
                  className="h-[49px] w-[49px] rounded-[12px] outline-none text-center border-[1px] border-[#D9D9D9] placeholder:text-[#181818]
                placeholder:text-[16px] focus-within:border-[#8A8A8A] flex items-center justify-center"
                />
              ))}
            </div>

            <div className="xl:w-[350px] lg:w-[350px] md:w-[550px] w-full mt-6">
              <Button loading={loading} text="Verify" />
            </div>
          </form>
          <div className="flex items-center justify-center gap-2  mt-4 mb-3 relative z-10">
            <p className="text-center text-[16px] leading-[21.6px] text-[#565656]">
              Didn&apos;t receive the code yet?
              {isActive ? (
                <CountDown
                  isActive={isActive}
                  setIsActive={setIsActive}
                  seconds={seconds}
                  setSeconds={setSeconds}
                />
              ) : (
                <span
                  type="button"
                  disabled={resendLoading}
                  onClick={handleResendOtp}
                  className="text-[#181818] font-medium pl-1 cursor-pointer"
                >
                  {resendLoading ? "Resending..." : "Resend"}
                </span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyOtp;

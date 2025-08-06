import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { GoogleIcon } from "../../assets/export";
import { FiLoader } from "react-icons/fi";
import { ErrorToast } from "../global/Toaster";

const SocialLogin = () => {
  const [googleLoading, setGoogleLoading] = useState(false);
  const [appleLoading, setAppleLoading] = useState(false);

  const handleGoogleSocial = () => {
    setGoogleLoading(true);
    setTimeout(() => {
      setGoogleLoading(false);
      ErrorToast("Firebase Service Not Available");
    }, 1000);
  };
  const handleAppleSocial = () => {
    setAppleLoading(true);
    setTimeout(() => {
      setAppleLoading(false);
      ErrorToast("Firebase Service Not Available");
    }, 1000);
  };
  return (
    <div className="justify-center xxl:w-[650px] lg:w-[350px] md:w-[550px] w-[340px] space-y-4 mt-6">
      <button
        disabled={appleLoading}
        onClick={handleGoogleSocial}
        className="flex justify-center items-center bg-white text-black font-medium text-[14px]
       text-center h-[48px] w-full rounded-[8px] border-[1px] border-[#D9D9D9] cursor-pointer"
      >
        <div>
          <img className="w-[20px] h-[20px] " alt="google" src={GoogleIcon} />
        </div>
        <div className="pl-4 text-[16px]">Continue With Google</div>
        {googleLoading && (
          <FiLoader className="text-[#1A293D] text-[22px] ml-2 animate-spin me-2" />
        )}
      </button>
      <button
        disabled={googleLoading}
        onClick={handleAppleSocial}
        className="flex justify-center items-center bg-white text-black font-medium text-[14px]
       text-center h-[48px] w-full  rounded-[8px] border-[1px] border-[#D9D9D9] cursor-pointer"
      >
        <div>
          <FaApple className="text-[26px]" />
        </div>
        <div className="pl-4 text-[16px]">Continue With Apple</div>
        {appleLoading && (
          <FiLoader className="text-[#1A293D] text-[22px] ml-2 animate-spin me-2" />
        )}
      </button>
    </div>
  );
};

export default SocialLogin;

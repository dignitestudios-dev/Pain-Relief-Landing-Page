import React, { useRef, useState } from "react";
import { OtpLogo, SideImg } from "../assets/export";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputs = useRef([]);

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

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center lg:h-auto h-screen">
        <div className="pb-4 text-center">
          <div className="w-[350px] mb-8">
            <img src={OtpLogo} />
          </div>
          <p className="text-[32px] font-bold capitalize">Verify OTP </p>
          <p className="text-[16px] capitalize text-[#565656]">
            The code was sent to{" "}
            <span className="text-black"> johndoe@mail.com</span>
          </p>
        </div>

        <div className="w-[350px] h-auto grid grid-cols-6 justify-center items-center gap-4 mb-2 ">
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

        <button className="bg-[#29ABE2] text-white w-[350px] h-[48px] rounded-[8px] mt-6">
          Verify
        </button>
        <div className="flex items-center justify-center gap-2  mt-4 mb-3 relative z-10">
          <p className="text-center text-[16px] leading-[21.6px] text-[#565656]">
            Didn't receive the code yet?
            <span className="text-[#181818] font-medium pl-1">Resend</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;

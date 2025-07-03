import React, { useContext, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "../../../landingPage/Inputs/Button";
import { ErrorToast, SuccessToast } from "../../../../global/Toaster";
import axios from "../../../../../axios";
import { AppContext } from "../../../../../context/AppContext";

const DeleteAccountModal = ({ onClick }) => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [otpError, setOtpError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);
  const { userData, logoutAuth, loadingLogout } = useContext(AppContext);

  const isOtpFilled = otp.every((digit) => digit !== "");

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      setOtpError("");

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
    return parseInt(otp.join(""), 10);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isOtpFilled) {
      setOtpError("Please enter the complete OTP.");
      return;
    }

    setLoading(true);
    try {
      let obj = { otp: getOtpValue() };
      const response = await axios.post("/auth/delete-account", obj);

      if (response.status === 200) {
        SuccessToast(response?.data?.message);
        logoutAuth();
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[470px]">
        <div className="flex justify-between items-center mb-4">
          <div className="text-[24px] font-[600] text-[#212121]">
            Delete account
          </div>
          <div
            className="border border-[#989898] cursor-pointer rounded-lg p-2"
            onClick={onClick}
          >
            <RxCross2 color="#989898" size={20} />
          </div>
        </div>
        <p className="mb-6">
          The code was sent to{" "}
          <span className="text-[#212121] font-[600]"> {userData.email}</span>
        </p>
        <form>
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-4 gap-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="password"
                  inputMode="numeric"
                  placeholder="0"
                  maxLength="1"
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputs.current[index] = el)}
                  value={digit}
                  className="h-[49px] w-[49px] rounded-[12px] outline-none text-center border border-[#D9D9D9] placeholder:text-[#181818] placeholder:text-[16px] focus:border-[#8A8A8A]"
                />
              ))}
            </div>

            {otpError && ( // ⬅️ show error if exists
              <p className="text-red-500 text-sm mt-2">{otpError}</p>
            )}

            <div className="xl:w-[240px] lg:w-[350px] md:w-[550px] w-full mt-6">
              <Button
                text={"Verify"}
                loading={loading || loadingLogout}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteAccountModal;

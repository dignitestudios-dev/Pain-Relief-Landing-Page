import React, { useState } from "react";
import Button from "../../../landingPage/Inputs/Button";
import ApprovedPending from "./ApprovedPending";

const LicenseApprovedModal = ({
  onClick,
  setFile,
  handleUploadLicense,
  licenseloader,
  error,
  setError,
}) => {
  const [isLicenseAdded, setIsLicenseAdded] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFile(file);
      setIsLicenseAdded(true);
      setError("");
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0A150F80] z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-lg p-6 w-full max-w-[470px] mx-4">
        {/* Close Button */}
        <div className="flex justify-between">
          <h2 className="text-[32px] font-[600] mb-1">
            Add New Medical License
          </h2>

          <button onClick={onClick} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05A1 1 0 015.05 3.636L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="">
          <p className="text-[#181818] font-[500] text-[14px] mb-2">
            Upload Medical license
          </p>

          {/* File Upload */}
          <label
            htmlFor="license-upload"
            className="border-2 border-dashed border-gray-300 rounded-2xl h-[142px] w-full flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50 transition"
          >
            <input
              type="file"
              id="license-upload"
              className="hidden"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png"
            />
            <p className="underline text-[#212121]">Upload “document name”</p>
            <p className="text-[12px] text-[#8F8F8F] mt-1">
              Up to 20MB JPG, PNG, PDF
            </p>
          </label>
          {isLicenseAdded && fileName && (
            <div className=" mt-3">
              <div className="  flex items-center justify-between rounded-[12px]  p-4 shadow-[0_0_16px_rgba(17,17,26,0.1)] ">
                <div>
                  <div className="flex items-center gap-3 ">
                    Uploaded:{" "}
                    <span className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
                      {fileName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {error && (
            <p className="text-red-500 text-[14px] font-[500] "> {error}</p>
          )}
          {/* Uploaded File Info */}
        </div>
        <div className="flex justify-between my-4">
          <button className="w-[205px] h-[49px] bg-[#E0E0E0] rounded-[8px] text-[#565656] ">
            Cancel
          </button>
          <div className="w-[205px]">
            <Button
              text={"Submit"}
              onClick={() => {
                handleUploadLicense();
              }}
              loading={licenseloader}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseApprovedModal;

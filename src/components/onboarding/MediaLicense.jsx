import { useState } from "react";

const MediaLicense = ({ setFileName, fileName, setFile, setFormErrors }) => {
  const [isLicenseAdded, setIsLicenseAdded] = useState(false);

  const handleFileChange = (event) => {
    setFormErrors({});
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFile(file); // 👈 set actual file
      setIsLicenseAdded(true);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="license-upload" className="text-[14px] font-[500]">
          Medical license and insurance{" "}
          {/* <span className="text-[#555555]">(Required)</span> */}
        </label>

        <div className="relative border border-dashed border-[rgba(85,85,85,0.2)] bg-white rounded-2xl flex flex-col justify-center items-center h-[142px] cursor-pointer">
          <input
            type="file"
            id="license-upload"
            className="hidden"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png"
          />

          <label htmlFor="license-upload" className="text-center">
            <p className="underline text-[#212121] cursor-pointer">
              Upload “document name”
            </p>
            <p className="text-[12px] text-[#8F8F8F] mt-2 cursor-pointer">
              Upto 20MB JPG, PNG, PDF
            </p>
          </label>
        </div>

        {isLicenseAdded && fileName && (
          <div className="lg:w-[500px] md:w-[500px] w-[320px] mt-3">
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
      </div>
    </div>
  );
};

export default MediaLicense;

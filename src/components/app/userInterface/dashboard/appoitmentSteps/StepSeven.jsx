import React from "react";

const StepSeven = ({ label, handleSpeakSelect, selected, error }) => {
  return (
    <div className="py-2 space-y-4">
      <p className="font-[500] text-[16px] w-[300px]  tracking-[1]">{label}</p>

      <div className="flex justify-between gap-2">
        <button
          type="button"
          onClick={() => handleSpeakSelect("No")}
          className={`w-[170px] h-[49px] rounded-[8px] font-[500] ${
            selected === "No"
              ? "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] text-white"
              : "bg-[#E0E0E0] text-[#565656]"
          }`}
        >
          No
        </button>

        <button
          type="button"
          onClick={() => handleSpeakSelect("Yes")}
          className={`w-[170px] h-[49px] rounded-[8px] font-[500] ${
            selected === "Yes"
              ? "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] text-white"
              : "bg-[#E0E0E0] text-[#565656]"
          }`}
        >
          Yes
        </button>
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default StepSeven;

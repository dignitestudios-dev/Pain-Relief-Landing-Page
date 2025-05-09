import React, { useState } from "react";

const SelectField = ({ icon, text, tick }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className={`relative w-full h-[48px] border-[1px] cursor-pointer ${
        !isSelected ? "border-[#D9D9D9]" : "border-[#29ABE2]"
      } 
        flex justify-between items-center rounded-[10px] md:pl-1 md:py-[2px] pl-1.5 py-[2px]`}
    >
      <div className="flex items-center">
        <div className="border-[1px] border-[#D9D9D9] rounded-[12px] w-[40px] h-[40px] flex justify-center items-center ">
          <img src={icon} className="object-cover" />
        </div>
        <div className="pl-2 w-[100px]">
          <p className="text-[12px] font-medium">{text}</p>
        </div>
      </div>
      <div className="absolute right-1.5 top-1.5">
        {isSelected && <img src={tick} className="w-[14px]" />}
      </div>
    </div>
  );
};

export default SelectField;

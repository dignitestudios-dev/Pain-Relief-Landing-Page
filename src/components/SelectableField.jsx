import React, { useRef, useState } from "react";

import { GoChevronDown } from "react-icons/go";
import { RadioBtn, RadioBtnActive } from "../assets/export";

const SelectableField = ({ label, placeholder, options, error, loader }) => {
  const dropdownRef = useRef(null);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="flex flex-col gap-1 justify-start items-start ">
      <label
        htmlFor="subject"
        className="text-[12px] text-[#121516] font-medium"
      >
        {label}
      </label>

      <div
        className={`relative w-full h-[48px] border-[1px] border-[#D9D9D9] focus-within:border-[1px]
            focus-within:border-[#55C9FA] flex justify-between items-center rounded-[8px] md:pl-3 pl-1.5`}
      >
        <button
          type="button"
          className={`px-2 text-[16px] text-[#565656] w-full flex justify-between items-center`}
          onClick={() => setDropdownVisible((prev) => !prev)}
        >
          {selectedValue ? selectedValue : placeholder}
          <GoChevronDown className="text-[17px]" />
        </button>
        {dropdownVisible && (
          <div
            ref={dropdownRef}
            className="absolute top-12 left-0 px-4 mt-1 w-full h-[280px] overflow-auto bg-white border-[#D9D9D9]
            border-[0.5px] rounded-[8px] z-10"
          >
            {/* <div className="w-full text-center">
              <p className="text-xl text-white">{placeholder}</p>
            </div> */}

            <span>
              {loader ? (
                <div className="text-center">Loading....</div>
              ) : (
                options.map((option, index) => (
                  <div
                    type="button"
                    onClick={() => {
                      setSelectedValue(option);
                      // setDropdownVisible(false);
                    }}
                    key={index}
                    className=" px-2 py-3 cursor-pointer border-b-[1px] border-gray-200 flex justify-between items-center"
                  >
                    <button
                      type="button"
                      className={` text-sm text-[#565656] w-full flex flex-1 placeholder:font-normal font-normal
                         rounded-xl outline-none bg-transparent cursor-pointer `}
                    >
                      {option}
                    </button>
                    <span className="w-[17px] h-[17px]">
                      <img
                        src={
                          selectedValue === option ? RadioBtnActive : RadioBtn
                        }
                        alt="radio"
                      />
                    </span>
                  </div>
                ))
              )}
            </span>
          </div>
        )}
      </div>
      {error ? (
        <p className="text-red-600 text-sm font-light">{error}</p>
      ) : null}
    </div>
  );
};

export default SelectableField;

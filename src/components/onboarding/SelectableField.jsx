/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { RadioBtn, RadioBtnActive } from "../../assets/export";

const SelectableField = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  error,
  loader,
}) => {
  const dropdownRef = useRef(null);

  const [dropdownVisible, setDropdownVisible] = useState(false);

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
        {/* <button
          type="button"
          className={`px-2 text-[16px] text-[#565656] w-full flex justify-between items-center`}
          onClick={() => setDropdownVisible((prev) => !prev)}
        >
          {selectedValue ? selectedValue : placeholder}
          <GoChevronDown className="text-[17px]" />
        </button> */}
        <button
          type="button"
          className="w-full text-left text-[#565656]"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          {value || placeholder}
        </button>
        <GoChevronDown className="mr-2" />
        {dropdownVisible && (
          <div
            ref={dropdownRef}
            className="absolute top-12 left-0 w-full max-h-[280px] overflow-auto bg-white border rounded-[8px] z-10"
          >
            {loader ? (
              <div className="text-center p-3">Loading...</div>
            ) : (
              options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    onChange(option);
                    setDropdownVisible(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
                >
                  <span>{option}</span>
                  <img
                    src={value === option ? RadioBtnActive : RadioBtn}
                    alt="radio"
                    className="w-[17px] h-[17px]"
                  />
                </div>
              ))
            )}
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

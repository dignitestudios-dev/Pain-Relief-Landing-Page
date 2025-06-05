import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const QuestionDropDown = ({
  setIsSelectedVal,
  isSelectedVal,
  options,
  handleSelection,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setIsSelectedVal(option);
    handleSelection(option);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-md mx-auto relative text-sm font-normal">
      <div
        className="border border-gray-300 rounded-md px-4 py-3 flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className={`text-gray-700 `}>Select your answer</span>
        <FaChevronDown className="text-gray-500" />
      </div>

      {isOpen && (
        <div className="mt-4 w-full bg-white border border-gray-300 rounded-md shadow-md px-3 z-10 absolute">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 hover:bg-gray-50 cursor-pointer border-b"
              onClick={() => handleSelect(option)}
            >
              <span className="text-gray-800 text-wrap w-[240px]">
                {option}
              </span>
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ml-2 ${
                  isSelectedVal === option
                    ? "border-2 border-[#00BCD4]"
                    : "border-2 border-gray-300"
                }`}
              >
                {isSelectedVal === option && (
                  <div className="w-2.5 h-2.5 bg-[#00BCD4] rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionDropDown;

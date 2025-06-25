import React from "react";
import QuestionDropDown from "../appoitment/QuestionDropDown";
import { RiDeleteBin6Line } from "react-icons/ri";

const StepTwo = ({
  label,
  setIsSelectedVal,
  isSelectedVal,
  handleRemove,
  error,
  handleSelection,
}) => {
  const options = [
    "I would like to schedule appointment with Chiropractor",
    "I am having constant headaches?",
    "I would like to schedule appointment with massage therapist",
    "I would like to schedule appointment with acupuncturist",
    "I would like to schedule appointment for x-ray or imaging",
  ];

  return (
    <div className="py-2 space-y-4">
      <p className="font-[500] text-[16px] tracking-[1]">{label}</p>
      <div className="flex flex-col gap-3 ">
        <QuestionDropDown
          setIsSelectedVal={setIsSelectedVal}
          isSelectedVal={isSelectedVal}
          options={options}
          handleSelection={handleSelection}
        />
        {isSelectedVal != "" && (
          <div className="flex border border-gray-300 rounded-md px-4 py-3 justify-between gap-4">
            <p className="text-gray-700 text-sm text-wrap w-[240px]">
              {isSelectedVal}
            </p>
            <button type="button" onClick={() => handleRemove()}>
              <RiDeleteBin6Line size={17} className="text-red-500" />
            </button>
          </div>
        )}
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default StepTwo;

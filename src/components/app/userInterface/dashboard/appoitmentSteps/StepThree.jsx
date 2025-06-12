import QuestionDropDown from "../appoitment/QuestionDropDown";
import { RiDeleteBin6Line } from "react-icons/ri";

const StepThree = ({
  label,
  setIsSelectedVal,
  isSelectedVal,
  handleRemove,
  handleOtherChange,
  otherText,
  handleSelection,
  error,
}) => {
  const options = [
    "Neck/Shoulders",
    "Upper or lower back",
    "Elbow, wrist, knee, or hip",
    "Other",
  ];

  return (
    <div className="py-2 space-y-4">
      <p className="font-[500] w-[350px] text-[16px] tracking-[1]">{label}</p>
      <div className="flex flex-col gap-3">
        <QuestionDropDown
          setIsSelectedVal={setIsSelectedVal}
          isSelectedVal={isSelectedVal}
          options={options}
          handleSelection={handleSelection}
        />

        {isSelectedVal === "Other" && (
          <textarea
            className="border border-gray-300 h-[104px] focus:outline-none rounded-md p-2 text-sm"
            placeholder="Description"
            value={otherText}
            onChange={handleOtherChange}
          />
        )}

        {isSelectedVal !== "" && isSelectedVal !== "Other" && (
          <div className="flex border border-gray-300 rounded-md px-4 py-3 justify-between gap-4">
            <p className="text-gray-700 text-sm text-wrap w-[240px]">
              {isSelectedVal}
            </p>
            <button type="button" onClick={handleRemove}>
              <RiDeleteBin6Line size={17} className="text-red-500" />
            </button>
          </div>
        )}
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default StepThree;

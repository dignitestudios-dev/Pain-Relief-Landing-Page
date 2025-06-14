/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { RadioBtn, RadioBtnActive } from "../../assets/export";

const SelectableField = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  error,
  loader,
  isMulti = false, // NEW PROP
  setIsSelectField = () => {},
}) => {
  const dropdownRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const isSelected = (option) => {
    if (isMulti && Array.isArray(value)) {
      return value.some((v) => v.id === option.id);
    }
    return value?.id === option.id;
  };

  const handleOptionClick = (option) => {
    if (isMulti) {
      let updated;
      if (isSelected(option)) {
        updated = value.filter((v) => v.id !== option.id);
      } else {
        updated = [...(value || []), option];
      }
      onChange(updated);
    } else {
      onChange(option);
      setDropdownVisible(false);
      setIsSelectField(false);
    }
  };

  const displayValue = () => {
    if (isMulti && Array.isArray(value)) {
      return value.length > 0
        ? value.map((v) => v.label).join(", ")
        : placeholder;
    }
    return value?.label || placeholder;
  };

  return (
    <div className="flex flex-col gap-1 justify-start items-start">
      <label className="text-[12px] text-[#121516] font-medium">{label}</label>
      <div className="cursor-pointer relative w-auto h-[48px]   border-[1px] border-[#D9D9D9] focus-within:border-[#55C9FA] flex justify-between items-center rounded-[8px] md:pl-3 pl-1.5">
        <div
          type="button"
          onClick={() => {
            setDropdownVisible(!dropdownVisible);
            setIsSelectField((prev) => !prev);
          }}
          className="flex items-center "
        >
          <button
            type="button"
            className="w-[400px] text-left text-[#565656] h-[48px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
          >
            <div className="pr-2">{displayValue()}</div>
          </button>

          {dropdownVisible ? (
            <GoChevronUp className="mr-2" />
          ) : (
            <GoChevronDown className="mr-2" />
          )}
        </div>
        {dropdownVisible && (
          <div
            ref={dropdownRef}
            className="absolute top-12 left-0 w-full max-h-[220px] overflow-auto bg-white border rounded-[8px] z-10 "
          >
            {loader ? (
              <div className="text-center p-3">Loading...</div>
            ) : (
              options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 text-black   cursor-pointer  flex justify-between items-center"
                >
                  <span>{option.label}</span>
                  <img
                    src={isSelected(option) ? RadioBtnActive : RadioBtn}
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

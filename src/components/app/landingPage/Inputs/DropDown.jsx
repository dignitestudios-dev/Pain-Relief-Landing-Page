import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { OptionSekelton } from "../../../global/Sekelton";

export const DropDown = ({
  label,
  options = [],
  placeholder,
  value = [],
  onChange,
  loader,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selected, setSelected] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full">
      {label && <label className="block mb-1 text-white">{label}</label>}
      <div
        onClick={toggleDropdown}
        className="border px-4 py-2 rounded-[8px] h-[49px] overflow-auto flex justify-between items-center cursor-pointer bg-transparent text-white"
      >
        {value.length === 0
          ? placeholder
          : value.map((item) => item.name).join(", ")}
        <MdArrowDropDown size={26} color="white" />
      </div>

      {isOpen &&
        (loader ? (
          <OptionSekelton />
        ) : (
          <div className="absolute top-full left-0 w-full border rounded-[8px] mt-1 shadow-md z-10 max-h-60 overflow-y-auto bg-white text-black">
            {options?.map((option) => {
              const isChecked = value?.some((item) => item.id === option._id);
              return (
                <label
                  key={option?._id}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onChange(option)}
                    className="mr-2"
                  />
                  {option?.name}
                </label>
              );
            })}
          </div>
        ))}
    </div>
  );
};
export const DropDownDark = ({
  label,
  options = [],
  placeholder,
  value = [],
  onChange,
  loader,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selected, setSelected] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full">
      {label && <label className="block mb-1 text-black">{label}</label>}
      <div
        onClick={toggleDropdown}
        className="border border-black px-4 py-2 rounded-[8px] h-[49px] overflow-auto flex justify-between items-center cursor-pointer bg-transparent text-black"
      >
        {value.length === 0
          ? placeholder
          : value.map((item) => item.name).join(", ")}
        <MdArrowDropDown size={26} color="black" />
      </div>

      {isOpen &&
        (loader ? (
          <OptionSekelton />
        ) : (
          <div className="absolute top-full left-0 w-full border rounded-[8px] mt-1 shadow-md z-10 max-h-60 overflow-y-auto bg-white text-black">
            {options?.map((option) => {
              const isChecked = value?.some((item) => item.id === option._id);
              return (
                <label
                  key={option?._id}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onChange(option)}
                    className="mr-2"
                  />
                  {option?.name}
                </label>
              );
            })}
          </div>
        ))}
    </div>
  );
};

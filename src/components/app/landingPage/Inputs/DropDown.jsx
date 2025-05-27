import React, { useEffect, useRef, useState } from "react";
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
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {label && <label className="block mb-1 text-white">{label}</label>}
        <div
        onClick={toggleDropdown}
        className="border border-white px-4 py-2 rounded-[8px] overflow-auto h-[49px] flex flex-wrap  gap-2 cursor-pointer bg-transparent text-black"
      >
        <div className="flex flex-wrap gap-2 flex-1">
          {value.length === 0 ? (
            <span className="text-white flex items-center">{placeholder}</span>
          ) : (
            value.map((item) => (
              <span
                key={item.id}
                className="bg-white flex  items-center   text-black text-xs px-3 py-1 rounded-[10px]"
              >
                {item.name}
              </span>
            ))
          )}
        </div>
        <MdArrowDropDown size={26} color="white" className="shrink-0" />
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
                  className="flex  px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onChange(option)}
                      className="absolute opacity-0 w-0 h-0"
                    />
                    <div
                      className={`w-4 h-4 mt-2 rounded border-2 flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] border-[#2ac8b3]"
                          : "border-gray-400 bg-white"
                      }`}
                    >
                      {isChecked && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="ml-2">{option?.name}</span>
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

  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {label && (
        <label className="block mb-1 text-[16px] text-[#212121] font-[500]">
          {label}
        </label>
      )}
      <div
        onClick={toggleDropdown}
        className="border border-black px-4 py-2 rounded-[8px] overflow-auto h-[49px] flex flex-wrap  gap-2 cursor-pointer bg-transparent text-black"
      >
        <div className="flex flex-wrap gap-2 flex-1">
          {value.length === 0 ? (
            <span className="text-gray-500 flex items-center">{placeholder}</span>
          ) : (
            value.map((item) => (
              <span
                key={item.id}
                className="bg-gradient-to-l to-[#63CFAC] flex  items-center  from-[#29ABE2] text-white text-xs px-3 py-1 rounded-[10px]"
              >
                {item.name}
              </span>
            ))
          )}
        </div>
        <MdArrowDropDown size={26} color="black" className="shrink-0" />
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
                  className="flex  px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onChange(option)}
                      className="absolute opacity-0 w-0 h-0"
                    />
                    <div
                      className={`w-4 h-4 mt-2 rounded border-2 flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] border-[#2ac8b3]"
                          : "border-gray-400 bg-white"
                      }`}
                    >
                      {isChecked && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="ml-2">{option?.name}</span>
                </label>
              );
            })}
          </div>
        ))}
    </div>
  );
};

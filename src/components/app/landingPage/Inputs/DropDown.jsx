import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

export const DropDown = ({ label, options = [] ,placeholder}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter(item => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="relative w-full">
      {label && <label className="block mb-1 text-white">{label}</label>}
      <div
        onClick={toggleDropdown}
        className="border px-4 py-2 rounded-[8px] h-[49px] overflow-auto flex justify-between items-center cursor-pointer bg-transparent text-white"
      >
        {selected.length === 0 ? placeholder : selected.join(', ')}
        <MdArrowDropDown size={26} color="white" />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full border rounded-[8px] mt-1 shadow-md z-10 max-h-60 overflow-y-auto bg-white text-black">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => handleSelect(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
export const DropDownDark = ({ label, options = [] ,placeholder}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter(item => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="relative w-full">
      {label && <label className="block mb-1 text-black">{label}</label>}
      <div
        onClick={toggleDropdown}
        className="border border-black px-4 py-2 rounded-[8px] h-[49px] overflow-auto flex justify-between items-center cursor-pointer bg-transparent text-black"
      >
        {selected.length === 0 ? placeholder : selected.join(', ')}
        <MdArrowDropDown size={26} color="black" />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full border rounded-[8px] mt-1 shadow-md z-10 max-h-60 overflow-y-auto bg-black text-black">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => handleSelect(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

 

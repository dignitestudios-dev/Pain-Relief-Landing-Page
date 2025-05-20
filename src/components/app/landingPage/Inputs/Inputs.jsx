import React from "react";

export const Inputs = ({ type, name, id, onClick, onBlur, placeholder, label,value,onChange }) => {
  return (
    <div className="flex  flex-col">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onClick={onClick}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={onChange}
        className="rounded-[8px] border border-[#FFFFFF] h-[49px] bg-transparent placeholder:text-[#FFFFFF] p-2  text-[#FFFFFF] "
      />
    </div>
  );
};
export const InputsDark = ({ type, name, id, onClick, onBlur, placeholder, label,value,onChange }) => {
  return (
    <div className="flex  flex-col">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onClick={onClick}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="rounded-[8px] border border-black h-[49px] bg-transparent placeholder:text-black p-2  text-black "
      />
    </div>
  );
};


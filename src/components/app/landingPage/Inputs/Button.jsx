import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-gradient-to-l   to-[#63CFAC] from-[#29ABE2]  rounded-[8px] w-full text-white  font-[500] text-[16px] h-[49px] "
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

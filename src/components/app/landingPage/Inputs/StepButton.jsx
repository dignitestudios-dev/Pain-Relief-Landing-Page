import React, { useState } from "react";

export const StepButton = ({ text, onClick, loading, type, bg }) => {
 
  return (
    <div>
      <div>
        <button
          disabled={loading}
          type={type}
          onClick={onClick}
          className={` ${bg} rounded-[8px] w-full text-white font-[500] text-[16px] h-[49px]`}
        >
          <div className="flex justify-center items-center">
            <span className="mr-1">{text}</span>
            {loading && <RiLoader5Line className="animate-spin text-lg " />}
          </div>
        </button>
      </div>
    </div>
  );
};

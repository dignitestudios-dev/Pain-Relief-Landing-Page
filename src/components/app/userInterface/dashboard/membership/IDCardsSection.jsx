import React from "react";
import IDCards from "./IDCards";

const IDCardsSection = () => {
  return (
    <div className="bg-white w-full rounded-[8px]  mt-4">
      <h2 className="text-[24px] font-[600] border-b pb-5 p-4  ">ID Cards</h2>
      <div>
        <IDCards />
      </div>
    </div>
  );
};

export default IDCardsSection;

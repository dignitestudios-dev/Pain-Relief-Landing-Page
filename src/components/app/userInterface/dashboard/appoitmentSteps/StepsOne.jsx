import React from "react";
import QuestionField from "../appoitment/QuestionField";
import { SmallTick } from "../../../../../assets/export";

const StepOne = ({ label, isSelected, handleSelection,error }) => {
  return (
    <div className="py-2 space-y-4">
      <p className="font-[500] text-[16px] tracking-[1]">{label}</p>

      <div className="flex justify-between gap-2">
        <QuestionField
          label="Network Professional"
          value="user"
          tick={SmallTick}
          isSelected={isSelected}
          handleSelection={handleSelection}
        />
        <QuestionField
          label="Pain Relief Coach"
          value="provider"
          tick={SmallTick}
          isSelected={isSelected}
          handleSelection={handleSelection}
        />
      </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default StepOne;

import React from "react";
import QuestionField from "../appoitment/QuestionField";
import { SmallTick } from "../../../../../assets/export";

const StepOne = ({
  label,
  isSelected,
  handleSelection,
  error,
  subscription,
  subLoader,
}) => {
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
        {subLoader ? (
          <div
            className={`relative w-full h-[54px] border-[1px] cursor-pointer border-[#D9D9D9] 
        flex justify-between items-center rounded-[10px] md:pl-1 md:py-[2px] pl-1.5 py-[2px]`}
          >
            loading...
          </div>
        ) : (
          <>
            {subscription?.name.toLowerCase()?.split(" ")?.[0] ===
              "premium" && (
              <QuestionField
                label="Pain Relief Coach"
                value="provider"
                tick={SmallTick}
                isSelected={isSelected}
                handleSelection={handleSelection}
              />
            )}
          </>
        )}
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default StepOne;

import React from "react";
import {
  EditIcon,
  InfoCircle,
  RadioBtn,
  RedBin,
  SmallTick,
  StripeIcon,
} from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";

const PaymentMethodModal = ({ onClick, setIsActive, isactive,onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#0A150F80] z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[872px]">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[32px] font-[600]">Select Payment Method</h2>
          <p className="text-[20px] font-[500] underline cursor-pointer">
            Add New
          </p>
        </div>

        <div
          className={`rounded-[8px] ${
            isactive ? "bg-gradient-to-l p-[1px] to-[#63CFAC] from-[#29ABE2]" : "border"
          }`}
        >
          <div className="bg-white flex justify-between rounded-[8px] p-3">
            <div>
              <p>John Doe</p>
              <div className="flex items-center gap-3">
                <img
                  src={StripeIcon}
                  className="w-[22px] h-[22px]"
                  alt="Stripe"
                />
                <p>0112**********12</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={EditIcon} alt="Edit" />
              <img src={RedBin} alt="Delete" />
              <div onClick={() => setIsActive((prev) => !prev)}>
                <img
                  src={isactive ? RadioBtn : SmallTick}
                  className="w-[23px] h-[23px] cursor-pointer"
                  alt="Toggle"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-4">
          <button onClick={onClose} className="w-[402px] h-[49px] rounded-[8px] bg-[#E0E0E0] text-[#565656]">
            Cancel
          </button>
          <div className="w-[402px]">
            <Button text={"Buy now"} onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodModal;

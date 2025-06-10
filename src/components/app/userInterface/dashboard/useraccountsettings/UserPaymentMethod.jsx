import React from "react";
import {
  EditIcon,
  RedBin,
  SmallTick,
  StripeIcon,
} from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";

const UserPaymentMethod = () => {
  return (
    <div>
      <div className="bg-white rounded-[26px]  p-8 ">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[32px] font-[600]">Payment Method</h2>
          <p className="text-[20px] font-[500] underline cursor-pointer">
            Add New
          </p>
        </div>

        <div
          className={`rounded-[8px] ${
            true
              ? "bg-gradient-to-l p-[1px] to-[#63CFAC] from-[#29ABE2]"
              : "border"
          }`}
        >
          <div className="bg-white flex justify-between rounded-[8px] p-3">
            <div>
              <p className="font-[600]">John Doe</p>
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
              <div>
                <img
                  src={SmallTick}
                  className="w-[23px] h-[23px] cursor-pointer"
                  alt="Toggle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPaymentMethod;

import React, { useContext } from "react";
import {
  EditIcon,
  RedBin,
  SmallTick,
  StripeIcon,
} from "../../../../../assets/export";
import { useGetCards } from "../../../../../hooks/api/Get";
import { AppContext } from "../../../../../context/AppContext";

const UserPaymentMethod = () => {
  const { userData } = useContext(AppContext);
  const { data, loading } = useGetCards("/payment/cards");
  console.log(data, "data");
  return (
    <div>
      <div className="bg-white rounded-[26px]  p-8 ">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[32px] font-[600]">Payment Method</h2>
          <p className="text-[20px] font-[500] underline cursor-pointer">
            Add New
          </p>
        </div>
        {loading ? (
          <div className="animate-pulse space-y-4 p-4 rounded-lg bg-gray-100">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            <div className="flex items-center space-x-3">
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="flex space-x-3">
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        ) : (
          data?.map((item, index) => (
            <div
              key={index}
              className={`rounded-[8px] ${
                true
                  ? "bg-gradient-to-l p-[1px] to-[#63CFAC] from-[#29ABE2]"
                  : "border"
              }`}
            >
              <div className="bg-white flex justify-between rounded-[8px] p-3">
                <div>
                  <p className="font-[600]">{userData?.firstName}</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={StripeIcon}
                      className="w-[22px] h-[22px]"
                      alt="Stripe"
                    />
                    <p>**********{item?.last4}</p>
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
          ))
        )}
      </div>
    </div>
  );
};

export default UserPaymentMethod;

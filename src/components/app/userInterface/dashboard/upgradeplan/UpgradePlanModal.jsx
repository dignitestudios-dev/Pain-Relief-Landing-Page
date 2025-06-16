import { useContext } from "react";
import { useGetCards } from "../../../../../hooks/api/Get";
import { AppContext } from "../../../../../context/AppContext";
import {
  EditIcon,
  RedBin,
  SmallTick,
  StripeIcon,
} from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";

const UpgradePlanModal = ({ onClose, onClick, loader }) => {
  const { userData } = useContext(AppContext);
  const { data, loading } = useGetCards("/payment/cards");

  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[960px] h-[537px] overflow-auto ">
        <div>
          <div className="bg-white rounded-[26px] h-[400px] ">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-[28px] font-[600]">Select Payment Method</h2>
              {/* <p className="text-[20px] font-[500] underline cursor-pointer">
                Add New
              </p> */}
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
              data
                ?.filter((card) => card?.default)
                ?.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-[8px] my-1
                            ${
                              true
                                ? "bg-gradient-to-l p-[1px] to-[#63CFAC] from-[#29ABE2]"
                                : "border"
                            }
                          `}
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
        <div className="flex justify-between gap-4 mt-6">
          <button
            onClick={onClose}
            type="button"
            className="w-full h-[49px] rounded-[8px] bg-[#E0E0E0] text-[#565656] "
          >
            {" "}
            Cancel
          </button>
          <div className="w-full ">
            <Button text={"Submit"} onClick={onClick} loading={loader} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePlanModal;

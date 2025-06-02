import { SmallTick } from "../../../../assets/export";

const SubscriptionSuccessModal = ({ onClick }) => {
  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[470px] ">
        <div>
          <div
            className="flex justify-end items-center pb-4 "
            onClick={onClick}
          >
            <span className="cursor-pointer border-[1px]  rounded-sm p-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 font-light text-gray-400 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05A1 1 0 015.05 3.636L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen ">
          <div className="pb-4 text-center w-[330px] flex flex-col justify-center items-center">
            <div className=" mb-8">
              <img src={SmallTick} />
            </div>
            <p className="text-[24px] font-semibold capitalize">
              Subscription Activated Successfully{" "}
            </p>
            <p className="text-[16px] text-[#565656]">
              Your Subscription is now active! Thankyou for subscribing.
            </p>
          </div>
        </div>
        <div>
          <div>
            <button
              type="buton"
              onClick={onClick}
              className="bg-gradient-to-l   to-[#63CFAC] from-[#29ABE2]  rounded-[8px] w-full text-white  font-[500] text-[16px] h-[49px] "
            >
              <div className="flex justify-center items-center">
                <span className="mr-1">Continue</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSuccessModal;

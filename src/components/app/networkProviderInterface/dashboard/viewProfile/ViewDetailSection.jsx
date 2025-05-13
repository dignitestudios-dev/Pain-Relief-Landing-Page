import React from "react";
import Button from "../../../landingPage/Inputs/Button";
import { ProfileImg } from "../../../../../assets/export";
import { FiEdit } from "react-icons/fi";

const ViewDetailSection = () => {
  const CliniDetail = [
    {
      title: "Full Name",
      detail: "John Doe",
    },
    {
      title: "Email Address",
      detail: "clinic@gmail.com",
    },
    {
      title: "Mobile Number",
      detail: "+000 0000 000",
    },
    {
      title: "Age ",
      detail: "25yrs old",
    },
    {
      title: "Gender",
      detail: "Male",
    },
    {
      title: "Location",
      detail: "Dallas, TX – 802 PainEase Plaza",
      message: "20 Miles Away",
    },
    {
      title: "Description",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[90%]">
        <div className="flex  flex-col relative bottom-28 lg:flex-row items-center justify-between bg-white rounded-2xl p-4 lg:p-10 gap-6 ">
          <div className="flex flex-col lg:flex-row items-center gap-4 ">
            <div className="p-[2px] rounded-full bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[130px] h-[130px]">
              <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                <img
                  src={ProfileImg}
                  className="w-[120px] h-[120px] rounded-full object-cover"
                  alt="Profile"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-[24px] lg:text-[32px] font-semibold text-black">
                John Alex
              </h2>
              <p className="text-[16px] lg:text-[18px] text-[#565656]">
                john.alex@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[8px] mb-7 ">
          <div className="flex justify-between items-center border-b border-[#EAEAEA] px-4 py-5">
            <h2 className="text-[24px] font-semibold text-[#181818]">
              Member Details
            </h2>
          </div>

          {CliniDetail.map((item, index) => (
            <div key={index} className="border-b border-[#EAEAEA] px-4 py-4">
              <div className="flex justify-between items-center">
                <h3 className="text-[14px] text-[#565656] font-medium">
                  {item.title}
                </h3>

                <div className="flex gap-3 items-center">
                  {item.message && <span>{item.message}</span>}
                  {item.request && (
                    <button
                      onClick={() => setRequestSendModal(true)}
                      className="text-transparent bg-clip-text bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] border-b border-[#63CFAC] text-sm"
                    >
                      {item.request}
                    </button>
                  )}
                </div>
              </div>

              <p className="text-[16px] text-[#181818] font-medium mt-1">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewDetailSection;

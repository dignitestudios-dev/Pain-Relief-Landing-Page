import React from "react";
import { BgIdCard, DesktopLogo, Scanner } from "../../../../../assets/export";
import { LuPhone } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { getDateFormat } from "../../../../../lib/helpers";

const IDCards = ({ IdCardData, userData }) => {
  const cardData = [
    { title: "Plan:", para: `${IdCardData?.userSubscription?.name}` },
    { title: "Member ID:", para: `${userData?.memberId}` },
    {
      title: "Effective:",
      para: `${getDateFormat(IdCardData?.userSubscription?.endDate)}`,
    },
  ];

  return (
    <div className="p-6 flex flex-col lg:flex-row justify-between items-center">
      {/* Front Card */}
      <div className="w-full max-w-[580px] ">
        <p className="text-sm font-medium text-center lg:text-left">
          Front Image
        </p>
        <div className="bg-[#F9FAFA] w-full aspect-video flex flex-col mt-3 rounded-md shadow">
          <div className="flex  items-center bg-provider-detail rounded-md px-4 py-2">
            <img src={DesktopLogo} className="w-2/3 h-auto" alt="Logo" />
          </div>

          <div className="flex flex-col sm:flex-row flex-grow p-4">
            <div className="w-full sm:w-2/3">
              {cardData.map((item, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <p className="text-sm text-[#212121]">{item.title}</p>
                  <p className="text-sm font-medium">{item.para}</p>
                </div>
              ))}
              <p className="text-sm font-semibold mt-2">
                {userData?.firstName}
              </p>
              <p className="text-[10px] text-[#565656] mt-4">C-212-02152022</p>
            </div>
            <div className="w-full sm:w-1/3 flex justify-center items-center mt-4 sm:mt-0">
              <img src={Scanner} className="w-24 h-24" alt="Scanner" />
            </div>
          </div>

          <div className="bg-gradient-to-l p-4 w-full to-[#63CFAC] from-[#29ABE2] rounded-b-[20px] rounded-t-[5px] text-white text-center  ">
            <p className="uppercase text-sm font-medium">
              This is not health insurance
            </p>
          </div>
        </div>
      </div>

      {/* Back Card */}
      <div className="w-full max-w-[580px]">
        <p className="text-sm font-medium text-center lg:text-left">
          Back Image
        </p>
        <div
          className="bg-[#F9FAFA] w-full aspect-video rounded-md flex flex-col justify-between mt-3 relative shadow "
          style={{
            backgroundImage: `url(${BgIdCard})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize: "contain",
          }}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-4 px-4 pt-2">
            <div className="sm:w-1/2 ">
              <p className="font-semibold mb-2">Member Services</p>
              <div className="flex items-center gap-2 mb-1">
                <div className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] h-6 w-6 rounded flex justify-center items-center">
                  <LuPhone color="white" size={16} />
                </div>
                <p className="text-sm">Call:</p>
                <p className="font-medium text-sm">(855) 577-1611</p>
              </div>
              <p className="text-xs text-gray-600 mb-3 ml-8">
                Mon - Fri, 09:00 AM - 07:00 PM ET.
              </p>
              <div className="flex items-center gap-2 mb-1">
                <div className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] h-6 w-6 rounded flex justify-center items-center">
                  <TbWorld color="white" size={16} />
                </div>
                <p className="text-sm">Member Login:</p>
                <p className="font-medium text-sm">PainReliefUSA.com</p>
              </div>
            </div>

            <div className="sm:w-1/2">
              <p className="font-semibold mb-2">Unlimited Doctor Calls</p>
              <div className="flex items-center gap-2 mb-1">
                <div className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] h-6 w-6 rounded flex justify-center items-center">
                  <LuPhone color="white" size={16} />
                </div>
                <p className="text-sm">Call:</p>
                <p className="font-medium text-sm">(866) 223-7302</p>
              </div>
              <p className="text-xs text-gray-600 ml-8">
                This can also be accessed via the Member Portal{" "}
                <span className="font-semibold text-[#7C7C7C]">
                  PainReliefUSA.com
                </span>{" "}
                or the{" "}
                <span className="font-semibold text-[#7C7C7C]">
                  Member App.
                </span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] h-[2px] my-3 w-full"></div>

          <div className="px-2">
            <p className="font-semibold mb-1">
              Attention Health Care Providers:
            </p>
            <p className="text-sm text-gray-700">
              This card is for identification purposes only and does not
              guarantee eligibility.{" "}
              <span className="font-semibold text-[#7C7C7C]">
                Call (855) 577-1611 to verify eligibility.
              </span>{" "}
              Please collect discounted payment when service is rendered or make
              financial arrangements with the patient according to your
              policies.
            </p>
          </div>

          <div className="bg-gradient-to-l flex items-center flex-col justify-center to-[#63CFAC] from-[#29ABE2] rounded-b-md text-white text-center p-2 mt-3 min-h-[77.19px] sm:h-[77.19px]">
            <p className="uppercase font-semibold text-sm sm:text-sm ">
              This is not health insurance
            </p>
            <p className="text-xs sm:text-xs text-[10px]">
              Cardholder is responsible for all applicable payments at point of
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCards;

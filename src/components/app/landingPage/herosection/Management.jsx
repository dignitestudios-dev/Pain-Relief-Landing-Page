import React from "react";
import {
  AppoitmentIcon,
  BenefitIcon,
  ChiropecterIcon,
  ManagementImg,
  MembershipIcon,
  PaymentIcon,
  RegisterIcon,
} from "../../../../assets/export";

const featuresLeft = [
  {
    icon: ChiropecterIcon,
    title: "Expert Chiropractors",
    description:
      "Connect with certified, experienced chiropractors specializing in pain relief and spinal health solutions.",
    offset: "left-[200px]",
  },
  {
    icon: MembershipIcon,
    title: "Flexible Membership Plans",
    description:
      "Choose from a variety of membership options tailored to your individual or family needs, ensuring cost-effective care.",
    offset: "left-[100px]",
  },
  {
    icon: RegisterIcon,
    title: "Family Member Registration",
    description:
      "Easily register and manage appointments for your family members under one account.",
    offset: "left-[140px]",
  },
];

const featuresRight = [
  {
    icon: AppoitmentIcon,
    title: "Seamless Online Appointments",
    description:
      "Book, reschedule, or cancel appointments online anytime – hassle-free, with instant confirmations.",
    offset: "right-[160px]",
  },
  {
    icon: PaymentIcon,
    title: "Secure Payment Integration",
    description:
      "Enjoy safe and secure online payments through trusted gateways with multiple payment options.",
    offset: "right-[100px]",
  },
  {
    icon: BenefitIcon,
    title: "Referral Benefits",
    description:
      "Earn exclusive rewards and discounts when you refer friends and family to join the network.",
    offset: "right-[150px]",
  },
];

const Management = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h2 className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent text-[24px] font-[500] ">
          Why Choose Us
        </h2>
        <h2 className="text-[#212121] xl:text-[50px] lg:text-[45px] md:text-[25px] text-[20px] font-[600]  ">
          Pain Relief Management Network
        </h2>
        <p className="xl:text-[24px] lg:text-[18px] md:text-[16px] text-[14px] text-[#565656] font-[500] ">
          Your Trusted Partner in Chiropractic Care – Convenient, Reliable,{" "}
          <br className="xl:flex hidden" /> and Designed for Your Wellness.
        </p>
      </div>
      <div className="w-[90%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-6 gap-4 items-center relative">
        {/* Left Features */}

        <div className="space-y-10 order-1 lg:order-none lg:col-span-1 flex flex-col xl:justify-center lg:justify-center md:justify-center justify-center ">
          {featuresLeft.map((item, idx) => (
            <div
              key={idx}
              className={`relative xl:text-right lg:text-center  xl:w-[350px] lg:w-full ${
                item?.title === "Expert Chiropractors"
                  ? "xl:left-[150px]  "
                  : item?.title === "Flexible Membership Plans"
                  ? "xl:left-[50px]"
                  : item?.title === "Family Member Registration"
                  ? "xl:left-[70px]"
                  : ""
              }`}
            >
              <div className="flex xl:justify-end lg:justify-center mb-2">
                <div className="bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] w-[61px] h-[61px] rounded-[12px] flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-[39px] h-[39px]" />
                </div>
              </div>
              <h2 className="text-[20px] font-semibold text-[#212121]">
                {item.title}
              </h2>
              <p className="text-[14px] text-[#212121]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="order-2 lg:order-none lg:col-span-4  md:flex justify-center hidden">
          <img
            src={ManagementImg}
            alt="Doctor"
            className="xl:h-[600px] md:h-[500px]   rounded-md mt-10"
          />
        </div>

        {/* Right Features */}
        <div className="space-y-10 order-3 lg:order-none lg:col-span-1 flex flex-col  lg:justify-center md:justify-center justify-center">
          {featuresRight.map((item, idx) => (
            <div
              key={idx}
              className={`relative xl:text-left lg:text-center  xl:w-[350px] lg:w-full  ${
                item?.title === "Seamless Online Appointments"
                  ? "xl:right-[230px]"
                  : item?.title === "Secure Payment Integration"
                  ? "xl:right-[140px]"
                  : item?.title === "Referral Benefits"
                  ? "xl:right-[190px]"
                  : ""
              }`}
            >
              <div className="flex xl:justify-start lg:justify-center mb-2">
                <div className="bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] w-[61px] h-[61px] rounded-[12px] flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-[39px] h-[39px]" />
                </div>
              </div>
              <h2 className="text-[20px] font-semibold text-[#212121]">
                {item.title}
              </h2>
              <p className="text-[14px] text-[#212121]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;

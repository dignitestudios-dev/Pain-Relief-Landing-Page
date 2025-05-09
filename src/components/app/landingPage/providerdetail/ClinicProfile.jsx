import React from "react";
import { FiEdit } from "react-icons/fi";

const ClinicProfile = () => {
  const CliniDetail = [
    {
      title: "Name of Clinic/Practice",
      detail: "Clinic Title",
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
      title: "Primary Clinic Location",
      detail: "Dallas, TX – 802 PainEase Plaza",
      message: "Massage Therapy Care",
      editIcon: <FiEdit />,
    },
    {
      title: "Clinic Location",
      detail: "Dallas, TX – 802 PainEase Plaza",
      message: "Massage Therapy Care",
      editIcon: <FiEdit />,
    },
    {
      title: "Clinic Location",
      detail: "Dallas, TX – 802 PainEase Plaza",
      message: "Massage Therapy Care",
      editIcon: <FiEdit />,
    },
    {
      title: "Clinic Location",
      detail: "Dallas, TX – 802 PainEase Plaza",
      message: "Massage Therapy Care",
      editIcon: <FiEdit />,
    },
    {
      title: "Pain Relief Coach",
      detail: "N/A",
      request: "Send Request",
    },
    {
      title: "Provider Individual NPI",
      detail: "Lorem Ipsum Dolor at",
    },
    {
      title: "Website",
      detail: "www.website.com",
    },
    {
      title: "Description",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
  ];

  return (
    <div className="bg-white rounded-[8px] mt-5">
      <div className="flex justify-between items-center border-b border-[#EAEAEA] px-4 py-5">
        <h2 className="text-[24px] font-semibold text-[#181818]">
          Clinic Profile
        </h2>
        <button className="text-transparent bg-clip-text bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] border-b border-[#63CFAC]">
          Add New Location
        </button>
      </div>

      {CliniDetail.map((item, index) => (
        <div key={index} className="border-b border-[#EAEAEA] px-4 py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[14px] text-[#565656] font-medium">
              {item.title}
            </h3>

            <div className="flex gap-3 items-center">
              {item.editIcon && <span >{item.editIcon}</span>}
              {item.request && (
                <button className="text-transparent bg-clip-text bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] border-b border-[#63CFAC] text-sm">
                  {item.request}
                </button>
              )}
            </div>
          </div>

          <p className="text-[16px] text-[#181818] font-medium mt-1">
            {item.detail}
            {item.message && (
              <span className="block text-[#565656] text-sm mt-1">
                {item.message}
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClinicProfile;

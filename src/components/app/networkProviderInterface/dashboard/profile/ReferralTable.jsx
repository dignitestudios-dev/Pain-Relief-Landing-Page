import React, { useState } from "react";
import { ProfileImg } from "../../../../../assets/export";
import RefferalQrCodeModal from "./RefferalQrCodeModal";

const referralData = Array(7).fill({
  referralId: "ID54154",
  name: "John Alex",
  email: "johnalex@mail.com",
  date: "26 Feb, 2025",
  status: "Subscribes",
});

const ReferralTable = () => {
  const [voucherModal, setVoucherModal] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-md  mt-4">
      <div className="flex justify-between items-center mb-4 border-b border-b-[#EAEAEA] pb-4  p-4">
        <h2 className="xl:text-[24px]  lg:text-[20px] md:text-[18px] text-[16px]  font-[600]">
          Referral Friends
        </h2>
        <button
          onClick={() => setVoucherModal(true)}
          className=" xl:text-[14px]  lg:text-[14px] md:text-[12px] text-[12px] text-nowrap   border-b bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent font-[600] hover:underline"
        >
          Download Brochure/QR Code
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200  ">
          <thead className="bg-[#E6F2F6]">
            <tr className="text-left text-[#000000] text-[14px] font-[500]">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Referral ID</th>
              <th className="py-3 px-4">Referred Member</th>
              <th className="py-3 px-4">Member Email Address</th>
              <th className="py-3 px-4">Sign Up Date</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {referralData.map((item, index) => (
              <tr key={index} className="text-sm text-[#212121]">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{item.referralId}</td>
                <td className="py-3 px-4 flex items-center gap-2">
                  <img
                    src={ProfileImg}
                    alt="Profile"
                    className="w-[36px] h-[36px] rounded-full object-cover border-2 border-[#00B7C2]"
                  />
                  {item.name}
                </td>
                <td className="py-3 px-4">{item.email}</td>
                <td className="py-3 px-4">{item.date}</td>
                <td className="py-3 px-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {voucherModal && <RefferalQrCodeModal onClick={()=>setVoucherModal(false)} />}
    </div>
  );
};

export default ReferralTable;

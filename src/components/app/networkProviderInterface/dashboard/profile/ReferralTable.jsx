import React, { useState } from "react";
import { ProfileImg } from "../../../../../assets/export";
import RefferalQrCodeModal from "./RefferalQrCodeModal";
import { getDateFormat } from "../../../../../lib/helpers";

const referralData = Array(7).fill({
  referralId: "ID54154",
  name: "John Alex",
  email: "johnalex@mail.com",
  date: "26 Feb, 2025",
  status: "Subscribes",
});

const ReferralTable = ({
  referralFriends,
  referralLoader,
  setVoucherModal,
}) => {
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
        {/* Table View (Visible on md and above) */}
        <div className="hidden md:block">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#E6F2F6]">
              <tr className="text-left text-[#000000] text-[14px] font-[500]">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Referred Member</th>
                <th className="py-3 px-4">Member Email Address</th>
                <th className="py-3 px-4">Sign Up Date</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>

            {referralFriends?.length > 0 ? (
              <tbody className="divide-y divide-gray-100">
                {referralFriends?.map((item, index) => (
                  <tr key={index} className="text-sm text-[#212121]">
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <img
                        src={item?.profilePicture || ProfileImg}
                        alt="Profile"
                        className="w-[36px] h-[36px] rounded-full object-cover border-2 border-[#00B7C2]"
                      />
                      <span>{`${item?.firstName} ${item?.lastName}`}</span>
                    </td>
                    <td className="py-3 px-4">{item?.email}</td>
                    <td className="py-3 px-4">
                      {getDateFormat(item?.referredAt)}
                    </td>
                    <td className="py-3 px-4">
                      {item?.isSubscribed ? "Subscribe" : "UnSubscribe"}
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-500 text-sm py-6"
                  >
                    You haven’t referred anyone yet. Share your link to get
                    started.
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>

        {/* Card View (Visible on small screens) */}
        <div className="block md:hidden space-y-4">
          {referralFriends?.length > 0 ? (
            referralFriends.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm text-sm text-[#212121]"
              >
                <p>
                  <strong>#:</strong> {index + 1}
                </p>
                <div className="flex items-center gap-2 my-2">
                  <img
                    src={item?.profilePicture || ProfileImg}
                    alt="Profile"
                    className="w-[36px] h-[36px] rounded-full object-cover border-2 border-[#00B7C2]"
                  />
                  <span className="font-medium">{`${item?.firstName} ${item?.lastName}`}</span>
                </div>
                <p>
                  <strong>Email:</strong> {item?.email}
                </p>
                <p>
                  <strong>Sign Up Date:</strong>{" "}
                  {getDateFormat(item?.referredAt)}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  {item?.isSubscribed ? "Subscribe" : "UnSubscribe"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-sm py-6">
              You haven’t referred anyone yet. Share your link to get started.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralTable;

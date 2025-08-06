import { ProfileImg } from "../../../../../assets/export";
import { getDateFormat } from "../../../../../lib/helpers";
import { ErrorToast, SuccessToast } from "../../../../global/Toaster";
import axios from "../../../../../axios";
import { useState } from "react";
import ReferralUrlModal from "./ReferralUrlModal";

const referralData = Array(7).fill({
  referralId: "ID54154",
  name: "John Alex",
  email: "johnalex@mail.com",
  date: "26 Feb, 2025",
  status: "Subscribes",
});

const ReferralTable = ({ tableData, tableloader }) => {
  const [referralModal, setReferralModal] = useState(false);
  const [referralLoading, setReferralLoading] = useState(false);
  const [referralLink, setReferralLink] = useState(false);

  const handleGenerateReferral = async () => {
    try {
      setReferralLoading(true);
      const response = await axios.get("/user/generate-refferal-link");
      if (response.status === 200) {
        setReferralModal(true);
        setReferralLink(response?.data?.data?.referralLink);
      }
    } catch (error) {
      ErrorToast(error.response.data.message);
    } finally {
      setReferralLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md  mt-4">
      <div className="flex justify-between items-center mb-4 border-b border-b-[#EAEAEA] pb-4  p-4">
        <h2 className="xl:text-[24px]  lg:text-[20px] md:text-[18px] text-[16px]  font-[600]">
          Referral Friends
        </h2>
        <button
          disabled={referralLoading}
          onClick={handleGenerateReferral}
          className=" xl:text-[14px]  lg:text-[14px] md:text-[12px] text-[12px] text-nowrap   border-b bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent font-[600] hover:underline"
        >
          {referralLoading ? "Generating... " : "Copy Referral Link"}
        </button>
      </div>
      <div className="overflow-x-auto">
        {/* Table View (Visible on md and above) */}
        <div className="hidden md:block">
          <table className="min-w-full divide-y divide-gray-200">
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
            {tableloader ? (
              <tbody>
                {Array.from({ length: 4 }).map((_, idx) => (
                  <tr key={idx} className="text-sm animate-pulse">
                    <td className="py-3 px-4">
                      <div className="h-4 w-5 bg-gray-200 rounded"></div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                        <div className="h-4 w-28 bg-gray-200 rounded"></div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="h-4 w-40 bg-gray-200 rounded"></div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : tableData?.length > 0 ? (
              <tbody className="divide-y divide-gray-100">
                {tableData.map((item, index) => (
                  <tr key={index} className="text-sm text-[#212121]">
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{item?.referId}</td>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <img
                        src={item?.profilePicture || ProfileImg}
                        alt="Profile"
                        className="w-[36px] h-[36px] rounded-full object-cover border-2 border-[#00B7C2]"
                      />
                      <span>
                        {item.firstName} {item.lastName}
                      </span>
                    </td>
                    <td className="py-3 px-4">{item?.email}</td>
                    <td className="py-3 px-4">
                      {getDateFormat(item?.referredAt)}
                    </td>
                    <td className="py-3 px-4">
                      {item?.isSubscribed === false
                        ? "UnSubscribe"
                        : "Subscribe"}
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td
                    colSpan="6"
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
          {tableloader ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="p-4 border rounded-lg shadow-sm animate-pulse"
              >
                <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                  <div className="h-4 w-28 bg-gray-200 rounded"></div>
                </div>
                <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </div>
            ))
          ) : tableData?.length > 0 ? (
            tableData.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm text-sm text-[#212121]"
              >
                <p>
                  <strong>#:</strong> {index + 1}
                </p>
                <p>
                  <strong>Referral ID:</strong> {item?.referId}
                </p>
                <div className="flex items-center gap-2 my-2">
                  <img
                    src={item?.profilePicture || ProfileImg}
                    alt="Profile"
                    className="w-[36px] h-[36px] rounded-full object-cover border-2 border-[#00B7C2]"
                  />
                  <span>
                    {item.firstName} {item.lastName}
                  </span>
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
                  {item?.isSubscribed === false ? "UnSubscribe" : "Subscribe"}
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

      {referralModal && (
        <ReferralUrlModal
          link={referralLink}
          onClose={() => setReferralModal(false)}
        />
      )}
    </div>
  );
};

export default ReferralTable;

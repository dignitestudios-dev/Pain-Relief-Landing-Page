import React, { useEffect, useState } from "react";
import IDCards from "./IDCards";
import axios from "../../../../../axios";
import { ErrorToast } from "../../../../global/Toaster";

const IDCardsSection = ({ IdCardData, userData }) => {
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

  useEffect(() => {
    handleGenerateReferral();
  }, []);
  return (
    <div className="bg-white w-full rounded-[8px]  mt-4">
      <h2 className="text-[24px] font-[600] border-b pb-5 p-4">ID Cards</h2>
      <div>
        <IDCards
          IdCardData={IdCardData}
          userData={userData}
          referralLink={referralLink}
          referralLoading={referralLoading}
        />
      </div>
    </div>
  );
};

export default IDCardsSection;

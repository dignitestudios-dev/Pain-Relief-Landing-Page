import React from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/idcards/HeroSection";
import IDCards from "../../../../components/app/userInterface/dashboard/idcards/IDCards";
import { useGetCards } from "../../../../hooks/api/Get";

const UserIDCard = () => {
  
  const { data, loading } = useGetCards("/payment/get-subscription-user");
  return (
    <>
      <HeroSection />
      <div className="flex justify-center relative bottom-40 ">
        <div className="w-[90%]">
          <IDCards data={data} />
        </div>
      </div>
    </>
  );
};

export default UserIDCard;

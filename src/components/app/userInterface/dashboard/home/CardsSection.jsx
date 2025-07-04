import React from "react";
import {
  Appoitment,
  IdCard,
  Memberagreement,
  MemberGuide,
  MemberShip,
  Referfriend,
} from "../../../../../assets/export";
import { useNavigate } from "react-router";

const CardsSection = () => {
  const navigate = useNavigate();
  const cardData = [
    {
      img: Appoitment,
      title: "Schedule an Appointment",
      url: "/user/questions",
    },
    {
      img: MemberShip,
      title: "My Membership",
      url: "/user/membership",
    },
    {
      img: IdCard,
      title: "View ID Card",
      url: "/user/user-id-card",
    },
    {
      img: MemberGuide,
      title: "View Member Guide",
      url: "/user/membership-guide",
    },
    {
      img: Memberagreement,
      title: "View Member Agreement",
      url: "/user/membershipagreement",
    },
    {
      img: Referfriend,
      title: "Refer a Friend",
      url: "/user/refferal",
    },
  ];
  return (
    <div className="flex justify-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-[80%] max-w-[1440px]">
        {cardData?.map((card, index) => (
          <div
            onClick={() => navigate(card.url)}
            key={index}
            className="bg-white hover:bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] cursor-pointer p-8 w-full flex flex-col justify-center items-center rounded-[11.08px] transition duration-300 transform hover:scale-105 group"
          >
            <div>
              <img
                src={card?.img}
                className="w-[203.23px] h-[202.91px]"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-[20.32px] font-[600] text-[#212121] my-6 transition duration-300 group-hover:text-white text-center">
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;

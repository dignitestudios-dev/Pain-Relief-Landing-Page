import React from "react";
import Button from "../Inputs/Button";
import { CardsData } from "../../../../static/MemberCards";
import { useNavigate } from "react-router";

const Cards = () => {
    const navigate =useNavigate()

  return (
    <div>
      <h2 className="lg:text-[50px] md:text-[35px] text-[28px] font-semibold capitalize mt-4  text-start ">
        One Size For{" "}
        <span className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
          Everyone
        </span>
      </h2>
      <p className="text-[#565656] lg:text-[16px] md:text-[14px]  ">
        Not everyone has the same needs, therefore we have created options to
        help you purchase support programs for you and your family.
      </p>
      <h2 className="lg:text-[24px] md:text-[20px] text-[18px] font-[600] mt-3 ">
        Adjustable Tiers
      </h2>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 xl:justify-center lg:justify-start gap-10 items-center my-8">
        {CardsData.map((item, index) => (
          <div
            key={index}
            className="relative group xl:w-[400px] xl:h-[358px] rounded-[12px] overflow-hidden"
          >
            <div className="bg-white p-8 flex flex-col justify-center items-center text-center h-full transition-opacity duration-300 group-hover:opacity-0">
              <img src={item.img} className="w-[152px] h-[152px] mb-2" alt="" />
              <h2 className="text-[24px] font-[600] my-2 text-[#212121]">
                {item.title}
              </h2>
              <p className="text-[#212121] font-[400] text-[16px]">
                {item.para}
              </p>
            </div>

            <div className="absolute cursor-pointer inset-0 bg-img-card flex justify-center items-center text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div>
                <h2 className="text-white text-[24px] font-[600]">
                  {item.title}
                </h2>
                <p className="text-white text-[16px]  my-2">{item.para}</p>
                <button  onClick={() => navigate("/auth/account-selection")} className="bg-white text-[#29ABE2]  w-[249px] py-3 rounded-[8px] text-[16px] font-[500] mt-2">
                  <span className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
                    Sign Up Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

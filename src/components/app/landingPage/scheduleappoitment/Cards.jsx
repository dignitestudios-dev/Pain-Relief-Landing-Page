import React from "react";
import Button from "../Inputs/Button";
import { Location, ProfileImg } from "../../../../assets/export";
import { useNavigate } from "react-router";
const Cards = () => {
  const navigate = useNavigate();
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 ">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <div className="min-w-[250px] bg-white p-2 rounded-[14px]  mx-2 w-[279px] ">
          <div className="bg-cards  h-24 flex items-center justify-center rounded-md">
            <div className="bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] p-[3px] rounded-full relative top-6  ">
              <img
                src={ProfileImg}
                alt="Avatar"
                className="w-16 h-16 rounded-full bg-white"
              />
            </div>
          </div>
          <div className="text-center p-4">
            <h3 className="text-[16px] font-[600] text-[#181818] ">
              Service Provider Name
            </h3>
            <p className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent text-[14px] font-[500] ">
              Pain Relief Therapy
            </p>
            <div className="flex  items-center gap-2">
              <div>
                <img
                  src={Location}
                  className="w-[13px] h-[15.69px] object-contain  "
                  alt=""
                />
              </div>
              <div className="text-[#181818] text-nowrap text-[14px]  font-[500] ">
                {" "}
                Dallas, TX - 902 PainEase Plaza
              </div>
            </div>
            <p className="text-[#565656] text-[14px] font-[500] mt-1">
              20Miles Away
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[200px]  relative top-5 ">
              <Button
                text={"View Details"}
                onClick={() => navigate("/app/provider-detail")}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

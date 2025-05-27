import React from "react";
import { Location, ProfileImg } from "../../../../assets/export";
import Button from "../Inputs/Button";
import { useNavigate } from "react-router";

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="min-w-[250px] bg-white p-2 rounded-[14px] mx-2 w-[279px] flex flex-col justify-between min-h-[310px]">
      <div className="bg-cards  h-24 flex items-center justify-center rounded-md">
        <div className="bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] p-[3px] rounded-full relative top-6  ">
          <img
            src={data?.provider?.profilePicture}
            alt="Avatar"
            className="w-16 h-16 rounded-full bg-white"
          />
        </div>
      </div>
      <div className="text-center p-4">
        <h3 className="text-[16px] font-[600] text-[#181818] ">
          {data?.provider?.name}
        </h3>
        <p className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent text-[14px] font-[500] ">
          {data?.services?.flatMap((item) => item?.name).join(", ")}
        </p>
        <div className="flex  justify-center items-center gap-2">
          <div>
            <img
              src={Location}
              className="w-[13px] h-[15.69px] object-contain  "
              alt=""
            />
          </div>
          <div className="text-[#181818] text-[14px] font-[500] break-words whitespace-normal text-center">
            {" "}
            {data?.address}
          </div>
        </div>
        <p className="text-[#565656] text-[14px] font-[500] mt-1">
          20Miles Away
        </p>
      </div>
      <div className="flex justify-center items-center relative top-6">
        <div className="w-[200px]">
          <Button
            text={"View Details"}
            onClick={() =>
              navigate(`/app/provider-detail/${data?.provider?._id}`)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

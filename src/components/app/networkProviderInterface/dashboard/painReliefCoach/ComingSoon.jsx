import React from "react";
import { ComingSoonImg } from "../../../../../assets/export";

const ComingSoon = () => {
  return (
    <div className="flex justify-center my-10 p-10">
      <img
        src={ComingSoonImg}
        className="lg:h-[819px] md:h-[619px] h-[500px]  w-full "
        alt=""
      />
    </div>
  );
};

export default ComingSoon;

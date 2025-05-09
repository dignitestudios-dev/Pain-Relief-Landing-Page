import React from "react";

const JoinNowCards = () => {
  return (
    <div className="flex justify-center relative xl:top-20 lg:top-10 ">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-5 xl:w-[80%] w-full justify-center   xl:p-0 lg:p-4 p-10 xl:mb-0 mb-10 ">
        <div className="flex h-[347px] justify-center items-center rounded-[26px] bg-gradient-to-l to-[#63CFAC] from-[#29ABE2]">
          <div className="text-white text-center">
            <h2 className="xl:text-[32px] lg:text-[25px] font-[600] ">Become A Member</h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] max-w-[80%] mx-auto font-[500] ">
              Your path to better health starts here. Join now to find and book
              licensed chiropractors effortlessly.
            </p>
            <button className="bg-[#FFFFFF] rounded-[8px] xl:w-[305px] lg:w-[260px] md:w-[220px] w-[150px]  h-[49px] mt-3  ">
              <span className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
                Join Now
              </span>
            </button>
          </div>
        </div>
        <div className="flex h-[347px] justify-center items-center rounded-[26px] bg-[#212121]">
          <div className="text-white text-center">
            <h2 className="xl:text-[32px] lg:text-[25px]  font-[600] ">
              Join us as a Service Providers{" "}
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] max-w-[80%] mx-auto font-[500] ">
              Join as a service provider, connect with clients, and grow your
              practice—on your terms.
            </p>
            <button className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] rounded-[8px] xl:w-[305px] lg:w-[260px] md:w-[220px] w-[150px]  h-[49px]  mt-3 ">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNowCards;

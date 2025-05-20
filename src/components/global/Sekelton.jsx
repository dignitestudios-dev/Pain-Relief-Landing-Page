import React from "react";

export const SkeletonProviderCard = () => {
  return (
    <div className="min-w-[250px] bg-white p-2 rounded-[14px] mx-2 w-[279px] flex flex-col justify-between min-h-[310px] animate-pulse">
      <div className="bg-cards h-24 flex items-center justify-center rounded-md">
        <div className="bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] p-[3px] rounded-full relative top-6">
          <div className="w-16 h-16 rounded-full bg-gray-300"></div>
        </div>
      </div>

      <div className="text-center p-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6 mx-auto"></div>

        <div className="flex justify-center items-center gap-2 mt-2">
          <div className="w-[13px] h-[15.69px] bg-gray-300 rounded"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>

        <div className="h-3 bg-gray-200 rounded w-1/3 mx-auto mt-1"></div>
      </div>

      <div className="flex justify-center items-center mt-auto">
        <div className="w-[200px] h-10 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};
export const SkeletonNetworkDetail = () => {
  return (
    <div className="border-b border-[#EAEAEA] px-4 py-4 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>

        <div className="flex gap-3 items-center">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="h-3 bg-gray-300 rounded w-16"></div>
        </div>
      </div>

      <div className="mt-2 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  );
};
export const SkeletonProviderDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl p-4 lg:p-10 gap-6 animate-pulse">
      {/* Left side: Image + Text */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        {/* Avatar */}
        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[130px] h-[130px]">
          <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
            <div className="w-[120px] h-[120px] rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Name & Email */}
        <div className="text-center lg:text-left space-y-2 mt-2 lg:mt-0">
          <div className="h-6 bg-gray-300 rounded w-40 lg:w-60 mx-auto lg:mx-0"></div>
          <div className="h-4 bg-gray-200 rounded w-32 lg:w-48 mx-auto lg:mx-0"></div>
        </div>
      </div>

      {/* Button Placeholder */}
      <div className="w-[214px]">
        <div className="h-10 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

export const OptionSekelton = () => {
  <div className="absolute top-full left-0 w-full border rounded-[8px] mt-1 shadow-md z-10 max-h-60 overflow-y-auto bg-white text-black">
    {Array.from({ length: 4 }).map((_, index) => (
      <div
        key={index}
        className="flex items-center px-4 py-2 animate-pulse space-x-2"
      >
        <div className="w-4 h-4 bg-gray-300 rounded" />
        <div className="h-4 bg-gray-300 rounded w-3/4" />
      </div>
    ))}
  </div>;
};

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

export const FamilyMemberSkeleton = () => {
  return (
    <div className="bg-white rounded-[8px] my-6   animate-pulse">
      <div className="flex justify-between border-b items-center mb-4">
        <div className="h-6 bg-gray-300 rounded w-48 m-4"></div>
        <div className="h-4 bg-gray-300 rounded w-32 m-4"></div>
      </div>

      {[...Array(2)].map((_, index) => (
        <div key={index} className="bg-white border-b p-10 sm:p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-24">
            <div className="flex items-center gap-4">
              <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] bg-gray-300 rounded-full"></div>
              <div>
                <div className="h-5 bg-gray-300 rounded w-40 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
              <div>
                <div className="h-4 bg-gray-300 w-20 mb-2 rounded"></div>
                <div className="h-4 bg-gray-200 w-24 rounded"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-300 w-16 mb-2 rounded"></div>
                <div className="h-4 bg-gray-200 w-12 rounded"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-300 w-20 mb-2 rounded"></div>
                <div className="h-4 bg-gray-200 w-16 rounded"></div>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="mt-4">
            <div className="h-5 bg-gray-300 w-32 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 w-full rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const SubscriptionSkeleton = () => {
  return (
    <div>
      <div className="w-full xl:w-[50%] mt-4 bg-white rounded-[22px] p-6 lg:h-[752px] h-full flex flex-col justify-between animate-pulse">
        <div>
          <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>

          <div className="mt-4 flex justify-between gap-2 xl:items-center lg:items-start border-b border-[#e8e8e8] pb-2">
            <div>
              <div className="h-5 bg-gray-300 rounded w-32 mb-4"></div>

              <div className="flex flex-col md:flex-col items-center gap-3 lg:flex-col xl:flex-row xl:space-x-4">
                <div className="w-[17px] h-[17px] bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded w-20"></div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="h-8 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-16"></div>
            </div>
          </div>

          <div className="mt-6 mb-3 h-6 bg-gray-300 rounded w-40"></div>
          <ul className="space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-[18px] h-[18px] bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="w-[249px] h-[49px] bg-gray-300 rounded-[8px]"></div>
          <div className="h-10 bg-gray-300 rounded w-40"></div>
        </div>
      </div>
    </div>
  );
};

export const SuggestedSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="bg-provider-detail w-[90%] p-8 rounded-[12px] animate-pulse">
        <div className="flex justify-between items-center">
          <div className="my-6 space-y-2">
            <div className="h-6 w-60 bg-gray-300 rounded"></div>
            <div className="h-4 w-[90%] bg-gray-300 rounded"></div>
          </div>
          <div className="pb-4">
            <div className="h-6 w-6 bg-gray-300 rounded-sm"></div>
          </div>
        </div>

        <div className="flex flex-wrap lg:justify-between md:justify-center items-center xl:gap-0 lg:gap-5 md:gap-10 gap-3">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="max-w-xs w-full bg-white rounded-xl shadow-md border p-4 space-y-4 text-gray-800"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-300 rounded"></div>
                  <div className="h-3 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>

              <hr />

              <div className="flex justify-between text-sm space-x-2">
                <div className="space-y-1">
                  <div className="h-3 w-24 bg-gray-200 rounded"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-3 w-24 bg-gray-200 rounded"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="h-3 w-32 bg-gray-200 rounded"></div>
                <div className="h-4 w-40 bg-gray-300 rounded"></div>
                <div className="h-4 w-28 bg-gray-300 rounded"></div>
              </div>

              <div className="flex justify-between gap-2">
                <div className="w-full h-10 bg-gray-300 rounded-md"></div>
                <div className="w-full h-10 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

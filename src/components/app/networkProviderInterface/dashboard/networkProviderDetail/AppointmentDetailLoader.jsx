const AppointmentDetailLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center relative bottom-28 px-2 sm:px-4 md:px-6">
      <div className="grid w-full max-w-[1400px] gap-6 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-1 animate-pulse">
        {/* Left Section Skeleton */}
        <div className="bg-white rounded-[8px] p-4 sm:p-6 xl:col-span-4 lg:col-span-4 space-y-4">
          <div className="h-6 w-40 bg-gray-200 rounded"></div>

          <ul className="list-disc pl-5 space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index} className="space-y-2 border-b pb-4">
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              </li>
            ))}
          </ul>

          <div className="h-6 w-40 bg-gray-200 rounded mt-4"></div>
          <div className="w-full h-[200px] bg-gray-200 rounded-md"></div>

          <div className="flex flex-wrap justify-between border-b border-[#DFDFDF] pb-4 mt-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="w-[17px] h-[17px] bg-gray-300 rounded"></div>
              <div className="h-4 w-48 bg-gray-200 rounded"></div>
            </div>
            <div className="h-4 w-20 bg-gray-200 rounded mt-2 sm:mt-0"></div>
          </div>

          <div>
            <div className="h-6 w-48 bg-gray-200 rounded mt-4 mb-4"></div>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-[42px] h-[42px] rounded-full bg-gray-300"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>
              <div>
                <div className="h-3 w-16 bg-gray-300 mb-1 rounded"></div>
                <div className="h-4 w-28 bg-gray-200 rounded"></div>
              </div>
              <div>
                <div className="h-3 w-24 bg-gray-300 mb-1 rounded"></div>
                <div className="h-4 w-28 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section Skeleton */}
        <div className="bg-white min-h-[320px] max-h-[450px] w-full rounded-lg overflow-auto p-4 sm:p-6 xl:col-span-2 lg:col-span-4 space-y-4">
          <div className="h-[44px] w-full bg-gray-200 rounded"></div>
          <div className="h-[44px] w-full bg-gray-200 rounded"></div>

          <div className="mt-4 space-y-2">
            <div className="h-6 w-48 bg-gray-200 rounded"></div>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-[#DFDFDF] py-2"
              >
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="h-5 w-40 bg-gray-200 rounded mt-4"></div>
            <div className="h-4 w-full bg-gray-100 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailLoader;

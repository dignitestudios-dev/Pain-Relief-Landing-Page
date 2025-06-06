import { useState } from "react";
import { FiFilter } from "react-icons/fi";

import ServiceProviderCards from "./ServiceProviderCards";
import BookAppointmentFilter from "./BookAppointmentFilter";
import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";

const ServiceProviders = ({ providerData, setFilterData, loading }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();
  const getProviderData = (distance, address, services) => {
    setFilterData((prev) => ({
      ...prev,
      ...(distance !== "" && { distance }),
      ...(address !== "" && { address }),
      ...(services !== "" && { services }),
    }));
  };

  // useEffect(() => {
  //   if (providerData) {
  //     getProviderData(providerData);
  //   }
  // }, [providerData]);

  return (
    <div className="flex justify-center items-center w-full my-10 relative">
      <button
        className="md:hidden absolute -top-2 right-4 text-[24px] text-gray-600"
        onClick={() => setShowDrawer(true)}
      >
        <FiFilter />
      </button>

      {showDrawer && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex">
          <div className="bg-white w-[80%] max-w-sm h-full p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filter</h2>
              <button onClick={() => setShowDrawer(false)} className="text-2xl">
                ✕
              </button>
            </div>
            <BookAppointmentFilter getproviderData={getProviderData} />
          </div>
          <div className="flex-1" onClick={() => setShowDrawer(false)}></div>
        </div>
      )}

      <div className="grid grid-cols-12 xl:w-[90%] lg:w-[96%] xl:gap-4 lg:gap-1">
        <div className="col-span-12 md:col-span-3 hidden md:block">
          <h2
            onClick={() => navigate(-1)}
            className="flex -mt-10 mb-4 text-white font-[600] text-[19px] items-center"
          >
            <IoIosArrowBack size={16} color="white" /> Back
          </h2>
          <BookAppointmentFilter getproviderData={getProviderData} />
        </div>

        <div className="col-span-12 md:col-span-9 xl:mt-0 lg:mt-0 md:mt-0 mt-10  ">
          <div className="flex items-center gap-4 px-10 mb-2">
            <h2 className="text-[32px] font-semibold text-white">
              Search Results
            </h2>
            <span className="bg-white text-black text-sm font-medium rounded-full px-3 py-1">
              <p className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent ">
                {" "}
                {providerData?.length}
              </p>
            </span>
          </div>

          <div className="flex justify-center items-center mt-10">
            <ServiceProviderCards
              providerData={providerData}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviders;

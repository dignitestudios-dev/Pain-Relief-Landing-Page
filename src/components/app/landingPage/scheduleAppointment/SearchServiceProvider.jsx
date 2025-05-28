import { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import Cards from "./Cards";
import FilterSection from "./FilterSection";
const SearchServiceProvider = ({ setShowFilter, providerData, loading }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const getproviderData = (data) => {
    setFilterData(data);
  };

  useEffect(() => {
    if (providerData) {
      getproviderData(providerData);
    }
  }, [providerData]);

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
            <FilterSection setShowFilter={setShowFilter} />
          </div>
          <div className="flex-1" onClick={() => setShowDrawer(false)}></div>
        </div>
      )}

      <div className="grid grid-cols-12 xl:w-[90%] lg:w-[96%] xl:gap-4 lg:gap-1">
        <div className="col-span-12 md:col-span-3 hidden md:block">
          <FilterSection
            setShowFilter={setShowFilter}
            getproviderData={getproviderData}
          />
        </div>

        <div className="col-span-12 md:col-span-9 xl:mt-0 lg:mt-0 md:mt-0 mt-10  ">
          <h2 className="text-[32px] font-[600] mb-2 px-10">Search Results</h2>
          <div className="flex justify-center items-center">
            <Cards providerData={filterData} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchServiceProvider;

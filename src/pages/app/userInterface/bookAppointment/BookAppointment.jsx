import { useState } from "react";
import HeroSection from "../../../../components/app/userInterface/bookAppointment/HeroSection";
import ServiceProviders from "../../../../components/app/userInterface/bookAppointment/ServiceProviders";
import { useAppointmentProvider } from "../../../../hooks/api/Get";
import Pagination from "../../../../components/global/Pagination";
import { useLocation } from "react-router";

const BookAppointment = () => {
  // const { longitude, latitude } = useContext(AppContext);
  const location = useLocation();

  const [filterData, setFilterData] = useState({
    distance: 10,
    address: {},
    services: [],
    page: 1,
  });

  // useEffect(() => {
  //   if (latitude && longitude) {
  //     setFilterData((prev) => ({
  //       ...prev,
  //       address: {},
  //     }));
  //   }
  // }, [latitude]);
  //  coordinates: [longitude,  latitude]

  const handlePageChange = (page) => {
    setFilterData((prev) => ({
      ...prev,
      page,
      distance: 0,
    }));
  };

  // const [update, setUpdate] = useState("");

  const { data, loading, pagination } = useAppointmentProvider(
    `/provider/get-providers`,
    filterData,
    location?.state?.answer
  );

  return (
    <div>
      <HeroSection />
      <div className="relative bottom-40 ">
        <ServiceProviders
          providerData={data}
          loading={loading}
          filterData={filterData}
          setFilterData={setFilterData}
        />
        <div className="w-full flex justify-end">
          <div className=" w-[880px] px-6">
            <Pagination
              currentPage={pagination?.currentPage}
              totalPages={pagination?.totalPages}
              onPageChange={handlePageChange}
              setCurrentPage={setFilterData.page}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;

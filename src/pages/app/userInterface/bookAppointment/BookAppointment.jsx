import { useState } from "react";
import HeroSection from "../../../../components/app/userInterface/bookAppointment/HeroSection";
import ServiceProviders from "../../../../components/app/userInterface/bookAppointment/ServiceProviders";
import { useAppointmentProvider } from "../../../../hooks/api/Get";

const BookAppointment = () => {
  const [filterData, setFilterData] = useState({
    distance: 10,
    address: {},
    services: [],
  });

  // const [update, setUpdate] = useState("");

  const { data, loading } = useAppointmentProvider(
    `/provider/get-providers`,
    filterData
  );

  return (
    <div>
      <HeroSection />
      <ServiceProviders
        providerData={data}
        loading={loading}
        filterData={filterData}
        setFilterData={setFilterData}
      />
    </div>
  );
};

export default BookAppointment;

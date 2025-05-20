import { useState } from "react";
import HeroSection from "../../../components/app/landingPage/scheduleAppointment/HeroSection";
import SearchServiceProvider from "../../../components/app/landingPage/scheduleAppointment/SearchServiceProvider";
import { useDashboardProvider, useTherapyType } from "../../../hooks/api/Get";

const ScheduleAppointment = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [update, setUpdate] = useState("");
  const [services, setServices] = useState([]);
  const [radius, setRadius] = useState([]);

  const radiusOptions = [
    { _id: 10, name: "10" },
    { _id: 20, name: "20" },
    { _id: 30, name: "30" },
    { _id: 40, name: "40" },
    { _id: 50, name: "50" },
  ];

  const [filters, setFilter] = useState({
    zipCode: "",
    therapistName: "",
    practiceName: "",
  });

  const { data, loading } = useDashboardProvider(
    `/provider/dashboard`,
    { ...filters, radius: radius.map((item) => item.id) },
    services,
    1,
    update,
    isTrue
  );

  const handleFetchProvider = () => {
    setIsTrue(true);
    setUpdate((prev) => !prev);
  };

  const { data: therapyTypes, loading: loader } =
    useTherapyType(`/booking/services`);

  const handleSelect = (option) => {
    setServices((prev) => {
      const exists = prev.some((item) => item.id === option._id);

      if (exists) {
        return prev.filter((item) => item.id !== option._id);
      } else {
        return [...prev, { name: option.name, id: option._id }];
      }
    });
  };

  const handleDistance = (option) => {
    setRadius((prev) => {
      const exists = prev.some((item) => item.id === option._id);

      if (exists) {
        return prev.filter((item) => item.id !== option._id);
      } else {
        return [{ name: option.name, id: option._id }];
      }
    });
  };

  return (
    <div>
      <HeroSection
        setShowFilter={setShowFilter}
        showFilter={showFilter}
        filters={filters}
        setFilter={setFilter}
        therapyTypes={therapyTypes}
        setUpdate={setUpdate}
        services={services}
        radius={radius}
        handleSelect={handleSelect}
        handleDistance={handleDistance}
        radiusOptions={radiusOptions}
        isTrue={isTrue}
        handleFetchProvider={handleFetchProvider}
        loader={loader}
      />
      {isTrue && (
        <SearchServiceProvider
          setShowFilter={setShowFilter}
          providerData={data}
          loading={loading}
        />
      )}
    </div>
  );
};

export default ScheduleAppointment;

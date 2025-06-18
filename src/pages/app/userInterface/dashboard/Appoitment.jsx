import { useMemo, useState } from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/appoitment/HeroSection";
import AppoitmentTable from "../../../../components/app/userInterface/dashboard/appoitment/AppoitmentTable";
import AppointmentCards from "../../../../components/app/userInterface/dashboard/appoitment/AppoitmentCards";
import { useSchedules } from "../../../../hooks/api/Get";
import { SuggestedSkeleton } from "../../../../components/global/Sekelton";

const Appoitment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [isSuggestedView, setIsSuggestedView] = useState(true);

  const [filterDate, setFilterDate] = useState({ startDate: "", endDate: "" });

  const [filters, setFilters] = useState({
    status: "",
    startDate: "",
    endDate: "",
    page: 1,
  });

  const { data, loading, pagination } = useSchedules(
    `/booking/get-appointments`,
    filters,
    update
  );
  console.log("🚀 ~ AppoitmentTable ~ data:", data);
  const hasPending = useMemo(
    () => data?.some((appt) => appt?.status === "Suggested"),
    [data]
  );
  return (
    <div>
      <HeroSection />
      {isSuggestedView &&
        hasPending &&
        (loading ? (
          <SuggestedSkeleton />
        ) : (
          <AppointmentCards
            data={data}
            setUpdate={setUpdate}
            setIsSuggestedView={setIsSuggestedView}
          />
        ))}
      <AppoitmentTable
        data={data}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
        loading={loading}
        pagination={pagination}
        setFilters={setFilters}
      />
    </div>
  );
};

export default Appoitment;

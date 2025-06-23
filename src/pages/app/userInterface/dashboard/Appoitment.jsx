import { useMemo, useState } from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/appoitment/HeroSection";
import AppoitmentTable from "../../../../components/app/userInterface/dashboard/appoitment/AppoitmentTable";
import AppointmentCards from "../../../../components/app/userInterface/dashboard/appoitment/AppoitmentCards";
import { useSchedules } from "../../../../hooks/api/Get";
import { SuggestedSkeleton } from "../../../../components/global/Sekelton";

const Appoitment = () => {
  const [isSuggestedView, setIsSuggestedView] = useState(true);
  const [update, setUpdate] = useState(false);

  const { data, loading } = useSchedules(
    `/booking/get-appointments`,
    "",
    update
  );

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
      <AppoitmentTable data={data} />
    </div>
  );
};

export default Appoitment;

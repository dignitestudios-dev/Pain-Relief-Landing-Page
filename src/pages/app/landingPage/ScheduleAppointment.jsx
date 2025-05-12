import { useState } from "react";
import HeroSection from "../../../components/app/landingPage/scheduleAppointment/HeroSection";
import SearchServiceProvider from "../../../components/app/landingPage/scheduleAppointment/SearchServiceProvider";

const ScheduleAppointment = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      <HeroSection setShowFilter={setShowFilter} showFilter={showFilter} />
      {showFilter && <SearchServiceProvider setShowFilter={setShowFilter} />}
    </div>
  );
};

export default ScheduleAppointment;

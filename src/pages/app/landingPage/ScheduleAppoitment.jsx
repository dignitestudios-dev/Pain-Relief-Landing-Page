import React, { useState } from "react";
import HeroSection from "../../../components/app/landingPage/scheduleappoitment/HeroSection";
import SearchServiceProvider from "../../../components/app/landingPage/scheduleappoitment/SearchServiceProvider";

const ScheduleAppoitment = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      <HeroSection setShowFilter={setShowFilter} showFilter={showFilter} />
      {showFilter && <SearchServiceProvider setShowFilter={setShowFilter} />}
    </div>
  );
};

export default ScheduleAppoitment;

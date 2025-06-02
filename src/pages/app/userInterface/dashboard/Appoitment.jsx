import React from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/appoitment/HeroSection";
import AppoitmentTable from "../../../../components/app/userInterface/dashboard/appoitment/AppoitmentTable";
import AppointmentCards from "../../../../components/app/userInterface/dashboard/appoitment/AppoitmentCards";

const Appoitment = () => {
  return (
    <div>
      <HeroSection />
      <AppointmentCards />
      <AppoitmentTable />
    </div>
  );
};

export default Appoitment;

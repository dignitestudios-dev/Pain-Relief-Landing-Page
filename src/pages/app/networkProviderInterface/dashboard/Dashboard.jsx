import AppointmentCard from "../../../../components/app/networkProviderInterface/dashboard/home/AppoitmentCards";
import AppoitmentTable from "../../../../components/app/networkProviderInterface/dashboard/home/AppoitmentTable";
import BecomeACoachCard from "../../../../components/app/networkProviderInterface/dashboard/home/BecomeACoachCard";
import HeroSection from "../../../../components/app/networkProviderInterface/dashboard/home/HeroSection";

const Dashboard = () => {
  return (
    <div>
      <HeroSection />
      <AppointmentCard />
      <AppoitmentTable />
      <BecomeACoachCard />
    </div>
  );
};

export default Dashboard;

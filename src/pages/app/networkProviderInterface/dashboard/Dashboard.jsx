import { useContext, useState } from "react";
import AppointmentCard from "../../../../components/app/networkProviderInterface/dashboard/home/AppoitmentCards";
import AppoitmentTable from "../../../../components/app/networkProviderInterface/dashboard/home/AppoitmentTable";
import BecomeACoachCard from "../../../../components/app/networkProviderInterface/dashboard/home/BecomeACoachCard";
import HeroSection from "../../../../components/app/networkProviderInterface/dashboard/home/HeroSection";
import { useSendRequest } from "../../../../hooks/api/Post";
import RequestSendModal from "../../../../components/app/networkProviderInterface/dashboard/home/RequestSendModal";
import { processSendRequest } from "../../../../lib/utils";
import { AppContext } from "../../../../context/AppContext";

const Dashboard = () => {
  const { userData, loginAuth } = useContext(AppContext);
  console.log(userData, "userData==>");
  const [requestModal, setRequestModal] = useState(false);
  console.log("🚀 ~ Dashboard ~ requestModal:", requestModal);
  const { loading: requestloader, postData: postRequestData } =
    useSendRequest();

  const handleRequestSend = () => {
    postRequestData(
      "/provider/request-pain-relief",
      null,
      processSendRequest,
      setRequestModal,
      () => {},
      loginAuth
    );
  };
  return (
    <div>
      <HeroSection />
      <AppointmentCard />
      <AppoitmentTable />
      <BecomeACoachCard
        requestModal={requestModal}
        handleRequestSend={handleRequestSend}
        requestloader={requestloader}
        userData={userData}
      />
      {requestModal && (
        <RequestSendModal
          isOpen={requestModal}
          onClick={() => setRequestModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;

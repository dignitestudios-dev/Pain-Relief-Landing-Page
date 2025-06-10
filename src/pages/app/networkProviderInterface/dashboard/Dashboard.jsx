import { useContext, useState } from "react";
import AppointmentCard from "../../../../components/app/networkProviderInterface/dashboard/home/AppoitmentCards";
import AppoitmentTable from "../../../../components/app/networkProviderInterface/dashboard/home/AppoitmentTable";
import BecomeACoachCard from "../../../../components/app/networkProviderInterface/dashboard/home/BecomeACoachCard";
import HeroSection from "../../../../components/app/networkProviderInterface/dashboard/home/HeroSection";
import { useSendRequest } from "../../../../hooks/api/Post";
import RequestSendModal from "../../../../components/app/networkProviderInterface/dashboard/home/RequestSendModal";
import { processSendRequest } from "../../../../lib/utils";
import { AppContext } from "../../../../context/AppContext";
import { useSchedules } from "../../../../hooks/api/Get";

const Dashboard = () => {
  const { userData, loginAuth } = useContext(AppContext);

  const [requestModal, setRequestModal] = useState(false);

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

  const { data, loading, pagination } = useSchedules(
    `/booking/get-appointments-provider`
  );
  console.log("🚀 ~ Dashboard ~ pagination:", pagination);

  return (
    <div>
      <HeroSection />
      <AppointmentCard />
      <AppoitmentTable appointmentData={data} loading={loading} />
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

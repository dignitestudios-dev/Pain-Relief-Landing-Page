import { useContext, useEffect, useMemo, useState } from "react";
import AppointmentCard from "../../../../components/app/networkProviderInterface/dashboard/home/AppoitmentCards";
import AppoitmentTable from "../../../../components/app/networkProviderInterface/dashboard/home/AppoitmentTable";
import BecomeACoachCard from "../../../../components/app/networkProviderInterface/dashboard/home/BecomeACoachCard";
import HeroSection from "../../../../components/app/networkProviderInterface/dashboard/home/HeroSection";
import { useSendRequest } from "../../../../hooks/api/Post";
import RequestSendModal from "../../../../components/app/networkProviderInterface/dashboard/home/RequestSendModal";
import { processSendRequest } from "../../../../lib/utils";
import { AppContext } from "../../../../context/AppContext";
import { useSchedules } from "../../../../hooks/api/Get";
import { SuggestedSkeleton } from "../../../../components/global/Sekelton";

const Dashboard = () => {
  const { userData, loginAuth } = useContext(AppContext);

  const [requestModal, setRequestModal] = useState(false);
  const [isSuggestedView, setIsSuggestedView] = useState(true);
  const [update, setUpdate] = useState(false);

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

  const { data, loading } = useSchedules(
    `/booking/get-appointments-provider`,
    "",
    update
  );

  const hasPending = useMemo(
    () => data?.some((appt) => appt?.status === "Pending"),
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
          <AppointmentCard
            setIsSuggestedView={() => setIsSuggestedView()}
            data={data}
            setUpdate={setUpdate}
          />
        ))}
      <AppoitmentTable update={update} />
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

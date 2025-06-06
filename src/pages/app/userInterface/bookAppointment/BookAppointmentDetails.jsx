import BookProviderDetailSection from "../../../../components/app/userInterface/bookAppointment/BookProviderDetailSection";
import ProviderDetailHeroSection from "../../../../components/app/userInterface/bookAppointment/ProviderDetailHeroSection";
import { useLocation, useNavigate, useParams } from "react-router";
import { useDetailProvider } from "../../../../hooks/api/Get";
import BookChiropractorModal from "../../../../components/app/userInterface/dashboard/netwrokProfile/BookChiropractorModal";
import { useState } from "react";
import ScheduleModal from "../../../../components/app/userInterface/dashboard/netwrokProfile/ScheduleModal";
import RequestSendModal from "../../../../components/app/userInterface/bookAppointment/RequestSendModal";

const BookAppointmentDetails = () => {
  const navigate = useNavigate();
  const [bookModal, setBookModal] = useState(false);
  const [scheduleModal, setScheduleModal] = useState(false);
  const [requestSendModal, setRequestSendModal] = useState(false);
  const { id: providerDetail } = useParams();
  const location = useLocation();
  const provider = location.state?.provider;

  const { data, loading } = useDetailProvider(
    `/provider/details`,
    providerDetail
  );
  return (
    <div>
      <ProviderDetailHeroSection
        providerDetail={data}
        loading={loading}
        setBookModal={setBookModal}
      />
      <BookProviderDetailSection
        providerDetail={data}
        loading={loading}
        provider={provider}
      />
      {bookModal && (
        <BookChiropractorModal
          onClose={() => setBookModal(false)}
          onClick={() => {
            setBookModal(false);
            setScheduleModal(true);
          }}
        />
      )}
      {scheduleModal && (
        <ScheduleModal
          onClick={() => {
            setScheduleModal(false);
            setRequestSendModal(true);
          }}
        />
      )}
      {requestSendModal && (
        <RequestSendModal onClick={() => navigate("/user/user-details")} />
      )}
    </div>
  );
};

export default BookAppointmentDetails;

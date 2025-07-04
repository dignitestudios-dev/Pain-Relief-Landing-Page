import BookProviderDetailSection from "../../../../components/app/userInterface/bookAppointment/BookProviderDetailSection";
import ProviderDetailHeroSection from "../../../../components/app/userInterface/bookAppointment/ProviderDetailHeroSection";
import { useNavigate, useParams } from "react-router";
import { useDetailProvider, useUserProfile } from "../../../../hooks/api/Get";
import BookChiropractorModal from "../../../../components/app/userInterface/dashboard/netwrokProfile/BookChiropractorModal";
import { useState } from "react";
import ScheduleModal from "../../../../components/app/userInterface/dashboard/netwrokProfile/ScheduleModal";
import RequestSendModal from "../../../../components/app/userInterface/bookAppointment/RequestSendModal";
import { useAppointmentRequest } from "../../../../hooks/api/Post";
import { processAppointmentRequest } from "../../../../lib/utils";

const BookAppointmentDetails = () => {
  const navigate = useNavigate();
  const [bookModal, setBookModal] = useState(false);
  const [scheduleModal, setScheduleModal] = useState(false);
  const [requestSendModal, setRequestSendModal] = useState(false);
  const { id: providerDetail } = useParams();

  const [dateTime, setDateTime] = useState({ date: "", time: "" });
  const [appointmentId, setAppointmentId] = useState("");
  const [dateTimeError, setDateTimeError] = useState(false);

  const [activeMember, setActiveMember] = useState(null);

  const { data: profile } = useUserProfile("/user/get-profile");

  const { data, loading } = useDetailProvider(
    `/provider/details`,
    providerDetail
  );

  const { loading: isLoader, postData } = useAppointmentRequest();

  const appointmentBooking = async (data) => {
    if (!dateTime.date || !dateTime.time) {
      setDateTimeError("Please select both a date and a time before booking.");
      return;
    }
    const coordinates = data?.addresses[0]?.location;
    const payLoad = {
      appointmentDate: dateTime?.date
        ? new Date(dateTime.date).toISOString()
        : "",
      appointmentTime: dateTime?.time,
      userLocation: {
        longitude: coordinates?.[0] ?? 0,
        latitude: coordinates?.[1] ?? 0,
      },
      description: "",
      addressId: data?.addresses[0]?._id,
      ...(profile?._id !== activeMember &&
        activeMember && {
          familyMemberId: activeMember,
        }),
    };

    postData(
      "/booking/create-appointment",
      payLoad,
      processAppointmentRequest,
      handleModal,
      setAppointmentId
    );
  };

  const handleModal = () => {
    setScheduleModal(false);
    setRequestSendModal(true);
  };

  return (
    <div>
      <ProviderDetailHeroSection
        providerDetail={data}
        loading={loading}
        setBookModal={setBookModal}
      />
      <BookProviderDetailSection providerDetail={data} loading={loading} />
      {bookModal && (
        <BookChiropractorModal
          onClose={() => setBookModal(false)}
          onClick={() => {
            setBookModal(false);
            setScheduleModal(true);
          }}
          profile={profile}
          activeMember={activeMember}
          setActiveMember={setActiveMember}
          profileId={profile?._id}
        />
      )}
      {scheduleModal && (
        <ScheduleModal
          onClose={() => setScheduleModal(false)}
          onClick={(data) => appointmentBooking(data)}
          setDateTime={setDateTime}
          dateTime={dateTime}
          data={data}
          isLoader={isLoader}
          dateTimeError={dateTimeError}
          setDateTimeError={setDateTimeError}
        />
      )}
      {requestSendModal && (
        <RequestSendModal
          onClose={() => navigate(`/user/user-details/${appointmentId}`)}
          onClick={() => navigate(`/user/user-details/${appointmentId}`)}
        />
      )}
    </div>
  );
};

export default BookAppointmentDetails;

import React, { useState } from "react";
import NetwrokProfessionalDetail from "../../../../components/app/userInterface/dashboard/netwrokProfile/NetwrokProfessionalDetail";
import HeroSection from "../../../../components/app/userInterface/dashboard/netwrokProfile/HeroSection";
import BookChiropractorModal from "../../../../components/app/userInterface/dashboard/netwrokProfile/BookChiropractorModal";
import ScheduleModal from "../../../../components/app/userInterface/dashboard/netwrokProfile/ScheduleModal";
import RequestSentSuccess from "../../../../components/app/userInterface/dashboard/netwrokProfile/RequestSentSuccess";
import { useNavigate } from "react-router";

const NetworkProfile = () => {
  const navigate =useNavigate()
  const [bookModal, setBookModal] = useState(false);
  const [scheduleModal, setScheduleModal] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <div>
      <HeroSection setBookModal={setBookModal} />
      <NetwrokProfessionalDetail />
      {bookModal && (
        <BookChiropractorModal
          active={active}
          setActive={setActive}
          onClick={() => {
            setBookModal(false);
            setScheduleModal(true);
          }}
          onClose={() => setBookModal(false)}
        />
      )}
      {scheduleModal && (
        <ScheduleModal
          onClose={() => setScheduleModal(false)}
          onClick={() => {
            setScheduleModal(false);
            setRequestModal(true);
          }}
        />
      )}
      {requestModal && <RequestSentSuccess onClick={()=>navigate('/user/user-details')} />}
    </div>
  );
};

export default NetworkProfile;

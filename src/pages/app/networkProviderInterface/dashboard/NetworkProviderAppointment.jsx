import { useEffect, useState } from "react";
import HeroSection from "../../../../components/app/networkProviderInterface/dashboard/networkProviderDetail/HeroSection";
import AppointmentQuestionSection from "../../../../components/app/networkProviderInterface/dashboard/networkProviderDetail/AppointmentQuestionSection";
import CancelModal from "../../../../components/app/userInterface/dashboard/userDetails/CancelModal";
import CancelReasonModal from "../../../../components/app/userInterface/dashboard/userDetails/CancelReasonModal";
import CancelRequestSuccess from "../../../../components/app/userInterface/dashboard/userDetails/CancelRequestSuccess";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router";
import { useAppointmentRequest } from "../../../../hooks/api/Post";
import { processAppointmentRequest } from "../../../../lib/utils";
import AcceptModal from "../../../../components/app/networkProviderInterface/dashboard/home/AcceptModal";
import axios from "../../../../axios";
import AppointmentDetailLoader from "../../../../components/app/networkProviderInterface/dashboard/networkProviderDetail/AppointmentDetailLoader";
import SuggestTimeModal from "../../../../components/app/networkProviderInterface/dashboard/home/SuggestTimeModal";
import SuggestDeferentTimeModal from "../../../../components/app/networkProviderInterface/dashboard/home/SuggestDeferentTimeModal";
import DiffrentTimeSuggestedModal from "../../../../components/app/networkProviderInterface/dashboard/home/DiffrentTimeSuggestedModal";

const NetworkProviderAppointment = () => {
  const [appointmentState, setAppointmentState] = useState({ status: "" });

  const [detailLoading, setDetailLoading] = useState(true);

  const [cancelModal, setCancelModal] = useState(false);
  const [cancelReasonModal, setCancelReasonModal] = useState(false);
  const [cancelRequestModal, setCancelRequestModal] = useState(false);

  // Set Suggestion Detail Modal Work
  const [suggestTimeModal, setSuggestTimeModal] = useState(false);
  const [suggestDifferentTimeModal, setSuggestDifferentTimeModal] =
    useState(false);
  const [differentTimeSuggestedModal, setDifferentTimeSuggestedModal] =
    useState(false);

  const [dateTime, setDateTime] = useState({ date: "", time: "" });

  const [dateTimeError, setDateTimeError] = useState(false);
  const [scheduleDescription, setScheduleDescription] = useState("");
  //

  const [acceptModal, setAcceptModal] = useState(false);
  const [update, setUpdate] = useState(false);

  const { loading, postData } = useAppointmentRequest();
  const [appointmentData, setAppointmentData] = useState("");

  const { state } = useLocation();

  const appointmentDetail = async () => {
    setDetailLoading(true);
    try {
      const response = await axios.get(
        `/booking/get-appointment-provider/${state?._id}`
      );
      if (response.status === 200) {
        setAppointmentData(response?.data?.data);
      }
    } catch (error) {
      console.log("🚀 ~ appointmentDetail ~ error:", error);
    } finally {
      setDetailLoading(false);
    }
  };

  useEffect(() => {
    appointmentDetail();
  }, [update]);

  const validationSchema = Yup.object().shape({
    description: Yup.string()
      .required("Description is required")
      .min(5, "Description must be at least 5 characters")
      .max(500, "Description cannot exceed 500 characters"),
  });
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        description: "",
      },
      validationSchema:
        cancelReasonModal || suggestDifferentTimeModal
          ? validationSchema
          : false,

      onSubmit: async (values) => {
        if (appointmentState.status === "Suggested" && !dateTime.time) {
          setDateTimeError("Suggestion time is required");
          return;
        }
        const payLoad = {
          _id: state?._id,
          ...(dateTime.time && {
            suggestedTime: dateTime.time,
          }),
          reason: values?.description || scheduleDescription,
          status: appointmentState.status,
        };
        console.log("🚀 ~ onSubmit: ~ payLoad:", payLoad);

        postData(
          "/booking/update-status",
          payLoad,
          processAppointmentRequest,
          handleModal,
          setUpdate
        );
      },
    });

  const handleModal = (status, time) => {
    console.log("🚀 ~ handleModal ~ time:", time);
    console.log("🚀 ~ handleModal ~ status:", status);
    if (status) setAppointmentState({ status: status });

    if (status === "Rejected") {
      setCancelModal(true);
    } else if (status === "Approved") {
      setAcceptModal(true);
    } else if (status === "Completed") {
      handleSubmit();
    } else if (status === "Suggested") {
      setSuggestTimeModal(true);
    } else {
      setCancelReasonModal(false);
      setAcceptModal(false);
      if (status === "IsReject") {
        setCancelRequestModal(true);
      } else if (status === "IsSuggested") {
        setSuggestTimeModal(false);
        setSuggestDifferentTimeModal(false);
        setDifferentTimeSuggestedModal(true);
      }
    }
  };

  return (
    <div>
      <HeroSection />

      {detailLoading ? (
        <AppointmentDetailLoader />
      ) : (
        <AppointmentQuestionSection
          AppointmentData={appointmentData}
          handleModal={handleModal}
        />
      )}
      {cancelModal && (
        <CancelModal
          heading={"Reject Reason"}
          onClick={() => {
            setCancelModal(false);
            setCancelReasonModal(true);
          }}
          onClose={() => setCancelModal(false)}
        />
      )}
      {cancelReasonModal && (
        <CancelReasonModal
          heading={"Reject Request"}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          loading={loading}
          onCLose={() => setCancelReasonModal(false)}
        />
      )}
      {cancelRequestModal && (
        <CancelRequestSuccess
          onClick={() => setCancelRequestModal(false)}
          heading="Request Rejected"
          content="You have rejected user request. Thank you for taking action properly!"
        />
      )}
      {acceptModal && (
        <AcceptModal
          onClick={() => handleSubmit()}
          type={"submit"}
          loading={loading}
          onClose={() => setAcceptModal(false)}
        />
      )}
      {suggestTimeModal && (
        <SuggestTimeModal
          onClose={() => setSuggestTimeModal(false)}
          onClick={() => {
            setSuggestTimeModal(false);
            setSuggestDifferentTimeModal(true);
          }}
        />
      )}
      {suggestDifferentTimeModal && (
        <SuggestDeferentTimeModal
          onClose={() => {
            setSuggestDifferentTimeModal(false);
          }}
          onClick={handleSubmit}
          setDateTime={setDateTime}
          dateTime={dateTime}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          loading={loading}
          dateTimeError={dateTimeError}
          setDateTimeError={setDateTimeError}
        />
      )}
      {differentTimeSuggestedModal && (
        <DiffrentTimeSuggestedModal
          onClick={() => setDifferentTimeSuggestedModal(false)}
        />
      )}
    </div>
  );
};

export default NetworkProviderAppointment;

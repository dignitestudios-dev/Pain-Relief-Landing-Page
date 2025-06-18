import { useEffect, useState } from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/userDetails/HeroSection";
import DetailsSection from "../../../../components/app/userInterface/dashboard/userDetails/DetailsSection";
import CancelModal from "../../../../components/app/userInterface/dashboard/userDetails/CancelModal";
import CancelReasonModal from "../../../../components/app/userInterface/dashboard/userDetails/CancelReasonModal";
import CancelRequestSuccess from "../../../../components/app/userInterface/dashboard/userDetails/CancelRequestSuccess";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router";
import axios from "../../../../axios";
import AppointmentDetailLoader from "../../../../components/app/networkProviderInterface/dashboard/networkProviderDetail/AppointmentDetailLoader";
import { processAppointmentRequest } from "../../../../lib/utils";
import { useAppointmentRequest } from "../../../../hooks/api/Post";
const UserDetails = () => {
  const [cancelModal, setCancelModal] = useState(false);
  const [cancelReasonModal, setCancelReasonModal] = useState(false);
  const [cancelRequestModal, setCancelRequestModal] = useState(false);

  const [appointmentData, setAppointmentData] = useState("");
  const { loading, postData } = useAppointmentRequest();
  const [detailLoading, setDetailLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  const [appointmentState, setAppointmentState] = useState({
    suggestedTime: "",
    status: "",
  });

  const { id } = useParams();

  const appointmentDetail = async () => {
    setDetailLoading(true);
    try {
      const response = await axios.get(`/booking/get-appointment/${id}`);
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
      validationSchema: validationSchema,

      onSubmit: async (values) => {
        const payLoad = {
          _id: id,
          rejectedReason: values?.description,
          status: appointmentState.status,
        };
        console.log("🚀 ~ onSubmit: ~ payLoad:", payLoad);

        postData(
          "/booking/accept-reject",
          payLoad,
          processAppointmentRequest,
          handleModal,
          setUpdate
        );
      },
    });

  const handleModal = (status, time) => {
    console.log("🚀 ~ handleModal ~ time:", time);

    if (status) setAppointmentState((prev) => ({ ...prev, status: status }));
    if (status === "Rejected") {
      setCancelModal(true);
    } else {
      setCancelReasonModal(false);

      if (status === "IsReject") {
        setCancelRequestModal(true);
      }
    }
  };
  return (
    <div>
      <HeroSection />
      {detailLoading ? (
        <AppointmentDetailLoader />
      ) : (
        <DetailsSection
          setCancelModal={setCancelModal}
          appointmentData={appointmentData}
          handleModal={handleModal}
        />
      )}
      {cancelModal && (
        <CancelModal
          heading={"Cancel Booking"}
          onClick={() => {
            setCancelModal(false);
            setCancelReasonModal(true);
          }}
        />
      )}
      {cancelReasonModal && (
        <CancelReasonModal
          heading={"Cancellation Reason"}
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          onCLose={() => setCancelReasonModal(false)}
          loading={loading}
        />
      )}
      {cancelRequestModal && (
        <CancelRequestSuccess
          onClick={() => setCancelRequestModal(false)}
          heading="Cancelled Booking"
          content="You have Reject the user request. Thank you for taking action
              promptly!"
        />
      )}
    </div>
  );
};

export default UserDetails;

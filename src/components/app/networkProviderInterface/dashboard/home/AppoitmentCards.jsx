import { useState } from "react";
import AcceptModal from "./AcceptModal";
import RejectModal from "./RejectModal";
import RejectResonModal from "./RejectResonModal";
import RequestRejectedModal from "./RequestRejectedModal";
import SuggestTimeModal from "./SuggestTimeModal";
import SuggestDeferentTimeModal from "./SuggestDeferentTimeModal";
import DiffrentTimeSuggestedModal from "./DiffrentTimeSuggestedModal";
import { getDateFormat } from "../../../../../lib/helpers";
import { useAppointmentRequest } from "../../../../../hooks/api/Post";
import CancelModal from "../../../userInterface/dashboard/userDetails/CancelModal";
import CancelRequestSuccess from "../../../userInterface/dashboard/userDetails/CancelRequestSuccess";
import CancelReasonModal from "../../../userInterface/dashboard/userDetails/CancelReasonModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { processAppointmentRequest } from "../../../../../lib/utils";

const AppointmentCard = ({ setIsSuggestedView, data, setUpdate }) => {
  console.log("🚀 ~ AppointmentCard ~ data:", data);
  const [appointmentState, setAppointmentState] = useState({ status: "" });
  console.log("🚀 ~ AppointmentCard ~ appointmentState:", appointmentState);
  const [appointmentId, setAppointmentId] = useState("");

  const [acceptModal, setAcceptModal] = useState(false);
  const [suggestTimeModal, setSuggestTimeModal] = useState(false);
  const [suggestDifferentTimeModal, setSuggestDifferentTimeModal] =
    useState(false);
  const [differentTimeSuggestedModal, setDifferentTimeSuggestedModal] =
    useState(false);

  const [dateTime, setDateTime] = useState({ date: "", time: "" });
  const [dateTimeError, setDateTimeError] = useState(false);

  const [cancelModal, setCancelModal] = useState(false);
  const [cancelReasonModal, setCancelReasonModal] = useState(false);
  const [cancelRequestModal, setCancelRequestModal] = useState(false);

  const { loading, postData } = useAppointmentRequest();

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
        console.log("on submit call -- ");
        if (appointmentState.status === "Suggested" && !dateTime.time) {
          setDateTimeError("Suggestion time is required");
          return;
        }
        const payLoad = {
          _id: appointmentId,
          ...(dateTime.time && {
            suggestedTime: dateTime.time,
          }),
          reason: values?.description || "",
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
    if (status) setAppointmentState({ status: status });

    if (status === "Rejected") {
      setCancelModal(true);
      setAppointmentId(time);
    } else if (status === "Approved") {
      setAcceptModal(true);
      setAppointmentId(time);
    } else if (status === "Suggested") {
      setSuggestTimeModal(true);
      setAppointmentId(time);
    } else {
      setCancelReasonModal(false);
      setAcceptModal(false);
      setSuggestTimeModal(false);
      setSuggestDifferentTimeModal(false);
      if (status === "IsReject") {
        setCancelRequestModal(true);
      } else if (status === "IsSuggested") {
        setDifferentTimeSuggestedModal(true);
      }
    }
  };

  return (
    <div className=" flex justify-center">
      <div className="bg-provider-detail w-[90%] p-8 rounded-[12px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[24px] font-[600] text-white my-5 ">
            New Appointment Requests
          </h2>
          <div className="flex justify-between items-center pb-4 ">
            <span
              onClick={() => setIsSuggestedView(false)}
              className="cursor-pointer border-[1px]  rounded-sm p-[2px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 font-light text-white "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05A1 1 0 015.05 3.636L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap   items-center gap-10 ">
          {data
            .filter((appointment) => appointment.status === "Pending")
            ?.map((item, index) => (
              <div
                key={index}
                className="max-w-xs w-full bg-white rounded-xl shadow-md border p-4 space-y-4 text-gray-800"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={
                      item?.familyMember
                        ? item?.familyMember?.profilePicture
                        : item?.user?.profilePicture
                    }
                    alt="Avatar"
                    className="w-16 h-16 rounded-full bg-white border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item?.familyMember
                        ? item?.familyMember?.name
                        : item?.user?.firstName}
                    </h3>
                    <p className="text-sm text-gray-500">{item?.status}</p>
                  </div>
                </div>

                <hr />

                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-gray-500">Appointment Date</p>
                    <p className="font-medium">
                      {getDateFormat(item?.appointmentDate)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Appointment Time</p>
                    <p className="font-medium">{item?.appointmentTime}</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Specialty Services</p>
                  {item?.services?.map((a, i) => (
                    <p key={i} className="font-medium">
                      {a?.name}
                    </p>
                  ))}
                </div>

                <div className="flex justify-between gap-2">
                  <button
                    onClick={() => handleModal("Rejected", item?._id)}
                    className="w-full bg-[#FF6767] text-white py-2 rounded-md hover:bg-red-500"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleModal("Approved", item?._id)}
                    className="w-full bg-[#17C351] text-white py-2 rounded-md hover:bg-green-500"
                  >
                    Accept
                  </button>
                </div>

                <button
                  onClick={() => handleModal("Suggested", item?._id)}
                  className="w-full bg-[#7991DB] text-white py-2 rounded-md "
                >
                  Suggest A Different Time
                </button>
              </div>
            ))}
        </div>
      </div>
      {/* {  && <AcceptModal onClick={() => setAcceptModal(false)} />}
      {rejectModal && (
        <RejectModal
          onClick={() => {
            setRejectModal(false);
            setRejectReasonModal(true);
          }}
        />
      )}
      {rejectReasonModal && (
        <RejectResonModal
          onClick={() => {
            setRejectReasonModal(false);
            setRequestRejectedModal(true);
          }}
        />
      )}
      {requestRejectedModal && (
        <RequestRejectedModal onClick={() => setRequestRejectedModal(false)} />
      )} */}
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
          type={"button"}
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

export default AppointmentCard;

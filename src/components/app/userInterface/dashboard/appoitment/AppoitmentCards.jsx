import React, { useState } from "react";
import { ProfileImg } from "../../../../../assets/export";
import RejectResonModal from "../../../networkProviderInterface/dashboard/home/RejectResonModal";
import RequestRejectedModal from "../../../networkProviderInterface/dashboard/home/RequestRejectedModal";
import SuggestTimeModal from "../../../networkProviderInterface/dashboard/home/SuggestTimeModal";
import SuggestDeferentTimeModal from "../../../networkProviderInterface/dashboard/home/SuggestDeferentTimeModal";
import DiffrentTimeSuggestedModal from "../../../networkProviderInterface/dashboard/home/DiffrentTimeSuggestedModal";
import AcceptModal from "./AcceptModal";
import RejectModal from "./RejectModal";


const AppointmentCards = () => {
  const [acceptModal, setAcceptModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [rejectReasonModal, setRejectReasonModal] = useState(false);
  const [requestRejectedModal, setRequestRejectedModal] = useState(false);
  const [suggestTimeModal, setSuggestTimeModal] = useState(false);
  const [suggestDifferentTimeModal, setSuggestDifferentTimeModal] =
    useState(false);
  const [diffrentTimeSuggestedModal, setDiffrentTimeSuggestedModal] =
    useState(false);
  return (
    <div className=" flex justify-center">
      <div className="bg-provider-detail  w-[90%] p-8 rounded-[12px]">
        <div className="flex justify-between items-center">
          <div className="my-6">
            <h2 className="text-[24px] font-[600] text-white ">
              Suggested Time Requests
            </h2>

            <p className="text-white text-[16px] font-[500] ">
              Your network provider isn’t available at your selected time and
              has suggested a new slot. Do you want to confirm this appointment?
            </p>
          </div>
          <div className="flex justify-between items-center pb-4 ">
            <span className="cursor-pointer border-[1px]  rounded-sm p-[2px]">
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
        <div className="flex flex-wrap lg:justify-between md:justify-center  items-center xl:gap-0 lg:gap-5  md:gap-10 gap-3 ">
          {[1, 2, 3, 4]?.map((item, index) => (
            <div className="max-w-xs w-full bg-white rounded-xl shadow-md border p-4 space-y-4 text-gray-800">
              <div className="flex items-center space-x-4">
                <img
                  src={ProfileImg}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full bg-white border"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-sm text-gray-500">Pending</p>
                </div>
              </div>

              <hr />

              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-500">Appointment Date</p>
                  <p className="font-medium">16/Jan/2025</p>
                </div>
                <div>
                  <p className="text-gray-500">Appointment Time</p>
                  <p className="font-medium">10:00 Am</p>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Specialty Services</p>
                <p className="font-medium">Massage Therapy</p>
              </div>

              <div className="flex justify-between gap-2">
                <button
                  onClick={() => setRejectModal(true)}
                  className="w-full bg-[#FF6767] text-white py-2 rounded-md hover:bg-red-500"
                >
                  Reject
                </button>
                <button
                  onClick={() => setAcceptModal(true)}
                  className="w-full bg-[#17C351] text-white py-2 rounded-md hover:bg-green-500"
                >
                  Accept
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {acceptModal && <AcceptModal onClick={() => setAcceptModal(false)} />}
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
      )}

      {suggestTimeModal && (
        <SuggestTimeModal
          onClick={() => {
            setSuggestTimeModal(false);
            setSuggestDifferentTimeModal(true);
          }}
        />
      )}
      {suggestDifferentTimeModal && (
        <SuggestDeferentTimeModal
          onClick={() => {
            setSuggestDifferentTimeModal(false);
            setDiffrentTimeSuggestedModal(true);
          }}
        />
      )}
      {diffrentTimeSuggestedModal && (
        <DiffrentTimeSuggestedModal
          onClick={() => setDiffrentTimeSuggestedModal(false)}
        />
      )}
    </div>
  );
};

export default AppointmentCards;

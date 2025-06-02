import React from "react";
import { IoMdClose } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";
import Button from "../../../landingPage/Inputs/Button";
import { CalenderIcon, CancelIcon } from "../../../../../assets/export";
import Calender from "../../../../global/DatePicker";

const ScheduleModal = ({ onClick, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] p-6 w-[90%] max-w-md">
        {/* Header */}
        <div className="flex justify-between border-b pb-4 items-center mb-4">
          <h2 className="text-xl font-semibold">Book Now Chiropractor</h2>
          <div onClick={onClose}>
            <img
              src={CancelIcon}
              className="w-[22px] h-[22px] cursor-pointer "
              alt=""
            />
          </div>
        </div>
        <div>
          <Calender
            // startDate={values.db}
            // setStartDate={(date) => setFieldValue("db", date)}
            text="DD/MM/YY"
            isStyle={true}
            label="Select Date"
          />
        </div>
        {/* Select Date */}

        {/* Select Time */}
        <div className="mb-4 mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Time
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              "8:00 AM",
              "9:00 AM",
              "10:00 AM",
              "10:00 AM",
              "8:00 AM",
              "9:00 AM",
              "10:00 AM",
              "10:00 AM",
              "8:00 AM",
              "9:00 AM",
              "10:00 AM",
              "10:00 AM",
            ].map((time, index) => (
              <button
                key={index}
                className="border border-gray-300 rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}

        {/* Buttons */}

        <Button text={"Send Request "} onClick={onClick} />
      </div>
    </div>
  );
};

export default ScheduleModal;

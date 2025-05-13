import React from "react";
import { IoMdClose } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";
import Button from "../../../landingPage/Inputs/Button";
import { CalenderIcon } from "../../../../../assets/export";

const SuggestDeferentTimeModal = ({ onClick }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] p-6 w-[90%] max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Suggest Deferent Time!</h2>
          <button>
            <IoMdClose size={20} />
          </button>
        </div>

        {/* Select Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Date
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="Select"
              className="flex-1 outline-none text-sm placeholder-gray-400"
              readOnly
            />
            <img src={CalenderIcon} className="w-[21.56px]" alt="" />
          </div>
        </div>

        {/* Select Time */}
        <div className="mb-4">
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
        <div className="mb-6">
          <textarea
            placeholder="Description"
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none resize-none"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4 mt-4">
          <button className="w-[205px] h-[49px] rounded-[8px] bg-[#E0E0E0] text-[#565656] ">
            {" "}
            Not Now
          </button>
          <div className="w-[205px] ">
            <Button text={"Submit"} onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestDeferentTimeModal;

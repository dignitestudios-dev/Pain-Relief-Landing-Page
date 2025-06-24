import Button from "../../../landingPage/Inputs/Button";
import { CancelIcon } from "../../../../../assets/export";
import Calender from "../../../../global/DatePicker";

const ScheduleModal = ({
  onClick,
  onClose,
  setDateTime,
  dateTime,
  data,
  isLoader,
  dateTimeError = false,
  setDateTimeError = () => {},
}) => {
  console.log("dateTime--> ", dateTime?.date);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] p-6 w-[90%] max-w-md">
        {/* Header */}
        <div className="flex justify-between border-b pb-4 items-center mb-4">
          <h2 className="text-xl font-semibold">Book Now Network Provider</h2>
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
            startDate={
              dateTime.date
                ? new Date(dateTime.date).toISOString().split("T")[0]
                : dateTime.date
            }
            setStartDate={(date) => {
              setDateTime((prev) => ({ ...prev, date: date }));
              setDateTimeError(false);
            }}
            text="DD/MM/YY"
            isStyle={true}
            label="Select Date"
            max={null}
            min={new Date()}
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
              "11:00 AM",
              "12:00 AM",
              "1:00 PM",
              "2:00 PM",
              "3:00 PM",
              "4:00 PM",
              "5:00 PM",
              "6:00 PM",
              "7:00 PM",
            ].map((time, index) => {
              const isSelected = dateTime.time === time;
              return (
                <button
                  onClick={() => {
                    setDateTime((prev) => ({ ...prev, time }));
                    setDateTimeError(false);
                  }}
                  key={index}
                  className={`border rounded-md px-2 py-2 text-sm ${
                    isSelected
                      ? "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] text-white border-blue-500"
                      : "text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>

        {/* Description */}

        {/* Buttons */}
        {dateTimeError && (
          <p className="text-red-500 text-sm pb-1">
            Please select the Date/Time
          </p>
        )}
        <Button
          text={"Send Request "}
          onClick={() => onClick(data)}
          loading={isLoader}
        />
      </div>
    </div>
  );
};

export default ScheduleModal;

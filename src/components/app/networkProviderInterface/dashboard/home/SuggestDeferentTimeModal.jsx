import { IoMdClose } from "react-icons/io";

import Button from "../../../landingPage/Inputs/Button";
import Calender from "../../../../global/DatePicker";

const SuggestDeferentTimeModal = ({
  onClick,
  onClose,
  setDateTime,
  dateTime,
  loading,
  dateTimeError = false,
  setDateTimeError = () => {},
  errors,
  handleBlur,
  handleChange,
  touched,
  values,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] p-6 w-[90%] max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Suggest Deferent Time!</h2>
          <button onClick={onClose}>
            <IoMdClose size={20} />
          </button>
        </div>

        {/* Select Date */}
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
              "12:00 PM",
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
        <form action="" onSubmit={onClick}>
          {/* Description */}
          <div className="mb-6">
            <textarea
              value={values.description}
              name="description"
              id="description"
              className="border mt-4 w-full border-[#D9D9D9] p-2 rounded-[8px]  "
              rows={5}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Description"
            ></textarea>
            {errors.description && touched.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>
          {dateTimeError && (
            <p className="text-red-500 text-sm pb-1">{dateTimeError}</p>
          )}

          {/* Buttons */}
          <div className="flex justify-between gap-4 mt-4">
            <button
              onClick={onClose}
              className="w-[205px] h-[49px] rounded-[8px] bg-[#E0E0E0] text-[#565656] "
            >
              {" "}
              Not Now
            </button>
            <div className="w-[205px] ">
              <Button text={"Submit"} type={"submit"} loading={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SuggestDeferentTimeModal;

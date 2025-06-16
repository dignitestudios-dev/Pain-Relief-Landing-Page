import { ErrorIcon } from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";

const ChangePaymentCardModal = ({ onClick, onClose, loading }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 animate-fadeIn">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onClick}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05A1 1 0 015.05 3.636L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Icon */}
        <div className="flex flex-col items-center text-center">
          <img src={ErrorIcon} className="w-[100px] h-[100px] " alt="" />

          <h2 className="text-xl font-semibold mb-2 mt-3">Are you sure?</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Please confirm if you’d like to change your payment card before
            proceeding.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 w-full">
            <button
              onClick={onClose}
              className="w-1/2 h-11 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <div className="w-1/2 h-11">
              <Button text={"Yes"} onClick={onClick} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePaymentCardModal;

import { useContext, useState } from "react";
import { RedBin, SmallTick, StripeIcon } from "../../../../../assets/export";
import { useGetCards } from "../../../../../hooks/api/Get";
import { AppContext } from "../../../../../context/AppContext";
import axios from "../../../../../axios";
import { ErrorToast } from "../../../../global/Toaster";
import DeleteModal from "../../../../global/DeleteModal";
import PaymentMethodModal from "../upgradeplan/PaymentMethodModal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { IoIosRadioButtonOff } from "react-icons/io";
import ChangePaymentCardModal from "./ChangePaymentCardModal";

const UserPaymentMethod = () => {
  const { userData } = useContext(AppContext);
  const [update, setUpdate] = useState(false);
  const { data, loading } = useGetCards("/payment/cards", update);

  const [deleteId, setDeleteId] = useState(false);

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);

  const [paymentMethodModal, setPaymentMethodModal] = useState(false);
  const [isCardChange, setIsCardChange] = useState(false);
  const [cardId, setCardId] = useState("");

  const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);

  console.log(data, "33 -- data");

  const handleDeleteModal = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      setDeleteLoader(true);
      const response = await axios.post("/payment/card/delete", {
        cardId: deleteId,
      });
      if (response?.status === 200) {
        setUpdate((prev) => !prev);
        setDeleteModal(false);
      }
    } catch (error) {
      ErrorToast(error.response.data.message);
    } finally {
      setDeleteLoader(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setDeleteLoader(true);
      const response = await axios.post("/payment/card/set-default", {
        cardId: cardId,
      });
      if (response?.status === 200) {
        setUpdate((prev) => !prev);
        setIsCardChange(false);
      }
    } catch (error) {
      ErrorToast(error.response.data.message);
    } finally {
      setIsCardChange(false);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-[26px]  p-8 ">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[32px] font-[600]">Payment Method</h2>
          <p
            onClick={() => setPaymentMethodModal(true)}
            className="text-[20px] font-[500] underline cursor-pointer"
          >
            Add New
          </p>
        </div>
        {loading ? (
          <div className="animate-pulse space-y-4 p-4 rounded-lg bg-gray-100">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            <div className="flex items-center space-x-3">
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="flex space-x-3">
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        ) : (
          data?.map((item, index) => (
            <div
              key={index}
              className={`rounded-[8px] my-2 ${
                item?.default
                  ? "bg-gradient-to-l p-[1px] to-[#63CFAC] from-[#29ABE2]"
                  : "border"
              }`}
            >
              <div className="bg-white flex justify-between rounded-[8px] p-3">
                <div>
                  <p className="font-[600]">{userData?.firstName}</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={StripeIcon}
                      className="w-[22px] h-[22px]"
                      alt="Stripe"
                    />
                    <p>**********{item?.last4}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {/* <button type="button" onClick={()=>handleEdit()}>
                    <img src={EditIcon} alt="Edit" />
                  </button> */}
                  {data.length > 1 ? (
                    <button
                      type="button"
                      onClick={() => handleDeleteModal(item?._id)}
                    >
                      <img src={RedBin} alt="Delete" />
                    </button>
                  ) : (
                    <button
                      disabled
                      type="button"
                      onClick={() => handleDeleteModal(item?._id)}
                    >
                      <img src={RedBin} alt="Delete" />
                    </button>
                  )}
                  {item?.default ? (
                    <div>
                      <img
                        src={SmallTick}
                        className="w-[23px] h-[23px] cursor-pointer"
                        alt="Toggle"
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setIsCardChange(true);
                        setCardId(item?._id);
                      }}
                      className="cursor-pointer"
                    >
                      <IoIosRadioButtonOff className="text-[24px] text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {deleteModal && (
        <DeleteModal
          isOpen={deleteModal}
          onClick={() => setDeleteModal(false)}
          handleDelete={handleDelete}
          deleteLoader={deleteLoader}
        />
      )}
      {paymentMethodModal && (
        <Elements stripe={stripePromise}>
          <PaymentMethodModal
            setUpdate={setUpdate}
            onClose={() => {
              setPaymentMethodModal(false);
            }}
          />
        </Elements>
      )}
      {isCardChange && (
        <ChangePaymentCardModal
          onClose={() => setIsCardChange(false)}
          onClick={handleUpdate}
          loading={deleteLoader}
        />
      )}
    </div>
  );
};

export default UserPaymentMethod;

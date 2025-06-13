import { useState } from "react";

import Button from "../../../landingPage/Inputs/Button";
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

import axios from "../../../../../axios";
import { ErrorToast, SuccessToast } from "../../../../global/Toaster";
import { useNavigate } from "react-router";

const ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#1A202C",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSize: "16px",
      "::placeholder": {
        color: "#CBD5E0",
      },
    },
    invalid: {
      color: "#E53E3E",
      iconColor: "#E53E3E",
    },
  },
};

const PaymentMethodModal = ({ onClose, setUpdate }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [stripeError, setStripeError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardNumberElement = elements.getElement(CardNumberElement);

    // Create payment method using stripe
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
    });
    console.log("🚀 ~ handleSubmit ~ error:", error);

    if (error) {
      setStripeError(error?.message);
      ErrorToast(error?.message);
    } else {
      try {
        setLoading(true);
        const response = await axios.post("/payment/card", {
          paymentMethodId: paymentMethod.id,
        });

        if (response.status === 200) {
          console.log("🚀 ~ handleSubmit ~ response:", response);
          onClose();
          setUpdate((prev) => !prev);
          SuccessToast("Card Added");
        }
      } catch (apiError) {
        ErrorToast(apiError?.response?.data?.message);
        console.log("the error is ===", apiError);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0A150F80] z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[872px]">
        <div>
          <form>
            <div className="bg-white rounded-lg p-6 space-y-4 w-full xl:max-w-[880px] md:max-w-[550px]">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Card Number
                </label>
                <div className="border border-gray-300 rounded-md px-4 py-2 bg-white">
                  <CardNumberElement options={ELEMENT_OPTIONS} />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1">
                    Expiry
                  </label>
                  <div className="border border-gray-300 rounded-md px-4 py-2 bg-white">
                    <CardExpiryElement options={ELEMENT_OPTIONS} />
                  </div>
                </div>

                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1">CVC</label>
                  <div className="border border-gray-300 rounded-md px-4 py-2 bg-white">
                    <CardCvcElement options={ELEMENT_OPTIONS} />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-4 gap-4">
              <div>
                <button
                  onClick={onClose}
                  className="w-[402px] h-[49px] rounded-[8px] bg-[#E0E0E0] text-[#565656]"
                >
                  Cancel
                </button>
              </div>
              <div>
                <Button
                  loading={loading}
                  text={"Add card"}
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodModal;

import { useContext, useState } from "react";
import {
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "../../../../axios";
import { useNavigate } from "react-router";
import Button from "../../landingPage/Inputs/Button";
import { ErrorToast } from "../../../global/Toaster";
import { AppContext } from "../../../../context/AppContext";
import SubscriptionSuccessModal from "./SubscriptionSuccessModal";
import MemberShipAgreementModal from "./MemberShipAgreementModal";

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

const PaymentForm = ({ planData, selectedPlanData }) => {
  const navigate = useNavigate();
  const [memeberModal, setMemberModal] = useState(false);
  const [buttonDisabelMember, setButtonDisbaleMember] = useState(false);
  const [buttonDisabelCard, setButtonDisbaleCard] = useState(false);

  const [isSubscription, setIsSubscription] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const { planType } = planData;
  const { loginAuth } = useContext(AppContext);

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const cardNumberElement = elements.getElement(CardNumberElement);

    // Create payment method using stripe
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
    });

    if (error) {
      setError(error.message);
      ErrorToast(error.message);
      setLoading(false);
    } else {
      try {
        const response = await axios.post("/payment/card", {
          paymentMethodId: paymentMethod.id,
        });

        if (response.status === 200) {
          const response = await axios.post(
            "/payment/create-subscriptionplan",
            {
              priceId: planType?._id,
            }
          );

          if (response.status === 200) {
            setSubscription(response?.data);
            setIsSubscription(true);
          }
        }
      } catch (apiError) {
        ErrorToast(apiError?.response?.data?.message);
        console.error("the error is ===", apiError);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h2 className="text-[24px] font-[600]  ">Payment Details</h2>
      <div className="flex justify-between items-center p-6 mt-3 bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] h-[79px] rounded-[9px] ">
        <h2 className="text-[18px] font-[600] text-white ">
          Standard Plan (Individual)
        </h2>
        <p className="text-[20px] text-white font-[600] ">
          ${selectedPlanData}{" "}
          <span className="text-[16px] font-[400] ">
            {planType?.billingPeriod === "yearly" ? "/year" : "month"}
          </span>{" "}
        </p>
      </div>
      <div className="flex justify-between items-center border-b border-b-[#D9D9D9]  pb-4 my-5">
        <h2 className="text-[14px] font-[500]  ">
          Non-Refundable Application Fee -{" "}
        </h2>
        <p className="text-[14px] font-[700] ">$20.00</p>
      </div>
      <div className="flex justify-between items-center   pb-4 my-5">
        <h2 className="text-[14px] font-[500]  ">Total Amount </h2>
        <p className="text-[14px] font-[500] ">${selectedPlanData}</p>
      </div>

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
              <label className="block text-sm font-medium mb-1">Expiry</label>
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
        <div className="flex gap-10 mt-3">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onClick={() => setButtonDisbaleCard((prev) => !prev)}
            />
            <p className="text-[12px] font-[500]">Save Credit Card</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onClick={() => setButtonDisbaleMember((prev) => !prev)}
            />
            <p
              className="text-[12px] underline cursor-pointer font-[500]"
              onClick={() => setMemberModal(true)}
            >
              Membership Agreement <span className="text-red-500">*</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-4 gap-4">
          <div>
            <button
              type={"button"}
              onClick={() => navigate(-1)}
              className="rounded-[8px] w-full font-[500] bg-slate-200 border-gray-100  text-[16px] h-[49px] "
            >
              <div className="flex justify-center items-center">
                <span className="mr-1">Back</span>
              </div>
            </button>
          </div>
          <div>
            <Button
              disabled={!buttonDisabelCard || !buttonDisabelMember}
              loading={loading}
              text={"Buy Now"}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </form>
      {memeberModal && (
        <MemberShipAgreementModal onClose={() => setMemberModal(false)} />
      )}
      {isSubscription && (
        <SubscriptionSuccessModal
          onClick={() => {
            loginAuth(subscription);
            navigate("/onboard/create-profile");
          }}
        />
      )}
    </div>
  );
};

export default PaymentForm;

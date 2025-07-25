import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { ErrorToast } from "../../../components/global/Toaster";
import { useParams } from "react-router";

const StripeFinancialPage = () => {
  const { id } = useParams();

  const [stripeError, setStripeError] = useState(null);
  const openFinancialConnectionsSession = async () => {
    const stripe = await loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);

    if (!stripe) {
      console.error("Stripe failed to load.");
      return;
    }

    const { error } = await stripe.collectFinancialConnectionsAccounts({
      clientSecret: id,
    });

    if (error) {
      ErrorToast(error.message);
      setStripeError(error.message);
    }
  };
  useEffect(() => {
    openFinancialConnectionsSession();
  }, []);

  return <div>{stripeError && <p>{stripeError}</p>}</div>;
};

export default StripeFinancialPage;

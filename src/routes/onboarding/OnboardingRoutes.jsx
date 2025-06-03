import PaymentDetail from "../../pages/app/userInterface/subscription/PaymentDetail";
import Subscriptions from "../../pages/app/userInterface/subscription/Subscriptions";
import CreateAccountRequest from "../../pages/onboarding/CreateAccountRequest";
import CreateFamilyMember from "../../pages/onboarding/CreateFamilyMember";
import CreateProfile from "../../pages/onboarding/CreateProfile";
import CreateProviderProfile from "../../pages/onboarding/CreateProviderProfile";

export const OnboardingRoutes = [
  { url: "create-provider-profile", page: <CreateProviderProfile /> },
  { url: "create-account-request", page: <CreateAccountRequest /> },
  {
    url: "create-profile",
    page: <CreateProfile />,
  },
  {
    url: "create-family-member",
    page: <CreateFamilyMember />,
  },
  {
    url: "subscription-plans",
    page: <Subscriptions />,
  },
  {
    url: "subscription-payment-detail",
    page: <PaymentDetail />,
  },
];

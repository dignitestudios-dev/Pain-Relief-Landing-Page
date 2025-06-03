import PaymentDetail from "../../pages/app/userInterface/subscription/PaymentDetail";
import Subscriptions from "../../pages/app/userInterface/subscription/Subscriptions";
import CreateFamilyMember from "../../pages/onboarding/CreateFamilyMember";
import CreateProfile from "../../pages/onboarding/CreateProfile";

export const UserOnboardingRoutes = [
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

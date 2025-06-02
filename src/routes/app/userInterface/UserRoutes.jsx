import NetwrokProfessionalDetail from "../../../components/app/userInterface/dashboard/netwrokProfile/NetwrokProfessionalDetail";
import Appoitment from "../../../pages/app/userInterface/dashboard/Appoitment";
import Dashboard from "../../../pages/app/userInterface/dashboard/Dashboard";
import MemberShip from "../../../pages/app/userInterface/dashboard/MemberShip";
import NetworkProfile from "../../../pages/app/userInterface/dashboard/NetworkProfile";
import Refferal from "../../../pages/app/userInterface/dashboard/Refferal";
import UpgradePlan from "../../../pages/app/userInterface/dashboard/UpgradePlan";
import UserDetails from "../../../pages/app/userInterface/dashboard/UserDetails";
import PaymentDetail from "../../../pages/app/userInterface/subscription/PaymentDetail";
import Subscriptions from "../../../pages/app/userInterface/subscription/Subscriptions";
import CreateFamilyMember from "../../../pages/onboarding/CreateFamilyMember";
import CreateProfile from "../../../pages/onboarding/CreateProfile";

export const UserRoutes = [
  {
    url: "dashboard",
    page: <Dashboard />,
    isPublic: true,
  },
  {
    url: "appoitment",
    page: <Appoitment />,
    isPublic: true,
  },
  {
    url: "user-details",
    page: <UserDetails />,
    isPublic: true,
  },
  {
    url: "network-professional-detail",
    page: <NetworkProfile />,
    isPublic: true,
  },
  {
    url: "membership",
    page: <MemberShip />,
    isPublic: true,
  },
  {
    url: "upgrade-plan",
    page: <UpgradePlan />,
    isPublic: true,
  },
  {
    url: "refferal",
    page: <Refferal />,
    isPublic: true,
  },
  // {
  //   url: "create-provider-profile",
  //   page: <CreateProviderProfile />,
  // },
  // {
  //   url: "create-account-request",
  //   page: <CreateAccountRequest />,
  // },
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

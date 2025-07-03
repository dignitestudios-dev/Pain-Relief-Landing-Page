import BookAppointment from "../../../pages/app/userInterface/bookAppointment/BookAppointment";
import BookAppointmentDetails from "../../../pages/app/userInterface/bookAppointment/BookAppointmentDetails";
import Appoitment from "../../../pages/app/userInterface/dashboard/Appoitment";
import Dashboard from "../../../pages/app/userInterface/dashboard/Dashboard";
import MemberShip from "../../../pages/app/userInterface/dashboard/MemberShip";
import NetworkProfile from "../../../pages/app/userInterface/dashboard/NetworkProfile";
import Refferal from "../../../pages/app/userInterface/dashboard/Refferal";
import UpgradePlan from "../../../pages/app/userInterface/dashboard/UpgradePlan";
import UserDetails from "../../../pages/app/userInterface/dashboard/UserDetails";
import UserProfile from "../../../pages/app/userInterface/dashboard/UserProfile";
import AppointmentQuestions from "../../../pages/app/userInterface/dashboard/AppointmentQuestions";
import UserEditProfile from "../../../pages/app/userInterface/dashboard/UserEditProfile";
import MembershipAgreement from "../../../pages/app/userInterface/dashboard/MemberShipAgreement";
import PrivacyPolicy from "../../../pages/app/userInterface/dashboard/PrivacyPolicy";
import TermsOfUse from "../../../pages/app/userInterface/dashboard/TermsOfUse";
import UserAccountSetting from "../../../pages/app/userInterface/dashboard/UserAccountSetting";
import UserIDCard from "../../../pages/app/userInterface/dashboard/UserIDCard";
import MemberShipGuide from "../../../pages/app/userInterface/dashboard/MemberShipGuide";
import Notifications from "../../../pages/app/userInterface/notifications/Notifications";

export const UserRoutes = [
  {
    url: "dashboard",
    page: <Dashboard />,
    isPublic: true,
  },
  {
    url: "appointment",
    page: <Appoitment />,
    isPublic: true,
  },
  {
    url: "questions",
    page: <AppointmentQuestions />,
    isPublic: true,
  },
  {
    url: "bookAppointment",
    page: <BookAppointment />,
  },
  {
    url: "appointmentDetailSection/:id",
    page: <BookAppointmentDetails />,
  },
  {
    url: "user-details/:id",
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
  {
    url: "user-profile",
    page: <UserProfile />,
    isPublic: true,
  },
  {
    url: "user-edit-profile",
    page: <UserEditProfile />,
    isPublic: true,
  },
  {
    url: "membershipagreement",
    page: <MembershipAgreement />,
    isPublic: true,
  },
  {
    url: "privacy-policy",
    page: <PrivacyPolicy />,
    isPublic: true,
  },
  {
    url: "terms-of-use",
    page: <TermsOfUse />,
    isPublic: true,
  },
  {
    url: "account-setting",
    page: <UserAccountSetting />,
    isPublic: true,
  },
  {
    url: "user-id-card",
    page: <UserIDCard />,
    isPublic: true,
  },
  {
    url: "membership-guide",
    page: <MemberShipGuide />,
    isPublic: true,
  },
  {
    url: "notifications",
    page: <Notifications />,
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
];

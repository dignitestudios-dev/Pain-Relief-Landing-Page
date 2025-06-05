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
  {
    url: "user-profile",
    page: <UserProfile />,
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

import Home from "../../../pages/app/landingPage/Home";
import ImmediateOptions from "../../../pages/app/landingPage/ImmediateOptions";
import Insurance from "../../../pages/app/landingPage/Insurance";
import MemberShip from "../../../pages/app/landingPage/MemberShip";
import PainReliefCoach from "../../../pages/app/landingPage/PainReliefCoach";
import ProviderDetail from "../../../pages/app/landingPage/ProviderDetail";
import ScheduleAppointment from "../../../pages/app/landingPage/ScheduleAppointment";

export const PublicRoutes = [
  {
    url: "home",
    page: <Home />,
    isPublic: true,
  },
  {
    url: "more-insurance",
    page: <Insurance />,
    isPublic: true,
  },
  {
    url: "immediate-options",
    page: <ImmediateOptions />,
    isPublic: true,
  },
  {
    url: "schedule-appointment",
    page: <ScheduleAppointment />,
    isPublic: true,
  },
  {
    url: "membership",
    page: <MemberShip />,
    isPublic: true,
  },
  {
    url: "pain-relief-coach",
    page: <PainReliefCoach />,
    isPublic: true,
  },
  {
    url: "provider-detail",
    page: <ProviderDetail />,
    isPublic: true,
  },
];

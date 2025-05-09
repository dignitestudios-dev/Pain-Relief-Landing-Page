import Home from "../../../pages/app/landingPage/Home";
import ImmediateOptions from "../../../pages/app/landingPage/ImmediateOptions";
import Insurance from "../../../pages/app/landingPage/Insurance";
import MemberShip from "../../../pages/app/landingPage/MemberShip";
import PainReliefCoach from "../../../pages/app/landingPage/PainReliefCoach";
import ProviderDetail from "../../../pages/app/landingPage/ProviderDetail";
import ScheduleAppoitment from "../../../pages/app/landingPage/ScheduleAppoitment";

export const PublicRoutes = [
  {
    url: "home",
    page: <Home />,
    ispublic: true,
  },
  {
    url: "more-insurance",
    page: <Insurance />,
    ispublic: true,
  },
  {
    url: "immediate-options",
    page: <ImmediateOptions />,
    ispublic: true,
  },
  {
    url: "schedule-appointment",
    page: <ScheduleAppoitment />,
    ispublic: true,
  },
  {
    url: "membership",
    page: <MemberShip />,
    ispublic: true,
  },
  {
    url: "pain-relief-coach",
    page: <PainReliefCoach />,
    ispublic: true,
  },
  {
    url: "provider-detail",
    page: <ProviderDetail />,
    ispublic: true,
  },
];

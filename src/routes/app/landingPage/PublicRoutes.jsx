import Home from "../../../pages/app/landingPage/Home";
import ImmediateOptions from "../../../pages/app/landingPage/ImmediateOptions";
import Insurance from "../../../pages/app/landingPage/Insurance";
import MemberShip from "../../../pages/app/landingPage/MemberShip";
import MemberShipAgreement from "../../../pages/app/landingPage/MemberShipAgreement";
import PainReliefCoach from "../../../pages/app/landingPage/PainReliefCoach";
import PrivacyPolicy from "../../../pages/app/landingPage/PrivacyPolicy";
import ProviderDetail from "../../../pages/app/landingPage/ProviderDetail";
import ScheduleAppointment from "../../../pages/app/landingPage/ScheduleAppointment";
import TermsAndCondition from "../../../pages/app/landingPage/TermsAndCondition";

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
    url: "provider-detail/:id",
    page: <ProviderDetail />,
    isPublic: true,
  },
  {
    url: "terms-and-conditions",
    page: <TermsAndCondition />,
    isPublic: true,
  },
  {
    url: "privacy-policy",
    page: <PrivacyPolicy />,
    isPublic: true,
  },
  {
    url: "membership-agreement",
    page: <MemberShipAgreement />,
    isPublic: true,
  },
];

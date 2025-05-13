import Dashboard from "../../../pages/app/networkProviderInterface/dashboard/Dashboard";
import EditProfile from "../../../pages/app/networkProviderInterface/dashboard/EditProfile";
import MembershipAgreement from "../../../pages/app/networkProviderInterface/dashboard/MembershipAgreement";
import NetworkProviderDetail from "../../../pages/app/networkProviderInterface/dashboard/NetworkProviderDetail";
import PainReliefCoach from "../../../pages/app/networkProviderInterface/dashboard/PainReliefCoach";
import PrivacyPolicy from "../../../pages/app/networkProviderInterface/dashboard/PrivacyPolicy";
import Profile from "../../../pages/app/networkProviderInterface/dashboard/Profile";
import TermsOfUse from "../../../pages/app/networkProviderInterface/dashboard/TermsOfUse";
import ViewProfile from "../../../pages/app/networkProviderInterface/dashboard/ViewProfile";


export const ProviderRoutes = [
  {
    url: "dashboard",
    page: <Dashboard />,
    isPublic: true,
  },
  {
    url: "pain-relief-coach",
    page: <PainReliefCoach />,
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
    url: "membership-agreement",
    page: <MembershipAgreement />,
    isPublic: true,
  },
  {
    url: "network-provider-detail",
    page: <NetworkProviderDetail />,
    isPublic: true,
  },
  {
    url: "profile-netwrok-provider",
    page: <Profile />,
    isPublic: true,
  },
  {
    url: "edit-profile-netwrok-provider",
    page: <EditProfile />,
    isPublic: true,
  },
  {
    url: "view-profile-netwrok-provider",
    page: <ViewProfile />,
    isPublic: true,
  },
];

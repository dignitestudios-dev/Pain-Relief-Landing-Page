import AccountSetting from "../../../pages/app/networkProviderInterface/dashboard/AccountSetting";
import Dashboard from "../../../pages/app/networkProviderInterface/dashboard/Dashboard";
import EditProfile from "../../../pages/app/networkProviderInterface/dashboard/EditProfile";
import MembershipAgreement from "../../../pages/app/networkProviderInterface/dashboard/MembershipAgreement";
import PainReliefCoach from "../../../pages/app/networkProviderInterface/dashboard/PainReliefCoach";
import PrivacyPolicy from "../../../pages/app/networkProviderInterface/dashboard/PrivacyPolicy";
import Profile from "../../../pages/app/networkProviderInterface/dashboard/Profile";
import TermsOfUse from "../../../pages/app/networkProviderInterface/dashboard/TermsOfUse";
import ViewProfile from "../../../pages/app/networkProviderInterface/dashboard/ViewProfile";
import NetworkProviderAppointment from "../../../pages/app/networkProviderInterface/dashboard/NetworkProviderAppointment";

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
    url: "network-provider-appointment",
    page: <NetworkProviderAppointment />,
    isPublic: true,
  },
  {
    url: "profile-network-provider",
    page: <Profile />,
    isPublic: true,
  },
  {
    url: "edit-profile-network-provider",
    page: <EditProfile />,
    isPublic: true,
  },
  {
    url: "view-profile-network-provider",
    page: <ViewProfile />,
    isPublic: true,
  },
  {
    url: "account-setting",
    page: <AccountSetting />,
    isPublic: true,
  },
];

import Dashboard from "../../../pages/app/userInterface/dashboard/Dashboard";
import CreateProfile from "../../../pages/onboarding/CreateProfile";
// import CreateAccountRequest from "../../../pages/onboarding/CreateAccountRequest";
// import CreateProviderProfile from "../../../pages/onboarding/CreateProviderProfile";

export const UserRoutes = [
  {
    url: "dashboard",
    page: <Dashboard />,
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
];

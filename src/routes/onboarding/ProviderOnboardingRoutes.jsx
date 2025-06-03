import CreateAccountRequest from "../../pages/onboarding/CreateAccountRequest";
import CreateProviderProfile from "../../pages/onboarding/CreateProviderProfile";

export const ProviderOnboardingRoutes = [
  { url: "create-provider-profile", page: <CreateProviderProfile /> },
  { url: "create-account-request", page: <CreateAccountRequest /> },
];

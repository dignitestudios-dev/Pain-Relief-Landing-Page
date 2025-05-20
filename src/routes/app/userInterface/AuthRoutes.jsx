import AccountSelection from "../../../pages/onboarding/AccountSelection";
import ForgotPassword from "../../../pages/onboarding/ForgotPassword";
import Login from "../../../pages/onboarding/Login";
import SignUp from "../../../pages/onboarding/Signup";
import UpdatePassword from "../../../pages/onboarding/UpdatePassword";
import VerifyOtp from "../../../pages/onboarding/VerifyOtp";
import CreateProviderProfile from "../../../pages/onboarding/CreateProviderProfile";
import CreateProfile from "../../../pages/onboarding/CreateProfile";
import CreateAccountRequest from "./../../../pages/onboarding/CreateAccountRequest";
import ForgetOtp from "../../../pages/onboarding/ForgetOtp";

export const AuthRoutes = [
  {
    url: "/auth/account-selection",
    page: <AccountSelection />,
  },
  {
    url: "/auth/sign-up",
    page: <SignUp />,
  },
  {
    url: "/auth/create-provider-profile",
    page: <CreateProviderProfile />,
  },
  {
    url: "/auth/create-account-request",
    page: <CreateAccountRequest />,
  },
  {
    url: "/auth/create-profile",
    page: <CreateProfile />,
  },
  {
    url: "/auth/sign-in",
    page: <Login />,
  },
  {
    url: "/auth/forget-otp",
    page: <ForgetOtp />,
  },
  {
    url: "/auth/forget-password",
    page: <ForgotPassword />,
  },
  {
    url: "/auth/verify-otp",
    page: <VerifyOtp />,
  },
  {
    url: "/auth/update-password",
    page: <UpdatePassword />,
  },
];

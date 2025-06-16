import AccountSelection from "./../../pages/onboarding/AccountSelection";
import SignUp from "./../../pages/onboarding/Signup";
import Login from "./../../pages/onboarding/Login";
import ForgetOtp from "./../../pages/onboarding/ForgetOtp";
import ForgotPassword from "./../../pages/onboarding/ForgotPassword";
import VerifyOtp from "./../../pages/onboarding/VerifyOtp";
import UpdatePassword from "./../../pages/onboarding/UpdatePassword";

export const AuthenticationRoutes = [
  {
    url: "account-selection",
    page: <AccountSelection />,
  },
  {
    url: "sign-up",
    page: <SignUp />,
  },
  {
    url: "sign-in",
    page: <Login />,
  },
  {
    url: "forget-otp",
    page: <ForgetOtp />,
  },
  {
    url: "forget-password",
    page: <ForgotPassword />,
  },
  {
    url: "verify-otp",
    page: <VerifyOtp />,
  },
  {
    url: "update-password",
    page: <UpdatePassword />,
  },
];

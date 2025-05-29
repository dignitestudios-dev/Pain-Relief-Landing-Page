import AccountSelection from "../../../pages/onboarding/AccountSelection";
import ForgotPassword from "../../../pages/onboarding/ForgotPassword";
import Login from "../../../pages/onboarding/Login";
import SignUp from "../../../pages/onboarding/Signup";
import UpdatePassword from "../../../pages/onboarding/UpdatePassword";
import VerifyOtp from "../../../pages/onboarding/VerifyOtp";
import ForgetOtp from "../../../pages/onboarding/ForgetOtp";

export const AuthRoutes = [
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

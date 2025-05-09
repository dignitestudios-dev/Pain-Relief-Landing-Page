import SignUp from "../../../pages/app/userInterface/onboarding/SignUp";
import Login from "../../../pages/app/userInterface/onboarding/Login";
import ForgotPassword from "../../../pages/app/userInterface/onboarding/ForgotPassword";
import VerifyOtp from "../../../pages/app/userInterface/onboarding/VerifyOtp";
import UpdatePassword from "../../../pages/app/userInterface/onboarding/UpdatePassword";


export const AuthRoutes = [
  {
    url: "/auth/sign-up",
    page: <SignUp />,
  },
  {
    url: "/auth/sign-in",
    page: <Login />,
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

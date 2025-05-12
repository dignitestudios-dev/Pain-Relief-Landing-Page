import ForgotPassword from "../../../pages/onboarding/ForgotPassword";
import Login from "../../../pages/onboarding/Login";
import SignUp from "../../../pages/onboarding/Signup";
import UpdatePassword from "../../../pages/onboarding/UpdatePassword";
import VerifyOtp from "../../../pages/onboarding/VerifyOtp";

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

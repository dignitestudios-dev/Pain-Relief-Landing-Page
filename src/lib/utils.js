import { ErrorToast } from "../components/global/Toaster";

export const processSignup = (data, navigate, userData) => {
  if (data?.success) {
    sessionStorage.setItem("email", userData?.email);
    navigate("/auth/verify-otp", { state: { userType: userData?.role } });
    return;
  }
};

export const processLogin = (data, navigate, routeName) => {
  if (data?.success) {
    navigate(routeName);
    return;
  }
};

export const processError = (error) => {
  if (error?.response?.data?.message) {
    ErrorToast(error?.response?.data?.message);
    return;
  } else {
    ErrorToast("Something went wrong");
  }
};

import { ErrorToast, SuccessToast } from "../components/global/Toaster";
import Cookies from "js-cookie";

export const processSignup = (data, navigate, userData) => {
  if (data?.success) {
    sessionStorage.setItem("email", userData?.email);
    sessionStorage.setItem("phone", userData?.phone);
    sessionStorage.setItem("firstName", userData?.firstName);
    sessionStorage.setItem("lastName", userData?.lastName);
    SuccessToast(data?.message);
    navigate("/auth/verify-otp", { state: { userType: userData?.role } });
    return;
  }
};

export const processLogin = (data, navigate, routeName) => {
  if (data?.success) {
    const user = data?.data?.user;

    Cookies.set("token", data?.data?.token);
    if (!user?.isProfileCompleted) {
      navigate("/auth/create-provider-profile");
      return;
    }

    if (!user?.isDocumentsSubmitted || !user?.isAddressCompleted) {
      navigate("/auth/create-account-request");
      return;
    }

    if (user?.profileStatus === "pending") {
      return;
    }

    navigate(routeName);
  }
};

export const processProviderProfileCreate = (data, navigate) => {
  if (data?.success) {
    SuccessToast(data?.message);
    navigate("/auth/create-account-request");
    return;
  }
};

export const processForget = (data, navigate, userData) => {
  if (data?.success) {
    sessionStorage.setItem("email", userData?.email);
    SuccessToast(data?.message);
    navigate("/auth/forget-otp");

    return;
  }
};

export const processUpdatePassword = (data, setIsModal) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setIsModal(true);

    return;
  }
};
export const processAccountRequest = (data, setRequestModal) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setRequestModal(true);

    return;
  }
};

export const processError = (error) => {
  console.log(error);
  if (error?.response?.data?.message) {
    ErrorToast(error?.response?.data?.message);
    return;
  } else {
    ErrorToast("Something went wrong");
  }
};

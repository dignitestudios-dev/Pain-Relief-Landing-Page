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
export const processUploadLicese = (
  data,
  setLicenseModal,
  setPendingModal,
  setUpdate
) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setLicenseModal(false);
    setPendingModal(true);
    setUpdate((prev) => !prev);

    return;
  }
};
export const processSendRequest = (data, setLicenseModal, setUpdate) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setLicenseModal(true);
    setUpdate((prev) => !prev);

    return;
  }
};
export const processEditProviderProfile = (data, navigate, setUpdate) => {
  if (data?.success) {
    SuccessToast(data?.message);
    navigate("/network/profile-netwrok-provider");
    setUpdate((prev) => !prev);

    return;
  }
};

export const processAddAddress = (data, setIsModal, setUpdate) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setIsModal(false);
    setUpdate((prev) => !prev);
    return;
  }
};
export const processChangePassword = (data, setPasswordUpdateModal) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setPasswordUpdateModal(true);

    return;
  }
};
export const processReportIssue = (data, setReportModal, action) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setReportModal(true);
    action.resetForm();
    return;
  }
};
export const processDeleteAccount = (data, setDeleteModal) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setDeleteModal(true);

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

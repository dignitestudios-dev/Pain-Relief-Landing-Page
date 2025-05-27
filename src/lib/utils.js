import { ErrorToast, SuccessToast } from "../components/global/Toaster";

export const processSignup = (data, navigate, userData, loginAuth) => {
  if (data?.success) {
    loginAuth({
      data: { user: userData },
    });
    SuccessToast(data?.message);
    navigate("/auth/verify-otp", {
      state: { userType: userData?.role, email: userData?.email },
    });
    return;
  }
};

export const processLogin = (
  data,
  navigate,
  routeName,
  loginAuth,
  setRequestModal
) => {
  if (data?.success) {
    loginAuth(data);
    const user = data?.data?.user;
    if (!user?.isProfileCompleted) {
      navigate("/provider/create-provider-profile");
      return;
    }

    if (!user?.isDocumentsSubmitted || !user?.isAddressCompleted) {
      navigate("/provider/create-account-request");
      return;
    }

    if (user?.profileStatus === "pending") {
      setRequestModal(true);
      return;
    }
    if (user?.profileStatus === "approved") {
      navigate(routeName);
      return;
    }
  }
};

export const processProviderProfileCreate = (data, navigate, loginAuth) => {
  console.log("🚀 ~ processProviderProfileCreate ~ data:", data);
  if (data?.success) {
    loginAuth({ data: { user: data?.data } });
    SuccessToast(data?.message);
    navigate("/provider/create-account-request");
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

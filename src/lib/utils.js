import { ErrorToast, SuccessToast } from "../components/global/Toaster";

export const processSignup = (data, navigate, userData, loginAuth) => {
  if (data?.success) {
    loginAuth({
      data: { user: data?.data },
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
      navigate("/onboard/create-provider-profile");
      return;
    }

    if (!user?.isDocumentsSubmitted || !user?.isAddressCompleted) {
      navigate("/onboard/create-account-request");
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
  console.log(data, "data==>");
  if (data?.success) {
    loginAuth({ data: { user: data?.data } });
    SuccessToast(data?.message);
    navigate("/onboard/create-account-request");
    return;
  }
};

export const processUserProfileCreate = (data, navigate, loginAuth) => {
  if (data?.success) {
    loginAuth({ data: { user: data?.data } });
    SuccessToast(data?.message);
    sessionStorage.setItem("isFamilyMembers", true);
    navigate("/onboard/create-family-member");
    return;
  }
};

export const processUserFamilyMember = (
  data,
  setIsModal,
  setUpdate,
  setMembers
) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setIsModal(false);
    setUpdate((prev) => !prev);
    setMembers(data?.data);
    sessionStorage.setItem("familyMembers", JSON.stringify(data?.data));
    sessionStorage.removeItem("isFamilyMembers");

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

export const processAccountRequest = (
  data,
  setRequestModal,
  reqModal = false,
  stateModal = false,
  loginAuth
) => {
  if (data?.success) {
    loginAuth({ data: { user: data?.data } });
    SuccessToast(data?.message);
    setRequestModal(true);

    return;
  }
};

export const processUploadLicese = (
  data,
  setLicenseModal,
  setPendingModal,
  setUpdate,
  loginAuth = false
) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setLicenseModal(false);
    setPendingModal(true);
    setUpdate((prev) => !prev);

    return;
  }
};
export const processSendRequest = (
  data,
  setLicenseModal,
  setUpdate,
  loginAuth
) => {
  if (data?.success) {
    console.log(data, "data");
    loginAuth({
      data: { user: data?.data },
    });
    SuccessToast(data?.message);
    setLicenseModal(true);
    setUpdate((prev) => !prev);

    return;
  }
};

export const processEditProviderProfile = (
  data,
  navigate,
  setUpdate,
  loginAuth
) => {
  if (data?.success) {
    console.log(data, "ProviderData");
    SuccessToast(data?.message);
    loginAuth({ data: { user: data?.data } });
    navigate("/provider/profile-network-provider");
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
export const processQuestionCreate = (data, navigate, route) => {
  if (data?.success) {
    SuccessToast(data?.message);
    navigate(route);
    return;
  }
};

export const processDeleteFamilyMember = (
  data,
  setDeleteModal,
  setUpdate,
  selectedMemberId
) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setDeleteModal(false);
    setUpdate((prev) => !prev);
    const storedMembers =
      JSON.parse(sessionStorage.getItem("familyMembers")) || [];
    const updatedMembers = storedMembers.filter(
      (member) => member._id != selectedMemberId
    );
    sessionStorage.setItem("familyMembers", JSON.stringify(updatedMembers));
    return;
  }
};

export const processUpdateFamily = (
  data,
  setEditModal,
  _setMembers,
  setUpdate
) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setEditModal(false);
    if (typeof setUpdate === "function") {
      setUpdate((prev) => !prev);
    }
    sessionStorage.setItem("familyMembers", JSON.stringify(data?.data));

    return;
  }
};

export const processAppointmentRequest = (data, modal, setUpdate, status) => {
  if (data?.success) {
    if (status === "Rejected") {
      modal("IsReject", "");
    } else if (status === "Suggested") {
      modal("IsSuggested", "");
    } else {
      modal("", "");
    }
    if (data?.data?._id) {
      setUpdate(data?.data?._id);
    } else {
      setUpdate((prev) => !prev);
    }
    SuccessToast(data?.message);
    return;
  }
};

export const processEditUserProfile = (data, navigate, loginAuth) => {
  if (data?.success) {
    SuccessToast(data?.message);
    loginAuth({ data: { user: { ...data?.data } } });
    navigate("/user/user-profile");

    return;
  }
};
export const processCancelSubscription = (data, navigate) => {
  if (data?.success) {
    SuccessToast(data?.message);
    navigate("/user/upgrade-plan");

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

import { Navigate, Outlet, useLocation } from "react-router";

const OnboardLayout = ({ token, role, user }) => {
  const location = useLocation();
  const path = location.pathname;
  const familyMember = sessionStorage.getItem("isFamilyMembers");

  // Not authenticated
  if (!token) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  // Authenticated as USER
  if (role === "user") {
    if (
      !user?.isSubscribed &&
      !path.startsWith("/onboard/subscription-plans") &&
      !path.startsWith("/onboard/subscription-payment-detail")
    ) {
      return <Navigate to="/onboard/subscription-plans" replace />;
    } else if (
      user?.isSubscribed &&
      !user?.isProfileCompleted &&
      !path.startsWith("/onboard/create-profile") &&
      !path.startsWith("/onboard/create-family-member")
    ) {
      return <Navigate to="/onboard/create-profile" replace />;
    } else if (
      user?.isSubscribed &&
      user?.isProfileCompleted &&
      familyMember &&
      !path.startsWith("/onboard/create-family-member")
    ) {
      return <Navigate to="/onboard/create-family-member" replace />;
    } else if (
      user?.isSubscribed &&
      user?.isProfileCompleted &&
      path.startsWith("/onboard/create-family-member") &&
      !familyMember
    ) {
      sessionStorage.removeItem("isFamilyMembers");
      return <Navigate to="/user/dashboard" replace />;
    }
  }

  //  Authenticated as PROVIDER
  if (role === "provider") {
    if (
      !user?.isProfileCompleted &&
      !path.startsWith("/onboard/create-provider-profile")
    ) {
      return <Navigate to="/onboard/create-provider-profile" replace />;
    }
    if (
      user?.isProfileCompleted &&
      !user?.isAddressCompleted &&
      !path.startsWith("/onboard/create-account-request")
    ) {
      return <Navigate to="/onboard/create-account-request" replace />;
    }
    if (
      user?.isProfileCompleted &&
      user?.isAddressCompleted &&
      path.startsWith("/onboard")
    ) {
      return <Navigate to="/provider/dashboard" replace />;
    }
  }

  return <Outlet />;
};

export default OnboardLayout;

import { Navigate, Outlet } from "react-router";

const AuthLayout = ({ token, role, userData }) => {
  if (token && role === "user") {
    return <Navigate to="/user/dashboard" replace />;
  }

  if (token && role === "provider" && userData?.profileStatus === "approved") {
    return <Navigate to="/provider/dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthLayout;

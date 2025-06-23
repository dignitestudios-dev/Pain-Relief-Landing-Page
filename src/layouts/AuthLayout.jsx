import { Navigate, Outlet } from "react-router";

const AuthLayout = ({ token, role }) => {
  console.log("🚀 ~ AuthLayout ~ token:", token);
  console.log("🚀 ~ AuthLayout ~ role:", role);
  if (token && role === "user") {
    return <Navigate to="/user/dashboard" replace />;
  }

  if (token && role === "provider") {
    return <Navigate to="/provider/dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthLayout;

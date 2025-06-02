import { Navigate, Outlet, Route, Routes } from "react-router";
import "./App.css";
// import DashboardLayout from "./layouts/DashboardLayout";
// import AuthLayout from "./layouts/AuthLayout";

import { PublicRoutes } from "./routes/app/landingPage/PublicRoutes";
import AppLayout from "./components/app/landingPage/layout/AppLayout";
import { AuthRoutes } from "./routes/app/userInterface/AuthRoutes";
import { ProviderRoutes } from "./routes/app/networkProviderInterface/ProviderRoutes";
import { UserRoutes } from "./routes/app/userInterface/UserRoutes";
import NetworkProviderLayout from "./components/app/networkProviderInterface/layout/NetworkProviderLayout";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
// import CreateProfile from "./pages/onboarding/CreateProfile";
import CreateProviderProfile from "./pages/onboarding/CreateProviderProfile";
import CreateAccountRequest from "./pages/onboarding/CreateAccountRequest";
import UserLayout from "./components/app/userInterface/layout/UserLayout";

function App() {
  const { token, role, userData } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app/home" />} />

      <Route path="app" element={<AppLayout />}>
        {PublicRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      {/* element={
          token && role === "provider" ? (
            <Navigate to="/network/dashboard" />
          ) : token && role === "user" ? (
            <Navigate to="/user/dashboard" />
          ) : (
            <Outlet />
          )
        } */}

      <Route path="auth">
        {AuthRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route path="user" element={<UserLayout />}>
        {UserRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route
        path="provider"
        element={token && role ? <Outlet /> : <Navigate to="/auth/sign-in" />}
      >
        {!userData?.isProfileCompleted && (
          <Route
            path="create-provider-profile"
            element={<CreateProviderProfile />}
          />
        )}
        {userData?.isProfileCompleted ? (
          <Route
            path="create-account-request"
            element={<CreateAccountRequest />}
          />
        ) : (
          <Route element={<Navigate to="/auth/sign-in" />} />
        )}
        {/* <Route path="create-profile" element={<CreateProfile />} /> */}
      </Route>

      <Route
        path="provider"
        element={
          <NetworkProviderLayout token={token} role={role} user={userData} />
        }
      >
        {ProviderRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route
        path="*"
        element={<div className="text-7xl">Page Not Found</div>}
      />
    </Routes>
  );
}

export default App;

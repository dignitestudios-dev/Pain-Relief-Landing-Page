import { Navigate, Route, Routes } from "react-router";
import "./App.css";
// import DashboardLayout from "./layouts/DashboardLayout";

import { PublicRoutes } from "./routes/app/landingPage/PublicRoutes";
import AppLayout from "./components/app/landingPage/layout/AppLayout";

import { ProviderRoutes } from "./routes/app/networkProviderInterface/ProviderRoutes";
import { UserRoutes } from "./routes/app/userInterface/UserRoutes";
import NetworkProviderLayout from "./components/app/networkProviderInterface/layout/NetworkProviderLayout";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

import UserLayout from "./components/app/userInterface/layout/UserLayout";

import OnboardLayout from "./layouts/OnboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import { OnboardingRoutes } from "./routes/onboarding/OnboardingRoutes";
import { AuthenticationRoutes } from "./routes/authentication/AuthenticationRoutes";

function App() {
  const { token, userData } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app/home" />} />

      <Route path="app" element={<AppLayout />}>
        {PublicRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route
        path="auth"
        element={<AuthLayout token={token} role={userData?.role} />}
      >
        {AuthenticationRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route
        path="onboard"
        element={
          <OnboardLayout token={token} role={userData?.role} user={userData} />
        }
      >
        {OnboardingRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route
        path="user"
        element={
          <UserLayout token={token} role={userData?.role} user={userData} />
        }
      >
        {UserRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route
        path="provider"
        element={
          <NetworkProviderLayout
            token={token}
            role={userData?.role}
            user={userData}
          />
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

import { Navigate, Route, Routes } from "react-router";
import "./App.css";
// import DashboardLayout from "./layouts/DashboardLayout";
// import AuthLayout from "./layouts/AuthLayout";

import { PublicRoutes } from "./routes/app/landingPage/PublicRoutes";
import AppLayout from "./components/app/landingPage/layout/AppLayout";
import { AuthRoutes } from "./routes/app/userInterface/AuthRoutes";
import { ProviderRoutes } from "./routes/app/networkProviderInterface/ProviderRoutes";
import { UserRoutes } from "./routes/app/userInterface/UserRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app/home" />} />

      <Route path="app" element={<AppLayout />}>
        {PublicRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route path="auth">
        {AuthRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route path="user">
        {UserRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route path="network">
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

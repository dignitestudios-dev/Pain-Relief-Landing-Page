import { Navigate, Route, Routes } from "react-router";
import "./App.css";
// import DashboardLayout from "./layouts/DashboardLayout";
// import AuthLayout from "./layouts/AuthLayout";

import { PublicRoutes } from "./routes/app/landingPage/PublicRoutes";
import Applayout from "./components/app/landingPage/layout/AppLayout";
import { AuthRoutes } from "./routes/app/userInterface/AuthRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app/home" />} />

      <Route path="app" element={<Applayout />}>
        {PublicRoutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route path="auth">
        {AuthRoutes?.map((Link, i) => (
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

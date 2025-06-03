import { Navigate, Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const UserLayout = ({ page, token, role, user }) => {
  const location = useLocation();
  const path = location.pathname;

  // Not logged in or wrong role
  if (!token || role !== "user") {
    return <Navigate to="/auth/sign-in" replace />;
  }

  // Enforce subscription check first
  if (!user?.isSubscribed && !path.startsWith("/onboard/subscription-plans")) {
    return <Navigate to="/onboard/subscription-plans" replace />;
  }

  // Then profile completion check
  if (
    user?.isSubscribed &&
    !user?.isProfileCompleted &&
    !path.startsWith("/onboard/create-profile")
  ) {
    return <Navigate to="/onboard/create-profile" replace />;
  }

  return (
    <div className="relative bg-[#f5f5f5]">
      <div className="flex absolute right-0 left-0 z-20 justify-between items-center bg-transparent mt-3 md:mx-auto  xl:w-[90%] lg:w-[95%] md:w-[100%]  md:px-3 md:pe-10">
        <Navbar />
      </div>
      <div>{page}</div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;

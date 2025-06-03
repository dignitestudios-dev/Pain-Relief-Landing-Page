import { Navigate, Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const NetworkProviderLayout = ({ page, token, role, user }) => {
  if (!token || role !== "provider") {
    return <Navigate to="/auth/sign-in" replace />;
  } else if (!user?.isProfileCompleted) {
    return <Navigate to="/onboard/create-provider-profile" replace />;
  } else if (!user?.isDocumentsSubmitted) {
    return <Navigate to="/onboard/create-account-request" replace />;
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

export default NetworkProviderLayout;

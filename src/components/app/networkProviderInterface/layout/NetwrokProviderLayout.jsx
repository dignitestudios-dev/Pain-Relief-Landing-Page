import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const NetwrokProviderLayout = ({ page }) => {
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

export default NetwrokProviderLayout;

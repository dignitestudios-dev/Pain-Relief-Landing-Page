import { useState } from "react";
import { DesktopLogo, ProfileImg } from "../../../../assets/export";
import { MdArrowDropDown } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropMemberOpen, setIsDropMemberOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenus = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };
  const LinksPage = [
    { url: "profile-netwrok-provider", name: "Profile" },
    { url: "privacy-policy", name: "Privacy Policy" },
    { url: "terms-of-use", name: "Terms of use" },
    { url: "membership-agreement", name: "Membership Agreement" },
    { url: "profile", name: "Account & Setting" },
    { url: "profile", name: "Logout" },
  ];
  return (
    <nav className="w-full border-b border-[#FFFFFF5E] bg-transparent">
      <div className="flex items-center justify-between lg:px-2  md:px-2 p-4">
        <div className="">
          <img
            src={DesktopLogo}
            className="lg:w-[262px] lg:h-[93.38px] md:w-[130px] w-[150px] object-contain "
            alt="Logo"
          />
        </div>

        <ul className="hidden md:flex items-center font-[500] text-white gap-14 text-sm lg:text-base">
          <li className="cursor-pointer  ">
            <Link to={"dashboard"}>Dasboard</Link>
            <hr className="w-[35px]" />
          </li>
          <li className="cursor-pointer ">
            <Link to={"pain-relief-coach"}>Pain Relief Coach</Link>
          </li>
          <div className="flex justify-center items-center gap-10">
            <li
              className="cursor-pointer"
              onClick={() => navigate("/auth/account-selection")}
            >
              <IoMdNotificationsOutline size={21} />
            </li>
            <li
              className="rounded-full border cursor-pointer "
              onClick={() => setOpenProfile((prev) => !prev)}
            >
              <div className="bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] rounded-full relative  p-[1.5px] ">
                <img
                  src={ProfileImg}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full bg-white"
                />
              </div>
            </li>
            {openProfile && (
              <div className="bg-[#FFFFFF] text-nowrap absolute top-28 w-[206px]  right-14 rounded-[12px] p-2 ">
                {LinksPage.map((item) => (
                  <li
                    onClick={() => navigate(item?.url)}
                    className="text-black cursor-pointer border-b border-b-[#0000001A] p-2 "
                  >
                    {item.name}
                  </li>
                ))}
              </div>
            )}
          </div>
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenus}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end" onClick={toggleMobileMenu}>
          <HiX size={28} />
        </div>
        <div className="p-4 space-y-4 text-black">
          <Link to="dashboard" onClick={closeMenus} className="block">
            Dashboard
          </Link>
          <Link to="pain-relief-coach" onClick={closeMenus} className="block">
            Pain Relief Coach
          </Link>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              closeMenus();
            }}
          >
            <IoMdNotificationsOutline size={21} />
            <span>Notifications</span>
          </div>

          {/* Mobile Profile Avatar + Toggle */}
          <div
            className="mt-4 cursor-pointer w-fit"
            onClick={() => setOpenProfile((prev) => !prev)}
          >
            <div className="bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] rounded-full p-[1.5px] w-fit">
              <img
                src={ProfileImg}
                alt="Avatar"
                className="w-12 h-12 rounded-full bg-white"
              />
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {openProfile && (
            <div className="bg-[#FFFFFF] text-nowrap w-full rounded-[12px] mt-2 border border-[#ddd]">
              {LinksPage.map((item, index) => (
                <div
                  key={index}
                  className="text-black border-b border-b-[#0000001A] p-2"
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

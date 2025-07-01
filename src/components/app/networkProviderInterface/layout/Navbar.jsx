import { useContext, useEffect, useRef, useState } from "react";
import { DesktopLogo, ProfileImg } from "../../../../assets/export";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AppContext } from "../../../../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logoutAuth, userData, notification } = useContext(AppContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notiOpen, setIsNotiOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  console.log("🚀 ~ Navbar ~ notificationCount:", notificationCount);
  const profileRef = useRef(null);
  const notiRef = useRef(null);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenus = () => {
    setOpenProfile(false);
    setIsNotiOpen(false);
  };
  const LinksPage = [
    { url: "profile-network-provider", name: "Profile" },
    { url: "privacy-policy", name: "Privacy Policy" },
    { url: "terms-of-use", name: "Terms of use" },
    { url: "membership-agreement", name: "Membership Agreement" },
    { url: "account-setting", name: "Account & Setting" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
      if (notiRef.current && !notiRef.current.contains(event.target)) {
        setIsNotiOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (notification) {
      setNotificationCount(notificationCount++);
    }
  }, [notification]);

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
            {location.pathname.includes("dashboard") && (
              <hr className="w-[35px]" />
            )}
          </li>
          <li className="cursor-pointer ">
            <Link to={"pain-relief-coach"}>Pain Relief Coach</Link>
            {location.pathname.includes("pain-relief-coach") && (
              <hr className="w-[95px]" />
            )}
          </li>
          <div
            className="flex justify-center items-center gap-10"
            ref={profileRef}
          >
            <li
              className="cursor-pointer"
              onClick={() => {
                setIsNotiOpen((prev) => !prev);
                setOpenProfile(false);
              }}
            >
              <IoMdNotificationsOutline size={21} />
              <span>{notificationCount}</span>
            </li>
            <li
              className="rounded-full border cursor-pointer "
              onClick={() => {
                setOpenProfile((prev) => !prev);
                setIsNotiOpen(false);
              }}
            >
              <div className="bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] rounded-full relative  p-[1.5px] ">
                <img
                  src={userData?.profilePicture || ProfileImg}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full bg-white"
                />
              </div>
            </li>
            {openProfile && (
              <div className="bg-[#FFFFFF] text-nowrap absolute top-28 w-[206px]  right-14 rounded-[12px] p-2 ">
                {LinksPage.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navigate(item?.url);
                      closeMenus();
                    }}
                    className="text-black cursor-pointer border-b border-b-[#0000001A] p-2 "
                  >
                    {item.name}
                  </li>
                ))}
                <li
                  onClick={() => logoutAuth()}
                  className="text-black cursor-pointer border-b border-b-[#0000001A] p-2 "
                >
                  Logout
                </li>
              </div>
            )}
            {notiOpen && (
              <div
                ref={notiRef}
                className="bg-white w-[292px] absolute top-28  right-14 rounded-[12px]"
              >
                <div className="flex  justify-between bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] rounded-t-[12px]  p-3 text-nowrap  ">
                  <h2>Notification </h2>
                  <p className="text-[10px] font-[600] text-[#F8F8F8] ">
                    View All
                  </p>
                </div>
                <div>
                  {["Appointment Title", "Appointment Title"].map(
                    (item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          navigate(item?.url);
                          closeMenus();
                        }}
                        className="text-black cursor-pointer border-b border-b-[#0000001A] p-2 "
                      >
                        <h2 className="flex justify-between ">
                          {notification?.title}
                          <p className="text-[12px] font-[400] text-[#0000007A] ">
                            09:00pm
                          </p>
                        </h2>
                        <p className="flex justify-between text-[12px] font-[400] text-[#212121] ">
                          {notification?.body}
                          {index == 0 ? "accepted" : "rejected"}
                          <p className="text-[12px] font-[400] text-[#0000007A] ">
                            {index == 0 ? "Today" : "9 May, 25"}
                          </p>
                        </p>
                      </li>
                    )
                  )}
                </div>
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

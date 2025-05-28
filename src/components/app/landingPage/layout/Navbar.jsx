import { useEffect, useRef, useState } from "react";
import { Arrodropnav, DesktopLogo } from "../../../../assets/export";
import { MdArrowDropDown } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropMemberOpen, setIsDropMemberOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenus = () => {
    setIsDropdownOpen(false);
    setIsDropMemberOpen(false);
  };
const dropdownRef = useRef(null);
const memberRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      memberRef.current &&
      !memberRef.current.contains(event.target)
    ) {
      closeMenus();
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  const SupportLinks = [
    {
      label: "More Than Insurance",
      url: "more-insurance",
    },
    {
      label: "Immediate Options",
      url: "immediate-options",
    },
    {
      label: "Schedule Appointment",
      url: "schedule-appointment",
    },
  ];
  const MemberLinks = [
    {
      label: "Flexible Memberships",
      url: "membership",
    },
    {
      label: "Pain Relief Coach",
      url: "pain-relief-coach",
    },
  ];
  return (
    <nav className="w-full border-b border-[#FFFFFF5E] bg-transparent">
      <div className="flex items-center justify-between lg:px-2  md:px-2 p-4">
        <div className="">
          <img
            onClick={() => navigate("home")}
            src={DesktopLogo}
            className="lg:w-[352px] cursor-pointer lg:h-[93.38px] md:w-[130px] w-[150px] object-contain "
            alt="Logo"
          />
        </div>

        <ul className="hidden md:flex items-center font-[500] text-white gap-10 text-sm lg:text-base">
          <li className="cursor-pointer border-b border-b-white w-[30px]  ">
            <Link to={"home"}>Home</Link>
          </li>
          <li className="relative"  ref={dropdownRef}>
            <button
              className={`flex items-center gap-2 py-1  ${
                isDropdownOpen ? "" : ""
              }`}
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setIsDropMemberOpen(false);
              }}
            >
              Pain Relief Support{" "}
              <img src={Arrodropnav} className="h-[7px]   " alt="" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0  border    border-[#FFFFFF4D] rounded-md z-20">
                <div className="py-1 p-2 bg-gradient-to-r  text-white text-sm">
                  {SupportLinks.map((item, index) => (
                    <div
                      key={index}
                      className={` text-start pt-2  py-2 text-[16px] text-white ${
                        index === 0 ? "  " : "border-t"
                      } border-[#FFFFFF4D] text-nowrap font-[400] `}
                    >
                      <Link to={item.url} onClick={closeMenus}>
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li className="relative"  ref={memberRef}>
            <button
              className={`flex items-center gap-2 py-1`}
              onClick={() => {
                setIsDropMemberOpen(!dropMemberOpen);
              setIsDropdownOpen(false);
              }}
            >
              Membership
              <img src={Arrodropnav} className="h-[7px]" alt="" />
            </button>
            {dropMemberOpen && (
              <div className="absolute top-full left-0 border rounded-md border-[#FFFFFF4D] z-20">
                <div className="py-1 p-2 bg-gradient-to-r text-white text-sm">
                  {MemberLinks.map((item, index) => (
                    <div
                      key={index}
                      className={`text-start pt-2 py-1 text-[16px] text-white ${
                        index === 0 ? "" : "border-t"
                      } border-[#FFFFFF4D] text-nowrap font-[400]`}
                    >
                      <Link to={item.url} onClick={closeMenus}>
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li
            className="cursor-pointer"
            onClick={() => navigate("/auth/account-selection")}
          >
            Sign Up
          </li>
          <li>
            <button
              onClick={() => navigate("/auth/sign-in")}
              className="border px-3 py-1 h-[43px] w-[135.27px] text-[#63CFAC] bg-white rounded-md"
            >
              Login
            </button>
          </li>
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
          <Link to="home" onClick={closeMenus} className="block">
            Home
          </Link>

          <div>
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Pain Relief Support <MdArrowDropDown />
            </button>
            {isDropdownOpen && (
              <div className="mt-2 ml-4 space-y-1 text-black">
                {SupportLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.url}
                    onClick={closeMenus}
                    className="block py-1 border-b"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setIsDropMemberOpen(!dropMemberOpen)}
            >
              Membership <MdArrowDropDown />
            </button>
            {dropMemberOpen && (
              <div className="mt-2 ml-4 space-y-1 text-black">
                {MemberLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.url}
                    onClick={closeMenus}
                    className="block py-1 border-b"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/auth/sign-up" onClick={closeMenus} className="block">
            Sign Up
          </Link>

          <Link to="/auth/sign-in" onClick={closeMenus}>
            <button className="border px-3 py-1 rounded-md w-fit text-[#63CFAC]">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

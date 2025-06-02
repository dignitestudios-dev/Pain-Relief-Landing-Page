import React from "react";
import {
  Facebook,
  FooterTick,
  Instagram,
  LogoFooter,
  Twitter,
  Youtube,
} from "../../../../assets/export";
import { Link, useLocation } from "react-router";

const Footer = () => {
  const SupportLinks = [
    { label: "Service Provider", url: "/app/home" },
    { label: "More Than Insurance", url: "/app/more-insurance" },
    { label: "Immediate Options", url: "/app/immediate-options" },
    { label: "Schedule Appointment", url: "/app/schedule-appointment" },
  ];

  const SupportLinksTwo = [
    { label: "Membership", url: "/app/membership" },
    { label: "Multiple Levels", url: "/app/schedule-appointment" },
    { label: "Pain Relief Coach", url: "/app/pain-relief-coach" },
  ];

  const pagesLinks = [
    { label: "Terms of use", url: "terms-of-use" },
    { label: "Privacy Policy", url: "privacy-policy" },
    { label: "Member Agreement", url: "membership-agreement" },
  ];
  const location = useLocation();

  return (
    <div
      className={`bg-[#EAF7FB] flex justify-center items-center p-4  ${
        location.pathname === "/app/home" ? "xl:h-[550px] h-auto " : "h-auto"
      } `}
    >
      <div className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Description */}
          <div className="col-span-1 lg:col-span-2">
            <img
              src={LogoFooter}
              className="w-[150px] md:w-[200px] lg:w-[262px] object-contain"
              alt="logo"
            />
            <p className="text-[14px] text-[#855b5b] mt-3">
              Pain Relief USA® does not offer medical advice, diagnosis, or
              treatment, and is not a replacement for a chiropractor, physical
              therapist, or doctor. Please consult with your doctor if you have
              any questions about incorporating the Pain Relief USA sessions
              into your health and well-being program. Your information is
              confidential. We will not share it with your employer.
            </p>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:mt-5">
            <h2 className="text-[18px] font-semibold text-[#212121] mb-2">
              Quick Links
            </h2>
            <ul>
              {SupportLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center cursor-pointer gap-2 leading-8 text-sm"
                >
                  <img
                    src={FooterTick}
                    className="w-[10px] h-[5.71px]"
                    alt=""
                  />
                  <Link target="blank" to={item.url}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:mt-14">
            <ul>
              {SupportLinksTwo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center cursor-pointer  gap-2 leading-8 text-sm"
                >
                  <img
                    src={FooterTick}
                    className="w-[10px] h-[5.71px]"
                    alt=""
                  />
                  <Link target="blank" to={item.url}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="lg:mt-5">
            <h2 className="text-[18px] font-semibold text-[#212121] mb-2">
              Social Link
            </h2>
            <div className="flex gap-3">
              {[
                { icon: Facebook, url: "https://facebook.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Youtube, url: "https://youtube.com" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[24px] h-[20px]"
                >
                  <img
                    src={item.icon}
                    alt="social-icon"
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-[#212121] text-center md:text-left">
            © 2025 Pain Relief USA. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-right">
            {pagesLinks.map((item, index) => (
              <p key={index} className="text-[14px] text-[#212121]">
                <Link to={item.url}>{item.label}</Link>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

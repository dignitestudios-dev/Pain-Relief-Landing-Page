import React from "react";
import { AboutUs } from "../../../../assets/export";
import Button from "../Inputs/Button";
import { useNavigate } from "react-router";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="grid lg:grid-cols-2   md:grid-cols-1 items-center  w-[90%] ">
        <div className="  xl:mt-10 lg:mt-3 md:flex hidden ">
          <img
            src={AboutUs}
            className="lg:pl-20  md:pl-0 lg:h-[514.05px] md:h-[400px] "
            alt=""
          />
        </div>
        <div className=" lg:mt-10 md:mt-3">
          <h2 className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent text-[24px] font-[500] ">
            About Us
          </h2>
          <h2 className="lg:text-[50px] md:text-[35px] text-[35px] font-[600] ">
            {" "}
            <span className="text-[#212121] ">
              {" "}
              Redefining Access to Quality{" "}
            </span>{" "}
            <span className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
              Pain Relief Care
            </span>
          </h2>
          <p className="text-[#565656] lg:text-[16px] md:text-[14px] mt-3 ">
            At Pain Management USA, we are committed to transforming how
            individuals access chiropractic care. Our platform bridges the gap
            between patients and trusted service provider through a seamless,
            membership-based system.
          </p>
          <p className="text-[#565656] xl:mt-10 lg:mt-2 md:mt-3 mt-2 lg:text-[16px] md:text-[14px] ">
            We empower individuals and families to prioritize their well-being
            by simplifying appointment, offering expert guidance, and ensuring
            access to top-tier chiropractic professionals. Whether seeking
            relief from chronic pain or focusing on preventive care, we strive
            to make quality chiropractic services convenient, affordable, and
            accessible to all.
          </p>
          <div className="w-[181px] mt-4">
            <Button
              text={"Join Now"}
              onClick={() => navigate("/auth/account-selection")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

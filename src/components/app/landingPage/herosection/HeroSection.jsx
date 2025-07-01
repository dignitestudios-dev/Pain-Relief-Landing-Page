import React from "react";
import { Tick } from "../../../../assets/export";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-hero text-white">
      <div className="flex  h-[100vh] justify-center lg:items-center py-40 min-h-screen w-[90%] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-[64px] font-semibold leading-tight">
            Your Path to Better Health Starts Here
          </h2>
          <p className="mt-4 lg:text-[24px]  md:text-[18px] text-[16px] ">
            Get Access to Top Service Providers with Flexible Membership Plans
          </p>

          {/* Features */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
            {[
              "Easy Appointments",
              "Verified Professionals",
              "Affordable Memberships",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <img src={Tick} className="w-6 h-6" alt="Tick" />
                <span className="lg:text-[24px] md:text-[18px] text-[16px] font-[500] ">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button
              onClick={() => navigate("/auth/account-selection")}
              className="rounded-lg border border-white h-12 px-6 w-full font-[600] sm:w-[210px]"
            >
              Join Now
            </button>
            <button
              onClick={() => navigate("/app/schedule-appointment")}
              className="rounded-lg text-nowrap bg-white text-[#63CFAC] h-12 font-[500] w-full sm:w-[210px]"
            >
              <p className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent">
                {" "}
                Explore Service Providers
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

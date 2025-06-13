import { useContext } from "react";
import { AppContext } from "../../../../../context/AppContext";

const HeroSection = () => {
  const { userData } = useContext(AppContext);
  return (
    <div>
      <div className="min-h-[410px]">
        <div className="bg-provider-detail h-[350px] w-full">
          <div className="flex px-4 md:px-10 lg:px-20 py-32 md:py-24 lg:py-32 w-full text-white">
            <div className="w-full mt-10  mx-auto">
              <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                Hello {userData?.firstName},
              </h2>
              <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-snug sm:leading-[40px] md:leading-[45px] lg:leading-[50px] mt-2">
                How Can We Help You Today?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

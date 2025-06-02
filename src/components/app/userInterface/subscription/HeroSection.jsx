import { DesktopLogo } from "../../../../assets/export";

const HeroSection = () => {
  return (
    <div className="flex items-center bg-gradient-to-l h-[150px] to-[#63CFAC] from-[#29ABE2] px-6 md:px-12 lg:px-20">
      <div className="w-full">
        <img
          src={DesktopLogo}
          className="lg:w-[305px] lg:h-[80.92px] md:w-[200px] w-[150px] object-contain cursor-pointer"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default HeroSection;

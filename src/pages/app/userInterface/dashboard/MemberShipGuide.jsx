import { useEffect } from "react";
import HeroSection from "../../../../components/app/userInterface/dashboard/membershipguide/HeroSection";
// import ViewMemberShipGuide from "../../../../components/app/userInterface/dashboard/membershipguide/ViewMemberShipGuide";
import { useNavigate } from "react-router";

const MemberShipGuide = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.open("/User-Guide.pdf", "_blank");
    navigate("/user/dashboard");
  }, []);
  return (
    <div>
      <HeroSection />
      <div className="flex justify-center relative -mt-28 w-full mb-10">
        <div className="bg-white  w-[90%] h-[62px] overflow-auto rounded-[8px] p-8"></div>
      </div>
    </div>
  );
};

export default MemberShipGuide;

import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-[410px]">
        <div className="bg-provider-detail h-[350px] w-full">
          <div className="flex px-4 md:px-10 lg:px-20 py-32 md:py-24 lg:py-32 w-full text-white">
            <div className="w-full  mt-20  cursor-pointer ">
              <h2
                onClick={() => navigate(-1)}
                className="text-[19px] flex items-center gap-1 sm:text-[19px] md:text-[19px] lg:text-[19px] font-semibold leading-snug sm:leading-[40px] md:leading-[45px] lg:leading-[50px] mt-2"
              >
                <IoIosArrowBack size={16} /> Back
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

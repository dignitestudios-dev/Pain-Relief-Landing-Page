import Cards from "./Cards";

const HeroSection = () => {
  return (
    <div>
      <div className="h-[550px]">
        <div className="bg-hero  text-white">
          <div className="flex   justify-center lg:items-center py-40 min-h-screen w-[90%] mx-auto">
            <div className="text-center ">
              <h2 className="text-3xl md:text-5xl lg:text-[64px] font-semibold leading-tight">
                Connected Professionals
              </h2>
              <div className="flex  justify-center items-center mt-3">
                <p className="lg:text-[24px] md:text-[18px] tex-[16px] font-[500]  lg:w-[80%] ">
                  Our secure web application not only provides you access to our
                  network of professionals, we included options for at-home
                  exercise and educational support. All this available 24/7 so
                  you can begin your journey to living a pain-free life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Card from "./Cards";
import { SkeletonProviderCard } from "../../../global/Sekelton";

const Carousel = ({ providerData, loading }) => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full  px-4 py-10">
      {providerData.length === 0 && !loading ? (
        <div className="text-center">No Data Found</div>
      ) : loading ? (
        <SkeletonProviderCard />
      ) : (
        <>
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            speed={500}
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              1280: { slidesPerView: 5 },
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              640: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {providerData?.map((item, index) => (
              <SwiperSlide key={index}>
                <Card data={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-2">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="group bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] hover:bg-none hover:bg-white p-2 rounded-full shadow flex justify-center items-center h-[36px] w-[36px] transition-colors duration-300"
            >
              <BiChevronLeft
                className="text-white group-hover:text-gray-500"
                size={20}
              />
            </button>

            <button
              onClick={() => swiperRef.current.slideNext()}
              className="group bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] hover:bg-none hover:bg-white p-2 rounded-full shadow flex justify-center items-center h-[36px] w-[36px] transition-colors duration-300"
            >
              <BiChevronRight
                className="text-white group-hover:text-gray-500"
                size={20}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;

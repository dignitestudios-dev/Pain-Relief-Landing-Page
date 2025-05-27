import { useEffect, useState } from "react";
import Card from "./Cards";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { SkeletonProviderCard } from "../../../global/Sekelton";
import { ArroCrousel } from "../../../../assets/export";

const Carousel = ({
  providerData,
  loading,
  currentPage,
  pagination,
  setCurrentPage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);
  const cardWidth = 270; // px
  const cards = Array(10).fill(0); // Simulated 10 cards

  // 🔁 Adjust number of visible cards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCards(1);
      } else if (width < 768) {
        setVisibleCards(2);
      } else if (width < 1024) {
        setVisibleCards(3);
      } else if (width < 1280) {
        setVisibleCards(4);
      } else {
        setVisibleCards(5);
      }
    };

    updateVisibleCards(); // Initial check
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const next = () => {
    if (currentIndex < cards.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden px-4 py-10">
      {/* Carousel Track */}
      <div className="">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
        >
          {loading ? (
            <SkeletonProviderCard />
          ) : (
            providerData?.map((item, index) => <Card key={index} data={item} />)
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-2 mt-8">
        <button
          onClick={prev}
          className={` h-[36px] w-[36px] flex justify-center items-center bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] p-2 rounded-full shadow`}
        >
          <img
            src={ArroCrousel}
            className="w-[6px] h-[12px] rotate-180 "
            alt=""
          />
        </button>
        <button
          onClick={next}
          className="bg-gradient-to-l h-[36px] w-[36px] flex justify-center items-center to-[#63CFAC] from-[#29ABE2] p-2 rounded-full shadow"
        >
          <img src={ArroCrousel} className="w-[6px] h-[12px] " alt="" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

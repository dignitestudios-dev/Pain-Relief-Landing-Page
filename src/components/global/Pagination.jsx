import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  setCurrentPage,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
console.log(currentPage,"currentPage==>pappap")
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="mt-2 w-full max-w-[552px] bg-white rounded-[8px] shadow-sm py-3 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Previous */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 transition ${
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-500 hover:text-black"
          }`}
        >
          <IoIosArrowBack />
          <span>Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2 justify-center overflow-x-auto w-[350px] ">
          {pages?.map((item) => (
            <div
              key={item}
              onClick={() => onPageChange(item)}
              className={`w-[40px] h-[40px] flex justify-center items-center rounded-[6px] text-sm font-medium cursor-pointer
                ${
                  item === currentPage
                    ? "bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-1 transition ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-500 hover:text-black"
          }`}
        >
          <span>Next</span>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

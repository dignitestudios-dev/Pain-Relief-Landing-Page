import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  const pages = ["1", "2", "3", "4"];
  const currentPage = "1"; // Make dynamic if needed

  return (
    <div className="mt-2 w-full max-w-[552px]  bg-white rounded-[8px] shadow-sm py-3 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Previous */}
        <button className="flex items-center gap-1 text-gray-500 hover:text-black transition">
          <IoIosArrowBack />
          <span>Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2">
          {pages.map((item) => (
            <div
              key={item}
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
        <button className="flex items-center gap-1 text-gray-500 hover:text-black transition">
          <span>Next</span>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

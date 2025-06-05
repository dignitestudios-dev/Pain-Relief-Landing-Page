import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

const SubmitLoader = ({ isSubmitting }) => {
  return (
    <div>
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-md bg-black/50 text-white text-center px-4">
          <div className="relative w-[100px] h-[100px]">
            <div className="absolute inset-0 animate-spin-slow">
              <BiLoaderAlt size={100} />
            </div>

            <div className="absolute top-[20px] left-[20px] animate-spin-reverse">
              <BiLoaderAlt size={60} />
            </div>
          </div>

          <h2 className="mt-6 text-[28px] font-[600] max-w-[90%]">
            Matching You with Trusted Service Providers...
          </h2>
          <p className="mt-2 text-[18px] w-[90%] md:w-[40%]">
            Your answers are helping us find the perfect service provider for
            your needs. We’ll show you the best options shortly – just a few
            moments!
          </p>
        </div>
      )}
    </div>
  );
};

export default SubmitLoader;

import { useState } from "react";
import { EditIcon, LocationDark, RedBin } from "../../assets/export";
import AddNewLocationModal from "./AddNewLocationModal";

const AddNewLocation = ({
  therapyTypesOption,
  isModal,
  setIsModal,
  setIsLocationAdded,
  isLocationAdded,
  setEditIndex,
  editIndex,
  setFormErrors,
}) => {
  return (
    <div>
      <div className="border border-dashed border-[rgba(85,85,85,0.2)] bg-[#EAEAEA50] rounded-2xl flex justify-center items-center h-[142px]">
        <p
          onClick={() => {
            setIsModal(true);
          }}
          className="underline text-[#212121] cursor-pointer"
        >
          + Add New Location
        </p>
      </div>
      {isLocationAdded?.length > 0 &&
        isLocationAdded?.map((item, index) => (
          <div key={index} className="lg:w-[500px] md:w-[500px] w-[320px] mt-3">
            <div className=" flex items-center justify-between rounded-[12px]  p-4 shadow-[0_0_16px_rgba(17,17,26,0.1)] ">
              <div>
                <div className="flex items-center gap-3 ">
                  <img
                    src={LocationDark}
                    className="w-[17px] h-[17px] "
                    alt=""
                  />
                  <h2 className="text-[14px] w-[300px] font-[400] text-[#1F1F1F] ">
                    {item?.address?.address},{item?.address?.city},
                    {item?.address?.state},
                  </h2>
                </div>
                <p className="text-[14px] w-[300px] text-[#1F1F1F] font-[500] pt-2 px-8 ">
                  {item?.specialty?.map((s) => s?.label).join(", ")}
                </p>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <span
                  onClick={() => {
                    setEditIndex(index);
                    setIsModal(true);
                  }}
                >
                  <img src={EditIcon} />
                </span>
                <span
                  onClick={() => {
                    setIsLocationAdded((prev) =>
                      prev.filter((_, i) => i !== index)
                    );
                  }}
                >
                  <img src={RedBin} />
                </span>
              </div>
            </div>
          </div>
        ))}
      {isModal && (
        <AddNewLocationModal
          setIsModal={setIsModal}
          setIsLocationAdded={setIsLocationAdded}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          isLocationAdded={isLocationAdded}
          therapyTypesOption={therapyTypesOption}
          setFormErrors={setFormErrors}
        />
      )}
    </div>
  );
};

export default AddNewLocation;

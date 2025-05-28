/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import SelectableField from "./SelectableField";
import Button from "../app/landingPage/Inputs/Button";
import GoogleMapComponent from "../global/GoogleMap";
import { useEditAddresss } from "../../hooks/api/Post";
import { processAddAddress } from "../../lib/utils";

const EditLocationModal = ({
  setIsModal,
  editIndex,
  isLocationAdded,
  therapyTypesOption,
  setUpdate,
}) => {
  const [form, setForm] = useState({ address: "", specialty: [] });

  const [errors, setErrors] = useState({ address: "", specialty: [] });

  const [isSelectField, setIsSelectField] = useState(false);

  const validateForm = () => {
    const newErrors = { address: "", specialty: [] };
    let valid = true;

    if (!form.address || Object.keys(form.address).length === 0) {
      newErrors.address = "Address is required";
      valid = false;
    }

    if (form.specialty.length === 0) {
      newErrors.specialty = "Specialty is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors({ address: "", specialty: [] });
  };

  useEffect(() => {
    if (editIndex !== null && isLocationAdded[editIndex]) {
      setForm(() => ({
        address: isLocationAdded[editIndex],
        specialty: isLocationAdded[editIndex].services,
      }));
    }
  }, [editIndex]);

  const onLocationSelect = (data) => {
    setForm((prev) => ({
      ...prev,
      address: data,
    }));
    setErrors({ address: "", specialty: [] });
  };

  const { loading: addressLoader, postData: postEditAddress } =
    useEditAddresss();

  const handleEditAddress = () => {
    if (!validateForm()) return;

    let location = {
      ...form?.address,
      _id: isLocationAdded[editIndex]?._id,
      services: form?.specialty.map((item) => item?.id),
    };

    postEditAddress(
      "/provider/update-address",
      location,
      processAddAddress,
      setIsModal,
      setUpdate
    );
  };

  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-10 z-50 flex items-center justify-center p-1">
      <div
        className={`bg-white  overflow-y-auto overflow-x-hidden  rounded-[18px] shadow-md p-6 
       ${isSelectField ? "lg:h-[644px]" : "lg:h-[460px]"} h-[482px]`}
      >
        <div className="flex  justify-between items-center pb-4 border-b-[1px] border-b-gray-200">
          <p className="text-[24px] font-semibold">Edit Location</p>
          <span
            onClick={() => setIsModal(false)}
            className="cursor-pointer border-[1px] border-gray-300 rounded-sm p-[2px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 font-light text-gray-500 hover:text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05A1 1 0 015.05 3.636L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        <div className="space-y-3 mt-4">
          <div className="mt-3">
            <div className="w-[421px] h-[194px] mt-3 rounded-md overflow-hidden">
              <GoogleMapComponent
                onLocationSelect={onLocationSelect}
                editAddress={form.address}
              />
            </div>
          </div>
          {errors.address && (
            <p className="text-red-600 text-[12px] ">{errors.address}</p>
          )}
          <div>
            <SelectableField
              placeholder="Select Specialties"
              label="Specialty Services"
              options={therapyTypesOption}
              value={form.specialty}
              onChange={(value) => handleChange("specialty", value)}
              error={errors.specialty}
              isMulti={true}
              setIsSelectField={setIsSelectField}
            />
          </div>

          <div className={`${isSelectField ? "pt-44" : "pt-0"}`}>
            <Button
              text="Add Location"
              onClick={handleEditAddress}
              loading={addressLoader}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLocationModal;

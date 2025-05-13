/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { MapImg } from "../../assets/export";
import InputField from "./InputField";
import SelectableField from "./SelectableField";
import Button from "../app/landingPage/Inputs/Button";

const AddNewLocationModal = ({
  setIsModal,
  setIsLocationAdded,
  editIndex,
  setEditIndex,
  isLocationAdded,
}) => {
  const ServiceSpecialtyOptions = [
    "Chiropractic Care",
    "Massage Therapy Care",
    "Acupuncture Care",
    "Diet/Wellness Services",
    "Adjunctive Therapy Services",
  ];

  const [form, setForm] = useState({ address: "", specialty: "" });
  const [errors, setErrors] = useState({ address: "", specialty: "" });

  const validateForm = () => {
    const newErrors = { address: "", specialty: "" };
    let valid = true;

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
      valid = false;
    }

    if (!form.specialty.trim()) {
      newErrors.specialty = "Specialty is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleAddLocation = () => {
    if (!validateForm()) return;

    if (editIndex !== null) {
      // Edit mode
      setIsLocationAdded((prev) => {
        const updated = [...prev];
        updated[editIndex] = form;
        return updated;
      });
    } else {
      // Add mode
      setIsLocationAdded((prev) => [...prev, form]);
    }

    setEditIndex(null);
    setForm({ address: "", specialty: "" });
    setIsModal(false);
  };

  useEffect(() => {
    if (editIndex !== null && isLocationAdded[editIndex]) {
      setForm(isLocationAdded[editIndex]);
    }
  }, [editIndex]);

  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-10 z-50 flex items-center justify-center p-1">
      <div
        className="bg-white overflow-y-auto overflow-x-hidden  rounded-[18px] shadow-md p-6 
      lg:h-[466px] h-[482px]"
      >
        <div className="flex  justify-between items-center pb-4 border-b-[1px] border-b-gray-200">
          <p className="text-[24px] font-semibold">Add New Location</p>
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
          <InputField
            placeholder="Enter your street, city, state, zip?"
            text="Primary Clinic Location (Required)"
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
            error={errors.address}
            touched={errors.address}
          />
          <div className="mt-3">
            <img src={MapImg} className="w-[421px] h-[124px] " alt="" />
          </div>
          <div>
            <SelectableField
              placeholder="Select"
              label="List Specialty Services"
              options={ServiceSpecialtyOptions}
              value={form.specialty}
              onChange={(value) => handleChange("specialty", value)}
              error={errors.specialty}
            />
          </div>
          <div>
            <Button text="Add Location" onClick={handleAddLocation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewLocationModal;

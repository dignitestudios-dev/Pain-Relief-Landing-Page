import { useEffect, useState } from "react";
import { useTherapyType } from "../../../../hooks/api/Get";
import { DropDownDark } from "../../landingPage/Inputs/DropDown";
import Button from "../../landingPage/Inputs/Button";
import GoogleMapComponent from "../../../global/GoogleMap";

const BookAppointmentFilter = ({ getproviderData, filterData }) => {
  const [services, setServices] = useState([]);
  const [address, setAddress] = useState({});

  const [distance, setDistance] = useState(10);

  // useEffect(() => {
  //   setAddress({
  //     location: { coordinates: [filterData?.latitude, filterData?.longitude] },
  //   });
  // }, [filterData]);

  const handleFetchProvider = () => {
    getproviderData(distance, address?.location, services);
  };

  const { data: therapyTypes, loading: loader } =
    useTherapyType(`/booking/services`);

  const handleSelect = (option) => {
    setServices((prev) => {
      const exists = prev.some((item) => item.id === option._id);

      if (exists) {
        return prev.filter((item) => item.id !== option._id);
      } else {
        return [...prev, { name: option.name, id: option._id }];
      }
    });
  };

  const handleDistanceChange = (e) => {
    const value = Number(e.target.value);
    setDistance(value);
  };

  const getSliderBackground = (value) => {
    const percentage = (value / 100) * 100;
    return `linear-gradient(to right, #29ABE2 0%, #63CFAC ${percentage}%, #d3d3d3 ${percentage}%, #d3d3d3 100%)`;
  };

  const handleClear = () => {
    setServices([]);
    setAddress({});
    setDistance(10);
    getproviderData(null, null, null);
    // setRadius([]);
  };

  const onLocationSelect = (data) => {
    setAddress(data);
  };

  return (
    <div className="bg-white h-full md:h-[518px] p-4 rounded-[8px] w-full md:w-auto">
      <h2 className="text-[24px] font-[600] border-b border-b-[#8B8B8B5E] pb-3">
        Filter
      </h2>
      <div className="space-y-3 my-4">
        <DropDownDark
          label={"Specialization"}
          placeholder={"Select"}
          options={therapyTypes}
          value={services}
          onChange={handleSelect}
          loader={loader}
        />

        <div className="mt-3">
          <div className="w-[300px] h-[194px] mt-3 rounded-md overflow-hidden">
            <label className="text-[12px] text-[#121516] font-medium">
              Primary Clinic Location
            </label>
            <GoogleMapComponent
              onLocationSelect={onLocationSelect}
              editAddress={address}
              isEditMode={false}
              distance={distance}
              showRadius={true}
            />
          </div>
        </div>

        <div className="w-full">
          <label className="font-semibold mb-1 block text-[#29ABE2]">
            {distance} ML
          </label>
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            value={distance}
            onChange={handleDistanceChange}
            className="range-input"
            style={{
              background: getSliderBackground(distance),
            }}
          />
        </div>

        {/* <DropDownDark
          label="Distance From Zip"
          options={radiusOptions}
          value={radius}
          onChange={handleDistance}
          placeholder={"Select Miles"}
        /> */}
        <div className="flex justify-center items-center gap-4 text-[#565656] font-[500] ">
          <button
            onClick={() => handleClear()}
            className="bg-[#E0E0E0] rounded-[8px] h-[49px] w-[150px]"
          >
            Clear
          </button>
          <div className="w-[150px]">
            <Button
              text={"Apply"}
              onClick={handleFetchProvider}
              loading={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentFilter;

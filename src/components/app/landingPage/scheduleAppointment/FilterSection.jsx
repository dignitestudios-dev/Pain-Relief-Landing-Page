import { useEffect, useState } from "react";
import { InputsDark } from "../Inputs/Inputs";
import { DropDownDark } from "../Inputs/DropDown";
import Button from "../Inputs/Button";
import {
  useDashboardProvider,
  useTherapyType,
} from "../../../../hooks/api/Get";

const FilterSection = ({ getproviderData }) => {
  const [isTrue, setIsTrue] = useState(false);
  const [update, setUpdate] = useState("");
  const [services, setServices] = useState([]);
  const [radius, setRadius] = useState([]);

  const radiusOptions = [
    { _id: 10, name: "10" },
    { _id: 20, name: "20" },
    { _id: 30, name: "30" },
    { _id: 40, name: "40" },
    { _id: 50, name: "50" },
  ];

  const [filters, setFilter] = useState({
    zipCode: "",
    therapistName: "",
    practiceName: "",
  });

  const { data, loading } = useDashboardProvider(
    `/provider/dashboard`,
    { ...filters, radius: radius.map((item) => item.id) },
    services,
    1,
    update,
    isTrue
  );

  useEffect(() => {
    getproviderData(data);
  }, [data]);

  const handleFetchProvider = () => {
    setIsTrue(true);
    setUpdate((prev) => !prev);
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
  const handleDistance = (option) => {
    setRadius((prev) => {
      const exists = prev.some((item) => item.id === option._id);

      if (exists) {
        return prev.filter((item) => item.id !== option._id);
      } else {
        return [{ name: option.name, id: option._id }];
      }
    });
  };
  const handleClear = () => {
    setFilter({
      zipCode: "",
      therapistName: "",
      practiceName: "",
    });

    setServices([]);
    setRadius([]);
    setUpdate((prev) => !prev);
  };

  return (
    <div className="bg-white h-full md:h-[618px] p-4 rounded-[8px] w-full md:w-auto">
      <h2 className="text-[24px] font-[600] border-b border-b-[#8B8B8B5E] pb-3">
        Filter
      </h2>
      <div className="space-y-3 my-4">
        <InputsDark
          label={"Therapist Last Name "}
          type={"text"}
          placeholder={"Enter therapist name"}
          value={filters?.therapistName}
          onChange={(e) =>
            setFilter((prev) => ({
              ...prev,
              therapistName: e.target.value,
            }))
          }
        />
        <InputsDark
          label={"Practice Name "}
          type={"text"}
          placeholder={"Enter practice name"}
          value={filters?.practiceName}
          onChange={(e) =>
            setFilter((prev) => ({
              ...prev,
              practiceName: e.target.value,
            }))
          }
        />
        <DropDownDark
          label={"Therapy Type"}
          placeholder={"Select "}
          options={therapyTypes}
          value={services}
          onChange={handleSelect}
          loader={loader}
        />
        <InputsDark
          label={"Zip Code "}
          type={"text"}
          placeholder={"Enter zip Code"}
          value={filters?.zipCode}
          onChange={(e) =>
            setFilter((prev) => ({
              ...prev,
              zipCode: e.target.value,
            }))
          }
        />
        <DropDownDark
          label="Distance From Zip"
          options={radiusOptions}
          value={radius}
          onChange={handleDistance}
          placeholder={"Select Miles"}
        />
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
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

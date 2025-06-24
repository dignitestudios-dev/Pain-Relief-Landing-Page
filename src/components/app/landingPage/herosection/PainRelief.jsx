import React, { useContext, useEffect, useState } from "react";
import { InputsDark } from "../Inputs/Inputs";
import { DropDownDark } from "../Inputs/DropDown";
import Button from "../Inputs/Button";
import Carousel from "./Carousel";
import {
  useDashboardProvider,
  useTherapyType,
} from "../../../../hooks/api/Get";
import { AppContext } from "../../../../context/AppContext";

const PainRelief = () => {
  const [update, setUpdate] = useState("");
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [radius, setRadius] = useState([{ id: 10, name: "10" }]);
  const { latitude, longitude } = useContext(AppContext);

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
    longitude: "",
    latitude: "",
  });

  useEffect(() => {
    if (latitude && longitude) {
      setFilter((prev) => ({
        ...prev,
        longitude,
        latitude,
      }));
      setUpdate((prev) => !prev);
    }
  }, [latitude, longitude]);

  const { data, loading, pagination } = useDashboardProvider(
    `/provider/dashboard`,
    { ...filters, radius: radius?.map((item) => item?.id) },
    services,
    currentPage,
    update,
    true
  );

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
  return (
    <div className="bg-[#EAF7FB] flex flex-col items-center justify-center  lg:h-[740px] h-auto mt-10 ">
      <div className="w-[90%] mt-4">
        <div>
          <h2 className="xl:text-[50px] lg:text-[45px] md:text[35px] text-[22px]  font-[600] text-center ">
            Search for Pain Relief Professionals
          </h2>
          <p className="text-center xl:text-[18px] lg:text-[16px] md:text-[14px] text-[14px] font-[400] text-[#565656] ">
            Explore certified professionals near you, specializing in various
            providers treatments.
          </p>
        </div>
        <div className="grid xl:grid-cols-6  lg:grid-cols-4 md:grid-cols-3 grid-cols-1 items-center gap-4 mt-10  ">
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
                latitude: "",
                longitude: "",
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
          <div className="mt-7 w-[164px] ">
            <Button
              text={"Find Therapist"}
              onClick={() => setUpdate((prev) => !prev)}
            />
          </div>
        </div>
      </div>
      <Carousel
        providerData={data}
        loading={loading}
        pagination={pagination}
        currentPage={pagination?.currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PainRelief;

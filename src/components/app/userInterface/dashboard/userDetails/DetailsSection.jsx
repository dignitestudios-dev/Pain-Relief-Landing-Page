import { LocationDark, MapImg, ProfileImg } from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";
import { useNavigate } from "react-router";

const DetailsSection = ({ setCancelModal, description }) => {
  const navigate = useNavigate();
  const listData = [
    {
      li: "What can I help you with today?",
      para: "I would like to schedule appointment with Chiropractor",
    },
    {
      li: "Are you experiencing muscle or joint pain in the following areas?",
      para: "Neck/Shoulders",
    },
    {
      li: "Have you recently had surgery in this area?",
      para: "Yes",
    },
    {
      li: "Is your pain related to an automobile accident?",
      para: "No",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center relative bottom-28 px-2 sm:px-4 md:px-6">
      <div className="grid w-full max-w-[1400px] gap-6 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-1">
        {/* Left Section */}
        <div className="bg-white rounded-[8px] p-4 sm:p-6 xl:col-span-4 lg:col-span-4">
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-[600] mb-3">
            Appointment Summary
          </h2>
          <ul className="list-disc pl-5">
            {listData.map((item, index) => (
              <li
                key={index}
                className="text-[14px] sm:text-[16px] border-b pb-4 font-[600] mb-2"
              >
                {item.li}
                <p className="text-[#565656] font-[500] text-[14px] sm:text-[16px]">
                  {item.para}
                </p>
              </li>
            ))}
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-[600] mb-3 mt-4">
            Clinic Location
          </h2>
          <img
            src={MapImg}
            className="h-auto w-full rounded-md max-h-[200px] object-cover"
            alt="Map"
          />

          <div className="flex flex-wrap justify-between border-b border-[#DFDFDF] pb-4 mt-3 text-sm sm:text-base">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <img
                src={LocationDark}
                className="w-[17px] h-[17px]"
                alt="Location"
              />
              <p>Dallas, TX – 802 PainEase Plaza</p>
            </div>
            <p className="mt-2 sm:mt-0">20 Miles Away</p>
          </div>

          <div className="mt-4 border-b pb-6">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-[600] mb-4">
              Network Professional Detail
            </h2>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="p-[2px] bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[42px] h-[42px] rounded-full">
                  <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                    <img
                      src={ProfileImg}
                      className="w-[39px] h-[39px] rounded-full object-cover"
                      alt="Profile"
                    />
                  </div>
                </div>
                <h2 className="text-[14px] font-[600]">John Doe</h2>
              </div>
              <div>
                <p className="text-[12px] text-[#00000080]">Email</p>
                <p className="text-[14px] font-[500]">john.doe@gmail</p>
              </div>
              <div>
                <p className="text-[12px] text-[#00000080]">Phone Number</p>
                <p className="text-[14px] font-[500]">+000 0000 00</p>
              </div>
              <div className="w-full sm:w-[150px]">
                <Button
                  text="View Profile"
                  onClick={() =>
                    navigate("/user/network-professional-detail")
                  }
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-[600] mb-4">
              Appointment For
            </h2>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="p-[2px] bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[42px] h-[42px] rounded-full">
                  <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                    <img
                      src={ProfileImg}
                      className="w-[39px] h-[39px] rounded-full object-cover"
                      alt="Profile"
                    />
                  </div>
                </div>
                <h2 className="text-[14px] font-[600]">John Doe</h2>
              </div>
              <div>
                <p className="text-[12px] text-[#00000080]">Email</p>
                <p className="text-[14px] font-[500]">john.doe@gmail</p>
              </div>
              <div>
                <p className="text-[12px] text-[#00000080]">Phone Number</p>
                <p className="text-[14px] font-[500]">+000 0000 00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white h-[400px] rounded-[8px] p-4 sm:p-6 w-full xl:col-span-2 lg:col-span-4">
          <div className="space-y-4 border-b border-[#1010101A] pb-4">
            <button className="w-full h-[44px] rounded-[4px] bg-[#17C3511C] text-[#17C351] text-[16px] font-[500]">
              Approved
            </button>
          </div>

          <div className="mt-4">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-[500] mb-2">
              Appointment Detail
            </h2>
            {[
              ["ID", "A1512121"],
              ["Date", "12/04/2024"],
              ["Time", "08:00pm"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between border-b border-[#DFDFDF] pb-2 text-sm sm:text-base"
              >
                <p className="text-[#00000080]">{label}</p>
                <p className="font-[500]">{value}</p>
              </div>
            ))}
          </div>
          {description ? (
            <div>
              <h2 className="text-[20px] font-[500] mt-3 ">Cancelation Reason</h2>
              <p>{description}</p>
            </div>
          ) : (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setCancelModal(true)}
                className="w-full h-[44px] border text-red-500 border-[#FF6767] rounded-[4px] text-[16px] font-[500]"
              >
                Cancel Appointments
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-[228px] mt-8">
        <Button
          text={"Return to Dashboard"}
          onClick={() => navigate("/user/dashboard")}
        />
      </div>
    </div>
  );
};

export default DetailsSection;

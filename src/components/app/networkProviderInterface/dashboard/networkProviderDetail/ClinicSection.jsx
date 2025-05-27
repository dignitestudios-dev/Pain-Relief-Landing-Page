import { LocationDark, MapImg, ProfileImg } from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";
import { useNavigate } from "react-router";

const ClinicSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center relative bottom-28">
        <div className="grid w-[90%] gap-10 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-1">
          {/* Left Section */}
          <div className="bg-white rounded-[8px] p-6 xl:col-span-4 lg:col-span-4 ">
            <h2 className="text-[24px] font-[600] mb-3">Clinic Location</h2>
            <img src={MapImg} className="h-[174px] w-full rounded-md" alt="" />

            <div className="flex justify-between border-b border-[#DFDFDF] pb-6 mt-3">
              <div className="flex items-center gap-2">
                <img src={LocationDark} className="w-[17px] h-[17px]" alt="" />
                <p>Dallas, TX – 802 PainEase Plaza</p>
              </div>
              <p>20 Miles Away</p>
            </div>

            <div className="mt-4">
              <h2 className="text-[24px] font-[600] mb-4">
                Network Professional Detail
              </h2>
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-4">
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
                  <p className="text-[14px] text-[#00000080]">Email</p>
                  <p className="text-[14px] font-[500]">john.doe@gmail</p>
                </div>
                <div>
                  <p className="text-[14px] text-[#00000080]">Phone Number</p>
                  <p className="text-[14px] font-[500]">+000 0000 00</p>
                </div>
                <div className="w-[150px]">
                  <Button
                    text="View Profile"
                    onClick={() =>
                      navigate("/provider/view-profile-netwrok-provider")
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white rounded-[8px] p-6 w-full xl:col-span-2 lg:col-span-4   ">
            <div className="space-y-4 border-b border-[#1010101A] pb-5">
              <button className="w-full h-[44px] rounded-[4px] bg-[#17C3511C] text-[#17C351] text-[16px] font-[500]">
                Approved
              </button>
              <button className="w-full h-[44px] rounded-[4px] bg-[#ECECEC] text-[#0F0F11] text-[16px] font-[500]">
                Mark as Completed
              </button>
            </div>

            <div className="mt-4">
              <h2 className="text-[24px] font-[500] mb-2">
                Appointment Detail
              </h2>
              {[
                ["ID", "A1512121"],
                ["Date", "12/04/2024"],
                ["Time", "08:00pm"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between border-b border-[#DFDFDF] pb-3"
                >
                  <p className="text-[#00000080]">{label}</p>
                  <p className="font-[500]">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <button className="w-full h-[44px] border border-[#FF6767] rounded-[4px] text-[16px] font-[500]">
                Cancel Appointments
              </button>
            </div>
          </div>
        </div>
        <div className="w-[228px] mt-8">
          <Button
            text={"Return to Dashboard"}
            onClick={() => navigate("/provider/dashboard")}
          />
        </div>
      </div>
    </>
  );
};

export default ClinicSection;

import { useNavigate } from "react-router";
import { LocationDark, ProfileImg } from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";
import GoogleMapComponent from "../../../../global/GoogleMap";
import { getDateFormat } from "../../../../../lib/helpers";

const AppointmentQuestionSection = ({ AppointmentData, handleModal }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center relative bottom-28 px-2 sm:px-4 md:px-6">
      <div className="grid w-full max-w-[1400px] gap-6 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-1">
        {/* Left Section */}
        <div className="bg-white rounded-[8px] p-4 sm:p-6 xl:col-span-4 lg:col-span-4">
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-[600] mb-3">
            Appointment Summary
          </h2>
          {!AppointmentData?.isPainReliefCoach && (
            <ul className="list-disc pl-5">
              {AppointmentData?.question?.response
                ?.filter(
                  (item) =>
                    item?.question !== null &&
                    item?.answer !== "user" &&
                    item?.answer !== "provider"
                )
                ?.map((item, index) => (
                  <li
                    key={index}
                    className="text-[14px] sm:text-[16px] border-b pb-4 font-[600] mb-2"
                  >
                    {item.question}
                    <p className="text-[#565656] font-[500] text-[14px] sm:text-[16px]">
                      {item.answer || "No answer provided"}
                    </p>
                  </li>
                ))}
            </ul>
          )}

          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-[600] mb-3 mt-4">
            Clinic Location
          </h2>
          {/* <img
            src={MapImg}
            className="h-auto w-full rounded-md max-h-[200px] object-cover"
            alt="Map"
          /> */}

          <div className=" h-[254px] mt-3 rounded-md overflow-hidden">
            <GoogleMapComponent
              onLocationSelect={() => {}}
              editAddress={AppointmentData.clinicLocation}
              isEditMode={false}
              isDisabled={true}
            />
          </div>

          <div className="flex flex-wrap justify-between border-b border-[#DFDFDF] pb-4 mt-3 text-sm sm:text-base">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <img
                src={LocationDark}
                className="w-[17px] h-[17px]"
                alt="Location"
              />
              <p>{AppointmentData?.clinicLocation?.clinicAddress}</p>
            </div>
            <p className="mt-2 sm:mt-0">{}</p>
          </div>

          {/* <div className="mt-4 border-b pb-6">
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
                  onClick={() => navigate("/user/network-professional-detail")}
                />
              </div>
            </div>
          </div> */}

          <div className="mt-4">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-[600] mb-4">
              Appointment For
            </h2>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="p-[2px] bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[42px] h-[42px] rounded-full">
                  <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                    <img
                      src={
                        AppointmentData?.familyMember
                          ? AppointmentData?.familyMember?.profilePicture
                          : AppointmentData?.user?.profilePicture
                      }
                      className="w-[39px] h-[39px] rounded-full object-cover"
                      alt="Profile"
                    />
                  </div>
                </div>
                <h2 className="text-[14px] font-[600]">
                  {AppointmentData?.familyMember
                    ? AppointmentData?.familyMember?.name
                    : AppointmentData?.user?.firstName}{" "}
                  {AppointmentData?.familyMember === null &&
                    AppointmentData?.user?.lastName}
                </h2>
              </div>
              <div>
                <p className="text-[12px] text-[#00000080]">Email</p>
                <p className="text-[14px] font-[500]">
                  {AppointmentData?.user?.email}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#00000080]">Phone Number</p>
                <p className="text-[14px] font-[500]">
                  {AppointmentData?.user?.phone}
                </p>
              </div>
              {/* <div className="w-full sm:w-[150px]">
                <Button
                  text="View Profile"
                  onClick={() => navigate("/user/network-professional-detail")}
                />
              </div> */}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white min-h-[320px] max-h-[450px] w-full rounded-lg overflow-auto p-4 sm:p-6 xl:col-span-2 lg:col-span-4">
          {AppointmentData?.status === "Rejected" ? (
            <div className="space-y-4 border-b border-[#1010101A] pb-4">
              <div className="w-full flex justify-center items-center h-[44px] rounded-[4px] bg-[#FF67671C] text-[#FF6767] text-center text-[16px] font-[500]">
                Rejected
              </div>
            </div>
          ) : AppointmentData.status === "Cancelled" ? (
            <div className="space-y-4 border-b border-[#1010101A] pb-4">
              <div className="w-full flex justify-center items-center h-[44px] rounded-[4px] bg-[#FF67671C] text-[#FF6767] text-center text-[16px] font-[500]">
                Cancelled
              </div>
            </div>
          ) : AppointmentData?.status === "Approved" ? (
            <div className="space-y-4 border-b border-[#1010101A] pb-4">
              <div className="w-full flex justify-center items-center h-[44px] rounded-[4px] bg-[#17C35133] text-[#17C351] text-center text-[16px] font-[500]">
                Approved
              </div>
              <div className="w-full ">
                <Button
                  text="Mark As Completed"
                  type="button"
                  onClick={() => handleModal("Completed")}
                />
              </div>
            </div>
          ) : AppointmentData?.status === "Completed" ? (
            <div className="w-full flex justify-center items-center h-[44px] rounded-[4px] bg-[#17C35133] text-[#17C351] text-center text-[16px] font-[500]">
              Completed
            </div>
          ) : AppointmentData?.status === "Suggested" ? (
            <div className="w-full flex justify-center items-center h-[44px] rounded-[4px] bg-[#7991DB33] text-[#7991DB] text-center text-[16px] font-[500]">
              Suggested Time
            </div>
          ) : (
            <>
              <div className="w-full grid grid-cols-2 gap-2 ">
                <button
                  onClick={() => handleModal("Rejected")}
                  className="w-full h-[44px] rounded-[4px] bg-red-400 text-white text-[16px] font-[500]"
                >
                  Reject Request
                </button>
                <button
                  onClick={() => handleModal("Approved")}
                  className="w-full h-[44px] rounded-[4px] bg-green-500 text-white text-[16px] font-[500]"
                >
                  Approve Request
                </button>
              </div>
              <div className=" border-b border-[#1010101A] py-4">
                <button
                  onClick={() => handleModal("Suggested")}
                  className="w-full h-[44px] rounded-[4px] bg-[#1527ab98] text-white text-[16px] font-[500]"
                >
                  Suggest A Different Time
                </button>
              </div>
            </>
          )}
          {/* <div className="space-y-4 border-b border-[#1010101A] pb-4">
            <button className="w-full h-[44px] rounded-[4px] bg-[#17C3511C] text-[#17C351] text-[16px] font-[500]">
              Approved
            </button>
          </div> */}

          <div className="mt-4">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-[600] mb-2">
              Appointment Detail
            </h2>
            {[
              ["ID", AppointmentData?.shortCode ?? "-"],
              ["Date", getDateFormat(AppointmentData?.appointmentDate)],
              ["Time", AppointmentData?.appointmentTime],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between border-b border-[#DFDFDF] py-2 text-sm sm:text-base"
              >
                <p className="text-[#00000080]">{label}</p>
                <p className="font-[500]">{value}</p>
              </div>
            ))}
          </div>
          {AppointmentData.status === "Rejected" ? (
            <div>
              <h2 className="text-[20px] font-[500] mt-3 ">Rejection Reason</h2>
              <p>{AppointmentData?.rejectedReason}</p>
            </div>
          ) : AppointmentData.status === "Cancelled" ? (
            <div>
              <h2 className="text-[20px] font-[500] mt-3 ">Cancelled Reason</h2>
              <p>{AppointmentData?.rejectedReason}</p>
            </div>
          ) : AppointmentData.status === "Approved" ? (
            <>
              <button
                onClick={() => handleModal("Rejected")}
                className="w-full h-[44px] rounded-[4px] border-red-400 border-[1px] text-red-400 mt-4 text-[16px] font-[500]"
              >
                Cancel Appointment
              </button>
            </>
          ) : AppointmentData.status === "Suggested" ? (
            <div>
              <h2 className="text-[20px] font-[500] mt-3 ">Suggested Time</h2>
              <p>{AppointmentData?.suggestedReason}</p>
              <p className="pt-4 bg-gradient-to-r to-[#29ABE2] from-[#63CFAC] bg-clip-text text-transparent text-[18px] font-semibold">
                {getDateFormat(
                  AppointmentData?.suggestedDate
                    ? AppointmentData?.suggestedDate
                    : AppointmentData?.appointmentDate
                )}{" "}
                - {AppointmentData?.suggestedTime}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="w-full max-w-[228px] mt-8">
        <Button
          text={"Return to Dashboard"}
          onClick={() => navigate("/provider/dashboard")}
        />
      </div>
    </div>
  );
};

export default AppointmentQuestionSection;

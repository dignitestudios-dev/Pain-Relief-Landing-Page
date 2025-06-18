import { CiFilter } from "react-icons/ci";
import { CancelIcon, ProfileImg } from "../../../../../assets/export";
import Pagination from "../../../../global/Pagination";

import Calender from "../../../../global/DatePicker";
import Button from "../../../landingPage/Inputs/Button";
import { useNavigate } from "react-router";

const AppoitmentTable = ({
  filterDate,
  filters,
  setIsOpen,
  setFilters,
  setFilterDate,
  isOpen,
  loading,
  pagination,
  data,
}) => {
  const navigate = useNavigate();
  const handleFilter = (status) => {
    let newStatus;
    if (status === "All") {
      newStatus = "";
    } else {
      newStatus = status;
    }

    setFilters((prev) => ({
      ...prev,
      status: newStatus,
      page: 1,
    }));
  };

  const handleStartDateChange = (date) => {
    setFilterDate((prev) => ({
      ...prev,
      startDate: new Date(date).toISOString().split("T")[0],
    }));
  };

  const handleEndDateChange = (date) => {
    setFilterDate((prev) => ({
      ...prev,
      endDate: new Date(date).toISOString().split("T")[0],
    }));
  };

  const handlePageChange = (page) => {
    setFilters((prev) => ({
      ...prev,
      page,
    }));
  };

  const handleApplyFilter = () => {
    setFilters((prev) => ({
      ...prev,
      startDate: filterDate?.startDate,
      endDate: filterDate?.endDate,
      page: 1,
    }));
  };

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClearFilters = () => {
    setFilters({ startDate: "", endDate: "" });
    setFilterDate({ startDate: "", endDate: "" });
    toggleCalendar();
  };

  return (
    <div className=" flex justify-center my-6">
      <div className="w-[90%]  b min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-[32px] font-[600]">Appointments</h1>
          <div className="flex gap-2 mt-4 md:mt-0 relative">
            <input
              type="text"
              placeholder="Search"
              className="border px-4 py-2 rounded-md shadow-sm w-full md:w-64"
            />
            <div
              onClick={toggleCalendar}
              className="bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] p-2 rounded-[12px] h-[49px] w-[49px] flex items-center justify-center"
            >
              <CiFilter size={24} className="text-white" />
            </div>
            {isOpen && (
              <div className="bg-white shadow-md rounded-[12px] w-[360px] h-[220px] absolute top-16 right-0">
                <div className="flex justify-between mx-4 mb-4 pt-4 pb-2 border-b border-b-gray-200">
                  <div className="text-[16px] font-semibold">Filter</div>
                  <div onClick={toggleCalendar}>
                    <img
                      src={CancelIcon}
                      className="w-[22px] h-[22px] cursor-pointer "
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex  items-center gap-2 px-4">
                  <Calender
                    endDate={false}
                    startDate={filterDate.startDate}
                    setStartDate={handleStartDateChange}
                    text={"DD/MM/YY"}
                    isStyle={true}
                    label={"Start Date"}
                  />
                  <Calender
                    endDate={true}
                    startDate={filterDate.endDate}
                    setStartDate={handleEndDateChange}
                    text={"DD/MM/YY"}
                    isStyle={true}
                    label={"End Date"}
                  />
                </div>
                <div className="flex px-4 py-4 gap-2">
                  <div className="w-full">
                    <Button
                      text="Apply"
                      onClick={() => {
                        handleApplyFilter();
                        toggleCalendar();
                      }}
                      loading={""}
                      type="button"
                    />
                  </div>
                  <div className="w-full">
                    <button
                      type="button"
                      onClick={handleClearFilters}
                      className="w-full h-[49px] rounded-[8px] bg-[#E0E0E0] text-[#565656] "
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap gap-4 p-4">
              {[
                "All",
                "Pending",
                "Approved",
                "Suggested",
                "Rejected",
                "Completed",
                "Cancelled",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleFilter(tab)}
                  className={`text-sm font-medium ${
                    filters?.status === tab
                      ? "text-cyan-600 font-semibold"
                      : "text-gray-600 hover:text-cyan-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <table className="min-w-full text-sm text-left">
            <thead className="bg-cyan-50 text-gray-700">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Appointment Date</th>
                <th className="px-4 py-3">Appointment Time</th>
                <th className="px-4 py-3">Booked For</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            {loading ? (
              <tbody>
                {Array.from({ length: 4 }).map((_, i) => (
                  <tr
                    key={i}
                    className="border-t border-gray-100 animate-pulse"
                  >
                    <td className="px-4 py-3">
                      <div className="h-4 w-4 bg-gray-200 rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-gray-200 w-[42px] h-[42px]" />
                        <div className="h-4 w-24 bg-gray-200 rounded" />
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-24 bg-gray-200 rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-gray-200 w-[42px] h-[42px]" />
                        <div className="h-4 w-24 bg-gray-200 rounded" />
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-20 bg-gray-200 rounded" />
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                {data?.map((a, index) => (
                  <tr
                    key={a._id || index}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">{index + 1}</td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-4">
                        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[42px] h-[42px]">
                          <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                            <img
                              src={a.user?.profilePicture || ProfileImg}
                              className="w-[39px] h-[39px] rounded-full object-cover"
                              alt="User"
                            />
                          </div>
                        </div>
                        <h2 className="text-[14px] font-[400] ">
                          {a.user?.firstName} {a.user?.lastName}
                        </h2>
                      </div>
                    </td>

                    <td className="px-4 py-3">
                      {new Date(a.appointmentDate).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </td>

                    <td className="px-4 py-3">{a.appointmentTime}</td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-4">
                        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[42px] h-[42px]">
                          <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                            <img
                              src={
                                a.familyMember !== null
                                  ? a.familyMember.profilePicture
                                  : ProfileImg
                              }
                              className="w-[39px] h-[39px] rounded-full object-cover"
                              alt="Provider"
                            />
                          </div>
                        </div>
                        <h2 className="text-[14px] font-[400] ">
                          {a.familyMember !== null
                            ? a.familyMember.name
                            : "Self"}
                        </h2>
                      </div>
                    </td>

                    <td className="px-4 py-3">
                      <span className="capitalize text-sm">{a.status}</span>
                    </td>

                    <td
                      onClick={() =>
                        navigate(`/user/user-details/${a?._id}`, { state: a })
                      }
                      className="px-4 py-3 text-black underline font-medium cursor-pointer"
                    >
                      View Detail
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
        <div className="flex justify-end">
          <Pagination
            currentPage={pagination?.currentPage}
            totalPages={pagination?.totalPages}
            onPageChange={handlePageChange}
            setCurrentPage={setFilters.page}
          />
        </div>
      </div>
    </div>
  );
};
export default AppoitmentTable;

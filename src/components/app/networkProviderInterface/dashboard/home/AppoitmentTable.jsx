import React from "react";
import { CiFilter } from "react-icons/ci";
import { ProfileImg } from "../../../../../assets/export";
import Pagination from "../../../../global/Pagination";
import { useNavigate } from "react-router";

const appointments = [
  {
    id: 1,
    name: "Mike Smith",
    date: "16-January-2025",
    time: "10:00 AM",
    specialty: "Chiropractor",
    status: "Pending",
  },
  {
    id: 1,
    name: "John Alix",
    date: "16-January-2025",
    time: "10:00 AM",
    specialty: "Massage Therapy",
    status: "Pending",
  },
  {
    id: 2,
    name: "David Smith",
    date: "16-January-2025",
    time: "10:00 AM",
    specialty: "Acupuncture",
    status: "Approved",
  },
  {
    id: 3,
    name: "Olivia James",
    date: "16-January-2025",
    time: "10:00 AM",
    specialty: "Imaging",
    status: "Approved",
  },
  {
    id: 4,
    name: "Mike Smith",
    date: "16-January-2025",
    time: "10:00 AM",
    specialty: "Pain Relief Coach",
    status: "Completed",
  },
  {
    id: 5,
    name: "John Alix",
    date: "16-January-2025",
    time: "10:00 AM",
    specialty: "Chiropractor",
    status: "Rejected",
  },
  {
    id: 6,
    name: "David Smith",
    date: "16-January-2025",
    time: "10:00 AM",
    specialty: "Chiropractor",
    status: "Cancelled",
  },
];

const AppoitmentTable = () => {
  const navigate =useNavigate()
  return (
    <div className=" flex justify-center my-6">
      <div className="w-[90%]  b min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-[32px] font-[600]">Appointments</h1>
          <div className="flex gap-2 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search"
              className="border px-4 py-2 rounded-md shadow-sm w-full md:w-64"
            />
            <div className="bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] p-2 rounded-[12px] h-[49px] w-[49px] flex items-center justify-center">
              <CiFilter size={24} className="text-white" />
            </div>
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
                  className="text-sm text-gray-600 hover:text-cyan-600 font-medium"
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
                <th className="px-4 py-3">Specialty</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{a.id}</td>
                  <td className="px-4 py-3">
                    <div className="p-[2px] rounded-full bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[42px] h-[42px]">
                      <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                        <img
                          src={ProfileImg}
                          className="w-[39px] h-[39px] rounded-full object-cover"
                          alt="Profile"
                        />
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3">{a.date}</td>
                  <td className="px-4 py-3">{a.time}</td>
                  <td className="px-4 py-3">{a.specialty}</td>
                  <td className="px-4 py-3">
                    <span className="capitalize text-sm ">{a.status}</span>
                  </td>
                  <td onClick={()=>navigate('/network/network-provider-detail')} className="px-4 py-3 text-black underline font-medium cursor-pointer">
                    View Detail
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end">
          <Pagination />
        </div>
      </div>
    </div>
  );
};
export default AppoitmentTable;

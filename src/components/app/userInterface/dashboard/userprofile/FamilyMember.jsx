import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { EditIcon, ProfileImg, RedBin } from "../../../../../assets/export";

const familyMembers = [
  {
    id: 1,
    name: "John Alex",
    email: "john.alex@gmail.com",
    phone: "+000 0000 00",
    age: "25yrs old",
    gender: "Male",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: ProfileImg, // Replace with real image path
  },
  {
    id: 1,
    name: "John Alex",
    email: "john.alex@gmail.com",
    phone: "+000 0000 00",
    age: "25yrs old",
    gender: "Male",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: ProfileImg, // Replace with real image path
  },
  {
    id: 1,
    name: "John Alex",
    email: "john.alex@gmail.com",
    phone: "+000 0000 00",
    age: "25yrs old",
    gender: "Male",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: ProfileImg, // Replace with real image path
  },
  {
    id: 1,
    name: "John Alex",
    email: "john.alex@gmail.com",
    phone: "+000 0000 00",
    age: "25yrs old",
    gender: "Male",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: ProfileImg, // Replace with real image path
  },
  // Add more members here
];

const FamilyMembers = ({setIsModal}) => {
  return (
    <div className=" bg-white rounded-[8px] my-6 ">
      <div className="flex justify-between  border-b items-center mb-4">
        <h2 className="text-xl sm:text-2xl p-4 font-semibold text-[#181818]">
          Family Members
        </h2>
        <button onClick={()=>setIsModal(true)} className="text-[#00BCD4]  p-4  text-sm sm:text-base font-medium hover:underline">
          Add New Members
        </button>
      </div>

      {familyMembers.map((member) => (
        <div key={member.id} className="bg-white border-b p-10 sm:p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-24">
            {/* Left: Image + Name */}
            <div className="flex items-center gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full object-cover"
              />
              <div>
                <h3 className="text-[20px] sm:text-xl font-[600] text-[#181818]">
                  {member.name}
                </h3>
                <p className="text-[16px] text-[#565656]">{member.email}</p>
              </div>
            </div>

            {/* Middle: Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1 text-sm text-[#181818]">
              <div>
                <p className="font-[500] text-[14px]  ">Phone Number</p>
                <p className="font-[400] text-[16px] mt-2 text-[#565656]  ">
                  {member.phone}
                </p>
              </div>
              <div>
                <p className="font-[500] text-[14px]  ">Age</p>
                <p className="font-[400] text-[16px] mt-2 text-[#565656]  ">
                  {member.age}
                </p>
              </div>
              <div>
                <p className="font-[500] text-[14px]  ">Gender</p>
                <p className="font-[400] text-[16px] mt-2 text-[#565656]  ">
                  {member.gender}
                </p>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-10 text-[#00BCD4]">
              <button>
                <img src={EditIcon} className="h-[17px] w-[17px] " alt="" />
              </button>
              <button>
                <img src={RedBin} className="h-[17px] w-[17px] " alt="" />
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mt-4 ">
            <h2 className="text-[18px] font-[500] text-[#212121] ">
              Description
            </h2>
            <p className="text-[16px] font-[400]  text-[#565656] ">
              {member.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FamilyMembers;

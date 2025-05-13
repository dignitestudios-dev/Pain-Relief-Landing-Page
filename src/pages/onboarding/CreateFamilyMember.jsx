import { Fragment, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import {
  AccountLogo,
  EditIcon,
  RedBin,
  SideImg,
} from "../../../../painRelief/src/assets/export";
import AddFamilyMemberModal from "../../components/app/userInterface/onboarding/AddFamilyMemberModal";

const CreateFamilyMember = () => {
  const [isModal, setIsModal] = useState(false);
  const [isMemberAdded, setIsMemberAdded] = useState(false);

  return (
    <Fragment>
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
        <div className="p-4 lg:block hidden">
          <img src={SideImg} />
        </div>
        <div className="flex flex-col justify-center items-center lg:h-auto h-screen md:pl-0 pl-8">
          <div className="pb-4 text-center lg:w-[350px] ">
            <div className="lg:w-[350px] w-[450px] flex justify-center mb-8">
              <img src={AccountLogo} className="w-[216px]" />
            </div>
            <p className="text-[32px] font-bold capitalize">
              Add Family Members{" "}
            </p>
            <p className="text-[16px] text-[#565656]">
              Please enter family member details to continue
            </p>
          </div>

          <div className="space-y-4 lg:w-[350px] md:w-[500px] w-[320px]">
            <div className="border border-dashed border-[rgba(85,85,85,0.2)] bg-[#EAEAEA50] rounded-2xl flex justify-center items-center h-[142px]">
              <p
                onClick={() => {
                  setIsModal(true);
                  setIsMemberAdded(true);
                }}
                className="underline text-[#212121] cursor-pointer"
              >
                + Add New Family Member{" "}
              </p>
            </div>
            {!isMemberAdded ? (
              <div>
                <button className="bg-[#29ABE2] text-white lg:w-[350px] md:w-[500px] w-[320px] h-[48px] rounded-[8px] mt-6">
                  Send
                </button>
                <button
                  type="button"
                  className="w-full flex justify-center items-center gap-1 cursor-pointer mt-6"
                >
                  <IoIosArrowDropleftCircle className="text-lg text-[#212121]" />
                  <p className="text-[12px] uppercase font-bold leading-none tracking-wider text-[#212121] ">
                    Back
                  </p>
                </button>
              </div>
            ) : (
              <div className="lg:w-[350px] md:w-[500px] w-[320px]">
                <div className=" rounded-[12px] h-[194px] p-4 shadow-[0_0_16px_rgba(17,17,26,0.1)] ">
                  <div className="grid grid-cols-6 justify-between items-center gap-2 border-b-[1px] border-b-[#D9D9D9] pb-2">
                    <div className="col-span-5 flex items-center gap-2">
                      <div>
                        <img
                          src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
                          alt="Profile"
                          className="w-10 h-10 rounded-full border-2 border-blue-600"
                        />
                      </div>

                      <div>
                        <p className="capitalize text-[16px] font-medium">
                          {" "}
                          john Doe
                        </p>
                        <div className="flex">
                          <p className="text-[12px] text-[#565656]">
                            john.alex@gmail.com
                          </p>
                          <p className="text-[12px] text-[#565656] pl-1">
                            +000 0000 00
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span>
                        <img src={EditIcon} />
                      </span>
                      <span>
                        <img src={RedBin} />
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 text-[#212121] text-[14px] border-b-[1px] border-b-[#D9D9D9] py-3">
                    <div className="col-span-1 ">25yrs old</div>
                    <div className="col-span-3 border-l-[1px] border-l-[#D9D9D9] pl-6">
                      Male
                    </div>
                  </div>
                  <div>
                    <p className="text-[#565656] text-[14px] py-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <button className="bg-[#29ABE2] text-white lg:w-[350px] md:w-[500px] w-[320px] h-[48px] rounded-[8px] mt-6">
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isModal && (
        <AddFamilyMemberModal
          setIsModal={setIsModal}
          setIsMemberAdded={setIsMemberAdded}
        />
      )}
    </Fragment>
  );
};

export default CreateFamilyMember;

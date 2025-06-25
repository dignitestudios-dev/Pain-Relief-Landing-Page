import { useContext } from "react";
import { SmallTick } from "../../assets/export";
import Button from "../app/landingPage/Inputs/Button";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/AppContext";

const RequestModal = ({ setIsOpen, isLogin = false }) => {
  const navigate = useNavigate();
  const { logoutAuth } = useContext(AppContext);
  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center p-4">
      {isLogin ? (
        <div className="bg-white rounded-[26px] shadow-md p-8 lg:w-[470px] md:w-[430px] ">
          <div className="flex flex-col justify-center items-center ">
            <div className="pb-4 text-center  flex flex-col justify-center items-center">
              <div className=" mb-8">
                <img src={SmallTick} />
              </div>
              <p className="text-[24px] font-semibold capitalize">
                Waiting For Approval
              </p>
              <p className="text-[16px] text-[#565656]">
                Your request is under review. You will receive an email once
                your request has been approved.
              </p>
            </div>

            <div className="xl:w-[350px] lg:w-[350px] md:w-[300px] w-full mt-3">
              <Button text="Continue" onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-[26px] shadow-md p-8 lg:w-[470px] md:w-[430px] ">
          <div className="flex flex-col justify-center items-center ">
            <div className="pb-4 text-center  flex flex-col justify-center items-center">
              <div className=" mb-8">
                <img src={SmallTick} />
              </div>
              <p className="text-[24px] font-semibold capitalize">
                Your Request Summited
              </p>
              <p className="text-[16px] text-[#565656]">
                Your request is under review. You will receive an email once
                your request has been approved.
              </p>
            </div>

            <div className="xl:w-[350px] lg:w-[350px] md:w-[300px] w-full mt-3">
              <Button text="Continue" onClick={() => logoutAuth()} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestModal;

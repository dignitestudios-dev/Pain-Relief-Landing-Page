import { Fragment, useState } from "react";
import { SideImg } from "../../assets/export";
import Button from "../../components/app/landingPage/Inputs/Button";
import MediaLicense from "../../components/onboarding/MediaLicense";
import AddNewLocation from "../../components/onboarding/AddNewLocation";
import RequestModal from "../../components/onboarding/RequestModal";

const CreateAccountRequest = () => {
  const [requestModal, setRequestModal] = useState(false);
  return (
    <Fragment>
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
        <div className="p-4 lg:block hidden">
          <img src={SideImg} />
        </div>
        <div className="flex flex-col justify-center items-center lg:h-auto h-screen md:pl-0 pl-8">
          <div className="pb-4 text-center  ">
            <p className="text-[32px] font-[600] capitalize">
              Create Account Request
            </p>
            <p className="text-[16px] text-[#565656]">
              Please complete details to access all features
            </p>
          </div>
          <div className="space-y-4 lg:w-[500px] md:w-[500px] w-[320px]">
            <div>
              <h2 className="text-start text-[24px] font-[600] ">
                Basic details
              </h2>
              <p className="text-[14px] font-[500] ">
                Location <span className="text-[#555555]">(Required)</span>{" "}
              </p>
            </div>
            <AddNewLocation />
            <MediaLicense />
            <div className="flex justify-end">
              <div className="w-[128px]  ">
                <Button text={"Send"} onClick={() => setRequestModal(true)} />
              </div>
            </div>
          </div>
        </div>
        {requestModal && <RequestModal isOpen={requestModal} />}
      </div>
    </Fragment>
  );
};

export default CreateAccountRequest;

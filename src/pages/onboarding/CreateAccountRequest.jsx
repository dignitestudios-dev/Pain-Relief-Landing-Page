import { Fragment, useState } from "react";
import { SideImg } from "../../assets/export";
import Button from "../../components/app/landingPage/Inputs/Button";
import MediaLicense from "../../components/onboarding/MediaLicense";
import AddNewLocation from "../../components/onboarding/AddNewLocation";
import RequestModal from "../../components/onboarding/RequestModal";
import { useTherapyType } from "../../hooks/api/Get";
import { useAccountRequest } from "../../hooks/api/Post";
import { processAccountRequest } from "../../lib/utils";

const CreateAccountRequest = () => {
  const [requestModal, setRequestModal] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isLocationAdded, setIsLocationAdded] = useState([]);
  const [fileName, setFileName] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [formErrors, setFormErrors] = useState({
    document: "",
    locations: "",
  });

  const { data: therapyTypes, loading: loader } =
    useTherapyType(`/booking/services`);
  console.log("🚀 ~ CreateAccountRequest ~ loader:", loader);

  const therapyTypesOption = therapyTypes?.map((item) => ({
    id: item?._id,
    label: item?.name,
  }));

  const { loading, postData } = useAccountRequest();

  const handleAccountRequest = () => {
    let errors = { document: "", locations: "" };
    let hasError = false;

    if (!selectedFile) {
      errors.document = "Please upload the required document.";
      hasError = true;
    }

    if (!isLocationAdded.length) {
      errors.locations = "Please add at least one location with specialties.";
      hasError = true;
    } else {
      const hasEmptySpecialties = isLocationAdded.some(
        (item) => !item?.specialty?.length
      );
      if (hasEmptySpecialties) {
        errors.locations =
          "Please select at least one specialty for each location.";
        hasError = true;
      }
    }

    setFormErrors(errors);

    if (hasError) return;

    let locations = isLocationAdded?.map((item) => {
      return {
        ...item.address,
        services: item?.specialty?.map((item) => item?.id),
      };
    });

    const formData = new FormData();

    formData.append("addresses", JSON.stringify(locations));

    formData.append("documents", selectedFile);

    postData(
      "/provider/add-details",
      formData,
      processAccountRequest,
      setRequestModal
    );
  };

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
            <AddNewLocation
              therapyTypesOption={therapyTypesOption}
              isLocationAdded={isLocationAdded}
              setIsLocationAdded={setIsLocationAdded}
              setIsModal={setIsModal}
              isModal={isModal}
              editIndex={editIndex}
              setEditIndex={setEditIndex}
              setFormErrors={setFormErrors}
            />
            {formErrors.document && (
              <p className="text-red-500 text-sm mt-1">{formErrors.document}</p>
            )}
            <MediaLicense
              fileName={fileName}
              setFileName={setFileName}
              setFile={setSelectedFile}
              setFormErrors={setFormErrors}
            />
            {formErrors.locations && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.locations}
              </p>
            )}
            <div className="flex justify-end">
              <div className="w-[128px]  ">
                <Button
                  text={"Send"}
                  onClick={() => handleAccountRequest()}
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </div>
        {requestModal && (
          <RequestModal setIsOpen={setRequestModal} isLogin={false} />
        )}
      </div>
    </Fragment>
  );
};

export default CreateAccountRequest;

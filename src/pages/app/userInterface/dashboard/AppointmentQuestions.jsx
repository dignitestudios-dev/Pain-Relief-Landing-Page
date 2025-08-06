import React, { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Logo, SideImg } from "../../../../assets/export";
import { RiLoader5Line } from "react-icons/ri";
import StepOne from "../../../../components/app/userInterface/dashboard/appoitmentSteps/StepsOne";
import StepTwo from "../../../../components/app/userInterface/dashboard/appoitmentSteps/StepTwo";
import StepThree from "../../../../components/app/userInterface/dashboard/appoitmentSteps/StepThree";
import StepsFour from "../../../../components/app/userInterface/dashboard/appoitmentSteps/StepsFour";
import StepFive from "../../../../components/app/userInterface/dashboard/appoitmentSteps/StepFive";
import SubmitLoader from "../../../../components/app/userInterface/dashboard/appoitmentSteps/SubmitLoader";
import StepSix from "../../../../components/app/userInterface/dashboard/appoitmentSteps/StepSix";
import StepSeven from "../../../../components/app/userInterface/dashboard/appoitmentSteps/StepSeven";
import { useCreateQuestion } from "../../../../hooks/api/Post";
import { processQuestionCreate } from "../../../../lib/utils";
import { useNavigate } from "react-router";
import { useGetCards } from "../../../../hooks/api/Get";
const AppointmentQuestions = () => {
  const navigate = useNavigate();

  const { data, loading: subLoader } = useGetCards(
    "/payment/get-subscription-user"
  );

  const { loading: loader, postData } = useCreateQuestion();

  const [step, setStep] = useState(1);
  const [typeStep1, setTypeStep1] = useState("");
  const [typeStep2, setTypeStep2] = useState("");
  const [jointTypeStep3, setJointTypeStep3] = useState("");
  const [typeStep4, setTypeStep4] = useState("");
  const [typeStep5, setTypeStep5] = useState("");
  const [typeStep6, setTypeStep6] = useState("");
  const [typeStep7, setTypeStep7] = useState("");
  const [otherText, setOtherText] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    step1: { question: "", answer: "" },
    step2: { question: "", answer: "" },
    step3: { question: "", answer: "" },
    step4: { question: "", answer: "" },
    step5: { question: "", answer: "" },
    step6: { question: "", answer: "" },
    step7: { question: "", answer: "" },
  });

  const handleCreateQuestion = () => {
    postData(
      "/booking/create-question",
      formData,
      processQuestionCreate,
      "/user/bookAppointment"
    );
  };

  const setFieldValue = (field, value) => {
    console.log(field, value);
  };

  const handleRemove = () => {
    if (step === 2) {
      setTypeStep2("");
    } else if (step === 3) {
      setJointTypeStep3("");
    }
  };

  const handleNext = () => {
    if (step === 2 && !typeStep2) {
      setErrorMessage("Please select an option before proceeding.");
      return;
    }
    if (step === 3) {
      if (!jointTypeStep3) {
        setErrorMessage("Please select an option before proceeding.");
        return;
      }

      if (jointTypeStep3 === "Other" && otherText.trim() === "") {
        setErrorMessage("Please provide a description for 'Other'.");
        return;
      }
    }

    if (step === 4 && !typeStep4) {
      setErrorMessage("Please select Yes or No.");
      return;
    }

    if (step === 5 && !typeStep5) {
      setErrorMessage("Please select Yes or No.");
      return;
    }

    if (step === 6 && !typeStep6) {
      setErrorMessage("Please select Yes or No.");
      return;
    }

    if (step === 7 && !typeStep7) {
      setErrorMessage("Please select Yes or No.");
      return;
    }

    setErrorMessage("");

    if (step === 1 && typeStep1 === "provider") {
      handleCreateQuestion();
    } else if (step === 1) {
      setStep(2);
    } else if (step === 2 && typeStep2 === "I am having constant headaches?") {
      setStep(6);
    } else if (
      step === 2 &&
      typeStep2 === "I would like to schedule appointment with Chiropractor"
    ) {
      setStep(3);
    } else if (step === 3 && jointTypeStep3 === "Neck/Shoulders") {
      setStep(4);
    } else if (step === 3 && jointTypeStep3 !== "Neck/Shoulders") {
      setStep(5);
    } else if (step === 4 && (typeStep4 === "Yes" || typeStep4 === "No")) {
      setStep(5);
    } else if (step === 6 && (typeStep6 === "Yes" || typeStep6 === "No")) {
      setStep(5);
    } else if (step === 5 && (typeStep6 === "Yes" || typeStep6 === "No")) {
      setStep(7);
    } else if (step === 5 && (typeStep4 === "Yes" || typeStep4 === "No")) {
      handleCreateQuestion();
    } else if (
      typeStep2 ===
        "I would like to schedule appointment with massage therapist" ||
      typeStep2 === "I would like to schedule appointment with acupuncturist" ||
      typeStep2 === "I would like to schedule appointment for x-ray or imaging"
    ) {
      handleCreateQuestion();
    } else {
      handleCreateQuestion();
    }
  };

  const handleBack = () => {
    if (step === 1) {
      navigate("/user/dashboard");
    } else if (step === 6 && typeStep2 === "I am having constant headaches?") {
      setStep(2);
    } else if (step === 3 && jointTypeStep3 === "Neck/Shoulders") {
      setStep(4);
    } else if (step === 5 && jointTypeStep3 !== "Neck/Shoulders") {
      setStep(3);
    } else if (step < 5) {
      setStep(step - 1);
    }
  };

  const isNextDisabled = () => {
    if (step === 1) return !typeStep1;
    if (step === 2) return typeStep1.length === 0;
    return false;
  };

  const handleSelection = (text) => {
    if (step === 1) {
      setTypeStep1(text);
      setFieldValue("type", text);
      setFormData((prev) => ({
        ...prev,
        step1: {
          question: "What can I help you with today?",
          answer: text,
        },
      }));
    } else if (step === 2) {
      setTypeStep2(text);
      setFieldValue("type", text);
      setFormData((prev) => ({
        ...prev,
        step2: {
          question: "What can I help you with today?",
          answer: text,
        },
      }));
    } else if (step === 3) {
      setJointTypeStep3(text);
      setFieldValue("type", text);
      setFormData((prev) => ({
        ...prev,
        step3: {
          question:
            "Are you experiencing muscle or joint pain in the following areas:",
          answer: text,
        },
      }));
    }
  };

  const handleOtherChange = (e) => {
    const newOther = e.target.value;
    setOtherText(newOther);
    setFormData((prev) => ({
      ...prev,
      step3: {
        question:
          "Are you experiencing muscle or joint pain in the following areas:",
        answer: `${jointTypeStep3}${newOther ? ` ${newOther}` : ""}`,
      },
    }));
  };

  const handleSurgerySelect = (val) => {
    setTypeStep4(val);
    setFormData((prev) => ({
      ...prev,
      step4: {
        question: "Have you recently had surgery in this area?",
        answer: val,
      },
    }));
  };

  const handleAutoMobileSelect = (val) => {
    setTypeStep5(val);
    setFormData((prev) => ({
      ...prev,
      step5: {
        question: "Is your pain related to an automobile accident?",
        answer: val,
      },
    }));
  };

  const handleUnbalancedSelect = (val) => {
    setTypeStep6(val);
    setFormData((prev) => ({
      ...prev,
      step6: {
        question: "Overall, do you feel unbalanced or sore?",
        answer: val,
      },
    }));
  };
  const handleSpeakSelect = (val) => {
    setTypeStep7(val);
    setFormData((prev) => ({
      ...prev,
      step7: {
        question: "Do you want to speak with a someone who can help?",
        answer: val,
      },
    }));
  };

  useEffect(() => {
    setErrorMessage("");
  }, [
    step,
    typeStep1,
    typeStep2,
    jointTypeStep3,
    typeStep4,
    typeStep5,
    typeStep6,
    typeStep7,
  ]);

  return (
    <div className="">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full bg-[#fcfcfc]">
        <div className="p-4 lg:block hidden">
          <img className="xxl:w-[1200px] xl:w-[1000px]" src={SideImg} />
        </div>
        <div className="flex flex-col justify-center items-center h-auto">
          <div className="xxl:space-y-8  my-2 text-center">
            <div className="xxl:w-[188px] lg:w-[158px] lg:h-[158px] w-[128px] h-[128px]">
              <img src={Logo} />
            </div>
            <p className="xxl:text-[36px] text-[26px] mt-2 font-semibold capitalize">
              Schedule <br /> An Appointments
            </p>
          </div>
          <div className="py-3">
            <p className="xxl:text-[20px] text-[16px] capitalize text-[#565656]">
              Please answer a couple of questions
            </p>
          </div>
          <form>
            <div className="space-y-4 xxl:w-[580px] lg:w-[350px] md:w-[550px] w-[320px]">
              {step === 1 && (
                <>
                  <StepOne
                    label={" What can I help you with today?"}
                    isSelected={typeStep1}
                    handleSelection={handleSelection}
                    subscription={data?.userSubscription}
                    subLoader={subLoader}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <StepTwo
                    label={"What can I help you with today?"}
                    setIsSelectedVal={setTypeStep2}
                    isSelectedVal={typeStep2}
                    handleRemove={handleRemove}
                    handleSelection={handleSelection}
                    error={
                      errorMessage && step === 2 ? (
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                      ) : null
                    }
                  />
                </>
              )}
            </div>

            {step === 3 && (
              <StepThree
                label={
                  "Are you experiencing muscle or joint pain in the following areas:"
                }
                otherText={otherText}
                setOtherText
                setIsSelectedVal={setJointTypeStep3}
                isSelectedVal={jointTypeStep3}
                handleRemove={handleRemove}
                handleSelection={handleSelection}
                handleOtherChange={handleOtherChange}
                error={
                  errorMessage && step === 3 ? (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  ) : null
                }
              />
            )}
            {step === 4 && (
              <StepsFour
                label={"Have you recently had surgery in this area?"}
                handleSurgerySelect={handleSurgerySelect}
                selected={typeStep4}
                error={
                  errorMessage && step === 4 ? (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  ) : null
                }
              />
            )}
            {step === 5 && (
              <StepFive
                label={"Is your pain related to an automobile accident?"}
                selected={typeStep5}
                handleAutoMobileSelect={handleAutoMobileSelect}
                error={
                  errorMessage && step === 5 ? (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  ) : null
                }
              />
            )}
            {step === 6 && (
              <StepSix
                label={"Overall, do you feel unbalanced or sore? "}
                selected={typeStep6}
                handleUnbalancedSelect={handleUnbalancedSelect}
                error={
                  errorMessage && step === 6 ? (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  ) : null
                }
              />
            )}
            {step === 7 && (
              <StepSeven
                label={"Do you want to speak with a someone who can help?"}
                selected={typeStep7}
                handleSpeakSelect={handleSpeakSelect}
                error={
                  errorMessage && step === 7 ? (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  ) : null
                }
              />
            )}

            <div className="xxl:w-[580px] lg:w-[350px] mt-6 mb-4">
              <button
                type="button"
                disabled={isNextDisabled()}
                onClick={handleNext}
                className={`${
                  isNextDisabled()
                    ? "bg-[#E0E0E0] text-gray-400"
                    : "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] text-white"
                } rounded-[8px] w-full font-[500] text-[16px] h-[49px]`}
              >
                <div className="flex justify-center items-center">
                  <span className="mr-1">Next</span>
                  {loading && (
                    <RiLoader5Line className="animate-spin text-lg" />
                  )}
                </div>
              </button>
            </div>
          </form>

          <button
            type="button"
            className="w-full flex justify-center items-center gap-1 cursor-pointer"
            onClick={handleBack}
          >
            <IoIosArrowDropleftCircle className="xxl:text-[28px] text-lg text-[#212121]" />
            <p className="xxl:text-[16px] text-[12px] uppercase font-bold leading-none tracking-wider text-[#212121] ">
              Back
            </p>
          </button>
        </div>
        <SubmitLoader isSubmitting={loader} />
      </div>
    </div>
  );
};

export default AppointmentQuestions;

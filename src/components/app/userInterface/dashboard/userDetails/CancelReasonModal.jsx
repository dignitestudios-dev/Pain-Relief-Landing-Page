import React from "react";
import Button from "../../../landingPage/Inputs/Button";

const CancelReasonModal = ({
  onClick,
  errors,
  handleBlur,
  handleSubmit,
  handleChange,
  touched,
  values,
  onCLose
}) => {
  return (
    <div className="fixed inset-0 bg-[#0A150F80] bg-opacity-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[26px] shadow-md p-8 w-[470px] ">
        <div className="flex flex-col justify-center items-center lg:h-auto md:h-screen ">
          <div className="text-center w-[330px] flex flex-col justify-center items-center">
            <p className="text-[24px] font-[600] capitalize">
              Cancelation Reason
            </p>
          </div>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <textarea
              value={values.description}
              name="description"
              id="description"
              className="border mt-4 w-full border-[#D9D9D9] p-2 rounded-[8px]  "
              rows={5}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Describe your pain, symptoms,"
            ></textarea>
            {errors.description && touched.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div className="flex justify-between gap-4 mt-4">
            <button onClick={onCLose} type="button" className="w-[205px] h-[49px] rounded-[8px] bg-[#E0E0E0] text-[#565656] ">
              {" "}
              Not Now
            </button>
            <div className="w-[205px] ">
              <Button text={"Submit"} onClick={onClick} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CancelReasonModal;

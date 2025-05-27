import React from "react";
import Button from "../../../landingPage/Inputs/Button";
import { useFormik } from "formik";

const ReportIssue = ({
  reportValues,
  reporthandleChange,
  reporthandleSubmit,
  reporttouched,
  reporterrors,
  reporthandleBlur,
  issueloader,
}) => {
  return (
    <div>
      <h2 className="text-[32px] font-[600] text-[#212121] mb-4">
        Report An Issue
      </h2>

      <form action="" onSubmit={reporthandleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="issue" className="text-[16px] font-[500]">
            Describe your problem
          </label>
          <textarea
            id="description"
            rows={10}
            placeholder="Write your issue here..."
            onChange={reporthandleChange}
            onBlur={reporthandleBlur}
            value={reportValues.description}
            name="description"
            className={`border rounded-[8px] p-2 ${
              reporttouched.description && reporterrors.description
                ? "border-red-500"
                : "border-[#E6E6E6] "
            }`}
          ></textarea>
        </div>
        {reporterrors && reporttouched && (
          <p className="text-red-600 text-[12px] ">{reporterrors.description}</p>
        )}
      <div className="flex justify-end mt-4">
        <div className="w-[152px]">
          <Button text={"Send"} type={"submit"} loading={issueloader} />
        </div>
      </div>
      </form>
    </div>
  );
};

export default ReportIssue;

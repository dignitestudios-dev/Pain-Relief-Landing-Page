import React, { useState } from "react";
import Button from "../../../landingPage/Inputs/Button";
import { useFormik } from "formik";
import { reportIssueValues } from "../../../../../init/app/userInformation";
import { reportIssueSchema } from "../../../../../schema/app/userInfoSchema";
import { processReportIssue } from "../../../../../lib/utils";
import ReportIssueModal from "../../../networkProviderInterface/dashboard/accountSetting/ReportIssueModal";
import { useReportIssueProvider } from "../../../../../hooks/api/Post";

const UserReportIssue = () => {
  const [reportModal, setReportModal] = useState(false);
  const { postData: reportIssue, loading: issueloader } =
    useReportIssueProvider();
  const {
    values: reportValues,
    handleBlur: reporthandleBlur,
    handleChange: reporthandleChange,
    handleSubmit: reporthandleSubmit,
    errors: reporterrors,
    touched: reporttouched,
  } = useFormik({
    initialValues: reportIssueValues,
    validationSchema: reportIssueSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, action) => {
      let obj = {
        issue: "Bugs",
        description: values.description,
      };
      reportIssue(
        "/user/report-issue",
        obj,
        processReportIssue,
        setReportModal,
        action
      );
    },
  });
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
          <p className="text-red-600 text-[12px] ">
            {reporterrors.description}
          </p>
        )}
        <div className="flex justify-end mt-4">
          <div className="w-[152px]">
            <Button text={"Send"} type={"submit"} loading={issueloader} />
          </div>
        </div>
      </form>
      {reportModal && (
        <ReportIssueModal onClick={() => setReportModal(false)} />
      )}
    </div>
  );
};

export default UserReportIssue;

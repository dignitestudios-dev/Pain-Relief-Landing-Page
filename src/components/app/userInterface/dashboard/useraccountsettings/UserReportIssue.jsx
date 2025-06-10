import React from "react";
import Button from "../../../landingPage/Inputs/Button";


const UserReportIssue = ({}) => {
  return (
    <div>
      <h2 className="text-[32px] font-[600] text-[#212121] mb-4">
        Report An Issue
      </h2>

      <form action="">
        <div className="flex flex-col gap-2">
          <label htmlFor="issue" className="text-[16px] font-[500]">
            Describe your problem
          </label>
          <textarea
            id="description"
            rows={10}
            placeholder="Write your issue here..."
            name="description"
          ></textarea>
        </div>

        <div className="flex justify-end mt-4">
          <div className="w-[152px]">
            <Button text={"Send"} type={"submit"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserReportIssue;

import React from "react";
import Button from "../../../landingPage/Inputs/Button";
import AuthInput from "../../../../onboarding/AuthInput";

const UserChangePassword = ({}) => {
  return (
    <div>
      <h2 className="text-[32px] font-[600] text-[#212121] ">
        Change Password
      </h2>
      <form action="">
        <div className="grid grid-cols-2 gap-10 mt-5">
          <div>
            <label>Current Password</label>
            <AuthInput
              text={"Current Password"}
              placeholder={"*******"}
              id={"currentPassword"}
              name={"currentPassword"}
              type={"password"}
            />
          </div>
          <div className="">
            <label>New Password</label>
            <AuthInput
              type={"password"}
              text={"New Password"}
              placeholder={"*******"}
              id={"newPassword"}
              name={"newPassword"}
            />
            <div className="mt-3">
              <label>Confirm Password</label>
              <AuthInput
                type={"password"}
                text={"Confirm New Password"}
                placeholder={"*******"}
                id={"cPassword"}
                name={"cPassword"}
              />
            </div>
            <div className="flex justify-end mt-4">
              <div className="w-[152px]">
                <Button text={"Save"} type={"submit"} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserChangePassword;

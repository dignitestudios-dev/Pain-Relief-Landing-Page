import React from "react";
import Button from "../../../landingPage/Inputs/Button";
import AuthInput from "../../../../onboarding/AuthInput";

const ChangePassword = ({
  passwordValues,
  handleBlur,
  handleSubmit,
  handleChange,
  touched,
  errors,
  passwordloader,
}) => {
  return (
    <div>
      <h2 className="text-[32px] font-[600] text-[#212121] ">
        Change Password
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10 mt-5">
          <div>
            <label>Current Password</label>
            <AuthInput
              value={passwordValues.currentPassword}
              text={"Current Password"}
              placeholder={"*******"}
              error={errors.currentPassword}
              touched={touched.currentPassword}
              onChange={handleChange}
              id={"currentPassword"}
              name={"currentPassword"}
              onBlur={handleBlur}
              type={"password"}
            />
          </div>
          <div className="">
            <label>New Password</label>
            <AuthInput
              type={"password"}
              value={passwordValues.newPassword}
              text={"New Password"}
              placeholder={"*******"}
              error={errors.newPassword}
              touched={touched.newPassword}
              onChange={handleChange}
              id={"newPassword"}
              name={"newPassword"}
              onBlur={handleBlur}
            />
            <div className="mt-3">
              <label>Confirm Password</label>
              <AuthInput
                type={"password"}
                text={"Confirm New Password"}
                placeholder={"*******"}
                error={errors.cPassword}
                touched={touched.cPassword}
                onChange={handleChange}
                id={"cPassword"}
                name={"cPassword"}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex justify-end mt-4">
              <div className="w-[152px]">
                <Button
                  text={"Save"}
                  type={"submit"}
                  loading={passwordloader}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;

import React, { useState } from "react";
import Button from "../../../landingPage/Inputs/Button";
import AuthInput from "../../../../onboarding/AuthInput";
import { useFormik } from "formik";
import ChangePassword from "../../../networkProviderInterface/dashboard/accountSetting/ChangePassword";
import { processChangePassword } from "../../../../../lib/utils";
import { changePassValues } from "../../../../../init/app/userInformation";
import { changePassSchema } from "../../../../../schema/app/userInfoSchema";
import { useChangePasswordProvider } from "../../../../../hooks/api/Post";
import PasswordUpdatedModal from "../../../../onboarding/PasswordUpdatedModal";
import { useNavigate } from "react-router";

const UserChangePassword = () => {
  const navigate = useNavigate();

  const [passwordUpdateModal, setPasswordUpdateModal] = useState(false);

  const { postData: changePassword, loading: passwordloader } =
    useChangePasswordProvider();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: changePassValues,
      validationSchema: changePassSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        let obj = {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        };
        changePassword(
          "/auth/change-password",
          obj,
          processChangePassword,
          setPasswordUpdateModal
        );
      },
    });

  return (
    <div>
      <h2 className="text-[32px] font-[600] text-[#212121] ">
        Change Password
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10 mt-5">
          <div>
            <label>Current Password</label>
            <AuthInput
              text={"Current Password"}
              placeholder={"*******"}
              id={"currentPassword"}
              name={"currentPassword"}
              type={"password"}
              value={values.currentPassword}
              error={errors.currentPassword}
              touched={errors.currentPassword}
              onChange={handleChange}
              onBlur={handleBlur}
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
              value={values.newPassword}
              error={errors.newPassword}
              touched={errors.newPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="mt-3">
              <label>Confirm Password</label>
              <AuthInput
                type={"password"}
                text={"Confirm New Password"}
                placeholder={"*******"}
                id={"cPassword"}
                name={"cPassword"}
                value={values.cPassword}
                error={errors.cPassword}
                touched={errors.cPassword}
                onChange={handleChange}
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
      {passwordUpdateModal && (
        <PasswordUpdatedModal
          onClick={() => {
            setPasswordUpdateModal(false);
            navigate("/user/dashboard");
          }}
        />
      )}
    </div>
  );
};

export default UserChangePassword;

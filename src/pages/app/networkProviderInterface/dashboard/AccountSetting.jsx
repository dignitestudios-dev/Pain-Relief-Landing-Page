import React, { useState } from "react";
import HeroSection from "../../../../components/app/networkProviderInterface/dashboard/accountSetting/HeroSection";
import AccountSettings from "../../../../components/app/networkProviderInterface/dashboard/accountSetting/AccountSettings";
import {
  useChangePasswordProvider,
  useDeleteAccountProvider,
  useReportIssueProvider,
} from "../../../../hooks/api/Post";
import { useFormik } from "formik";
import {
  changePassValues,
  reportIssueValues,
} from "../../../../init/app/userInformation";
import {
  changePassSchema,
  reportIssueSchema,
} from "../../../../schema/app/userInfoSchema";
import PasswordUpdatedModal from "../../../../components/onboarding/PasswordUpdatedModal";
import {
  processChangePassword,
  processDeleteAccount,
  processReportIssue,
} from "../../../../lib/utils";
import { useNavigate } from "react-router";
import ReportIssueModal from "../../../../components/app/networkProviderInterface/dashboard/accountSetting/ReportIssueModal";
import DeleteAccountModal from "../../../../components/app/networkProviderInterface/dashboard/accountSetting/DeleteAccountModal";

const AccountSetting = () => {
  const navigate = useNavigate();
  const [passwordUpdateModal, setPasswordUpdateModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const { postData: changePassword, loading: passwordloader } =
    useChangePasswordProvider();
  const { postData: reportIssue, loading: issueloader } =
    useReportIssueProvider();
  const { postData: deleteAccount, loading: deleteAccountloader } =
    useDeleteAccountProvider();

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
        "/provider/report-issue",
        obj,
        processReportIssue,
        setReportModal,
        action
      );
    },
  });

  const handleDeletAccount = () => {
    deleteAccount(
      "/auth/request-delete-account",
      null,
      processDeleteAccount,
      setDeleteModal
    );
  };
  return (
    <div>
      <HeroSection />
      <AccountSettings
        passwordValues={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        passwordloader={passwordloader}
        reporttouched={reporttouched}
        reporterrors={reporterrors}
        reportValues={reportValues}
        reporthandleChange={reporthandleChange}
        reporthandleBlur={reporthandleBlur}
        reporthandleSubmit={reporthandleSubmit}
        issueloader={issueloader}
        setDeleteModal={setDeleteModal}
        handleDeletAccount={handleDeletAccount}
        deleteAccountloader={deleteAccountloader}
      />
      {passwordUpdateModal && (
        <PasswordUpdatedModal
          onClick={() => {
            setPasswordUpdateModal(false);
            navigate("/provider/dashboard");
          }}
        />
      )}
      {reportModal && (
        <ReportIssueModal onClick={() => setReportModal(false)} />
      )}
      {deleteModal && (
        <DeleteAccountModal onClick={() => setDeleteModal(false)} />
      )}
    </div>
  );
};

export default AccountSetting;

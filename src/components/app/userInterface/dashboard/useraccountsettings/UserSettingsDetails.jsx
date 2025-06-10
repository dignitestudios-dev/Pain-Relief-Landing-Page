import React, { useContext, useState } from "react";
import Button from "../../../landingPage/Inputs/Button";
// import NotificationToogle from "./NotificationToogle";
import { AppContext } from "../../../../../context/AppContext";
import UserChangePassword from "./UserChangePassword";
import UserDeleteAccount from "./UserDeleteAccount";
import UserReportIssue from "./UserReportIssue";
import NotificationToogle from "../../../networkProviderInterface/dashboard/accountSetting/NotificationToogle";
import UserPaymentMethod from "./UserPaymentMethod";

const UserSettingsDetails = ({}) => {
  const tabs = [
    "Notification",
    "Change Password",
    "Payment Method",
    "Delete Account",
    "Report An Issue",
  ];

  const { logoutAuth } = useContext(AppContext);

  const [active, setActive] = useState("Notification");
  const [notificationStatus, setNotificationStatus] = useState(false);
  const [notiLoader, setNotiLoader] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNotification = () => {
    setNotiLoader(true);
    setTimeout(() => {
      setNotificationStatus((prev) => !prev);
      setNotiLoader(false);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center relative bottom-20">
      <div className="bg-white min-h-[703px] rounded-[8px] w-[90%] p-8">
        <div className="border-b border-b-[#0000001C] pb-6 flex items-center justify-between">
          <div>
            <h2 className="text-[32px] text-[#212121] font-[600]">Settings</h2>
            <p className="text-[#565656] font-[400] text-[20px]">
              Manage your account and preference
            </p>
          </div>

          <button
            onClick={() => setDrawerOpen(true)}
            className="xl:hidden bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] text-white px-4 py-2 rounded"
          >
            Open Settings
          </button>
        </div>

        <div className="grid xl:grid-cols-12 mt-3 gap-3">
          <div className="hidden xl:flex col-span-2 border-r border-r-[#0000001C] flex-col justify-between">
            <div>
              {tabs.map((item) => (
                <div className="flex cursor-pointer" key={item}>
                  {active === item && (
                    <div className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] h-[20px] mt-1 w-[2px]"></div>
                  )}
                  <p
                    className="text-[18px] text-[#212121] font-[500] pb-6 mx-4"
                    onClick={() => setActive(item)}
                  >
                    {item}
                  </p>
                  {item === "Notification" && (
                    <NotificationToogle
                      onClick={handleNotification}
                      loader={notiLoader}
                      onChange={handleNotification}
                      statusnoti={notificationStatus}
                      checked={notificationStatus}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="w-[150px] px-4 mt-auto mb-4">
              <Button text={"Logout"} type={"button"} onClick={logoutAuth} />
            </div>
          </div>

          {drawerOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 xl:hidden">
              <div className="bg-white w-[250px] h-full p-6 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Settings</h3>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  {tabs.map((item) => (
                    <div
                      className={`cursor-pointer text-[18px] ${
                        active === item ? "font-semibold text-[#29ABE2]" : ""
                      }`}
                      key={item}
                      onClick={() => {
                        setActive(item);
                        setDrawerOpen(false);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <p>{item}</p>
                        {item === "Notification" && (
                          <NotificationToogle
                            onClick={handleNotification}
                            loader={notiLoader}
                            onChange={handleNotification}
                            statusnoti={notificationStatus}
                            checked={notificationStatus}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button text={"Logout"} />
                </div>
              </div>
            </div>
          )}

          {/* Main content area */}
          <div className="col-span-12 xl:col-span-10">
            {active === "Change Password" && <UserChangePassword />}
            {active === "Delete Account" && <UserDeleteAccount />}
            {active === "Report An Issue" && <UserReportIssue />}
            {active === "Payment Method" && <UserPaymentMethod />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsDetails;

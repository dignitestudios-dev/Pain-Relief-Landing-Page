import React, { useContext } from "react";
import Button from "../../../landingPage/Inputs/Button";
import { AppContext } from "../../../../../context/AppContext";

const DeleteAccount = ({ handleDeletAccount, deleteAccountloader }) => {
  const { userData } = useContext(AppContext);
  return (
    <div>
      <h2 className="text-[32px] font-[600] text-[#212121] ">Delete Account</h2>
      <div className="flex justify-between mt-4 pb-4  border-b border-b-[#0000001C] ">
        <div>
          <p className="text-[16px] font-[500] text-[#212121] ">
            We will send 4 digits code to {userData.email}
          </p>
          <p className="text-[14px] font-[400] text-[#565656]  mt-2">
            Your data will be removed from our database permanently.
          </p>
        </div>
        <div className="w-[152px]">
          <Button
            text={"Send"}
            onClick={handleDeletAccount}
            loading={deleteAccountloader}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;

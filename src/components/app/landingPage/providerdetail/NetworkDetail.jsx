import React from "react";

const NetworkDetail = ({
  title,
  message,
  detail,
  request,
  editIcon,
  onClickEdit,
  onClickRequest,
  deleteIcon,
  onClickDelete,
}) => {
  return (
    <div className="border-b border-[#EAEAEA] px-4 py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-[14px] text-[#565656] font-medium">{title}</h3>

        <div className="flex gap-3 items-center cursor-pointer">
          {editIcon && <span onClick={onClickEdit}>{editIcon}</span>}
          {deleteIcon && <span onClick={onClickDelete}>{deleteIcon}</span>}

          {request && (
            <button
              onClick={() => onClickRequest()}
              className="text-transparent bg-clip-text bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] border-b border-[#63CFAC] text-sm"
            >
              {request}
            </button>
          )}
        </div>
      </div>

      <p className="text-[16px] text-[#181818] font-medium mt-1 break-words">
        {detail}
        {message && (
          <span className="block text-[#565656] text-sm mt-1 ">{message}</span>
        )}
      </p>
    </div>
  );
};

export default NetworkDetail;

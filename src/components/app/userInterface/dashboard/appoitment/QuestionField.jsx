/* eslint-disable react/prop-types */

const QuestionField = ({

  label,
  value,
  tick,
  isSelected,
  handleSelection,
}) => {
  const isActive = isSelected === value;
  return (
    <div
      onClick={() => handleSelection(value)}
      className={`relative w-full h-[54px] border-[1px] cursor-pointer rounded-[10px]  ${
        isActive
          ? "bg-gradient-to-bl   to-[#63CFAC] from-[#29ABE2]  "
          : "border-[#D9D9D9]"
      } 
        flex justify-between items-center rounded-[10px] md:pl-1 md:py-[2px] pl-1.5 py-[2px]`}
    >
      <div className="flex items-center">
       
        <div className="pl-2 ">
          <p className={`text-[14px]  font-medium  ${
        isActive
          ? "text-white"
          : "border-[#D9D9D9]"
      } `}>{label}</p>
        </div>
      </div>
      <div className="absolute -right-1.5 -top-2">
        {isActive && <img src={tick} className="w-[14px] rounded-full border-[1px]" />}
      </div>
    </div>
  );
};

export default QuestionField;

/* eslint-disable react/prop-types */

const SelectField = ({
  icon,
  iconDark,
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
      className={`relative w-full xxl:h-[68px] xl:h-[50px] border-[1px] cursor-pointer rounded-[10px]  ${
        isActive ? "gradient-border " : "border-[#D9D9D9]"
      } 
        flex justify-between items-center rounded-[10px] md:pl-1 md:py-[2px] pl-1.5 py-[2px]`}
    >
      <div className="flex items-center">
        <div
          className={`border-[1px] ${
            isActive
              ? "bg-gradient-to-l to-[#63CFAC] from-[#29ABE2]"
              : "bg-white"
          }  border-[#D9D9D9] rounded-[12px] w-[40px] h-[40px] flex justify-center items-center `}
        >
          <img
            src={isActive ? icon : iconDark}
            className="object-cover w-[22.74pxpx] h-[22.26px] "
          />
        </div>
        <div className="pl-2 ">
          <p className="text-[12px] font-medium">{label}</p>
        </div>
      </div>
      <div className="absolute right-1.5 top-1.5">
        {isActive && <img src={tick} className="w-[14px] object-contain" />}
      </div>
    </div>
  );
};

export default SelectField;

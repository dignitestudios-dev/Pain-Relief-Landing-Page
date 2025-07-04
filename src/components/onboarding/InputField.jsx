/* eslint-disable react/prop-types */

const InputField = ({
  text,
  placeholder,
  type,
  value,
  name,
  maxLength,
  onChange,
  onBlur,
  error,
  touched,
  id,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col gap-1 justify-start items-start">
      <label className="text-[12px] text-[#121516] font-medium">{text}</label>
      <div
        className={`relative   ${
          disabled ? "bg-gray-200 cursor-not-allowed" : " bg-transparent"
        } w-full h-[48px] border-[1px]   
          ${
            error && touched
              ? ""
              : "border-[#D9D9D9] focus-within:border-[1px]  focus-within:border-[#55C9FA]"
          } flex justify-between items-center rounded-[8px] md:pl-3 pl-1.5`}
      >
        <div className="w-full ">
          <input
            placeholder={placeholder}
            type={type}
            value={value}
            id={id}
            name={name}
            maxLength={maxLength}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            className={`  ${
              disabled ? "bg-gray-200 cursor-not-allowed" : ""
            } h-8 w-[85%] outline-none text-[16px] bg-transparent text-[#212121]
                pl-2 caret-[#565656] placeholder:text-[#565656] placeholder:text-[16px]`}
          />
        </div>
      </div>
      {error && touched && <p className="text-red-600 text-[12px] ">{error}</p>}
    </div>
  );
};

export default InputField;

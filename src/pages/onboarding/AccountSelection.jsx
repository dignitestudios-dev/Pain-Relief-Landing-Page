import { IoIosArrowDropleftCircle } from "react-icons/io";
import {
  Logo,
  NetworkProviderDark,
  NetworkProviderLight,
  SideImg,
  SmallTick,
  UserDark,
  UserWhite,
} from "../../assets/export";

import SelectField from "../../components/onboarding/SelectField";
import { useNavigate } from "react-router";
import Button from "../../components/app/landingPage/Inputs/Button";
import { useState } from "react";
import { selectAccountSchema } from "../../schema/authentication/authenticationSchema";
import { selectAccountValues } from "../../init/authentication/authenticationValues";
import { useFormik } from "formik";

const AccountSelection = () => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState("");

  const handleSelection = (text) => {
    setIsSelected(text);
    setFieldValue("type", text);
  };

  const { setFieldValue, handleSubmit, errors, touched } = useFormik({
    initialValues: selectAccountValues,
    validationSchema: selectAccountSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, action) => {
      console.log("🚀 ~ onSubmit: ~ action:", action);
      let routeName = "/auth/sign-up";

      // navigate(routeName);
      navigate(routeName, { state: { userType: values.type } });
    },
  });

  selectAccountValues, selectAccountSchema;

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full bg-[#fcfcfc]">
      <div className="p-4 lg:block hidden">
        <img src={SideImg} />
      </div>
      <div className="flex flex-col mt-10 items-center h-auto p-2">
        <div className="my-4 text-center">
          <div className="w-[148px] h-[158px]">
            <img src={Logo} />
          </div>
          <p className="text-[26px] mt-2  font-semibold capitalize">
            Pain Relief USA
          </p>
          <p className="text-[14px] font-[500] capitalize text-[#565656]">
            pain Relief made easy
          </p>
        </div>
        <div className="py-4">
          <p className="lg:text-[32px] xl:w-[250px] lg:w-[250px] md:text-[25px] text-[22px] text-center font-[600] text-wrap capitalize">
            Create Account Request
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 xl:w-[350px] lg:w-[350px] md:w-[550px] w-full ">
            <div className=" space-y-5">
              <SelectField
                icon={UserWhite}
                iconDark={UserDark}
                text="I'm a member"
                label="I'm a member"
                value="user"
                tick={SmallTick}
                isSelected={isSelected}
                handleSelection={handleSelection}
              />
              <SelectField
                icon={NetworkProviderLight}
                iconDark={NetworkProviderDark}
                label="I’m a service provider"
                value="provider"
                tick={SmallTick}
                isSelected={isSelected}
                handleSelection={handleSelection}
              />
            </div>
            {errors?.type && touched?.type && (
              <p className="text-red-600 text-[12px]">{errors?.type}</p>
            )}
          </div>

          <div className="xl:w-[350px] lg:w-[350px] md:w-[550px] w-full mt-3 mb-4">
            <Button text={"Continue"} />
          </div>
        </form>
        <button
          type="button"
          className="w-full flex justify-center  items-center gap-1 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowDropleftCircle className="text-lg text-[#212121]" />
          <p className="text-[12px] uppercase font-bold leading-none tracking-wider text-[#212121] ">
            Back
          </p>
        </button>
      </div>
    </div>
  );
};

export default AccountSelection;

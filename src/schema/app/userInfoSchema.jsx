import * as Yup from "yup";

export const userInfoValidationSchema = Yup.object({
  fname: Yup.string().required("First name is required."),
  lname: Yup.string(),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  number: Yup.string()
    .matches(/^\d+$/, "Mobile number must be digits only.")
    .min(8, "Mobile number must be at least 8 digits.")
    .required("Mobile number is required."),
  address: Yup.string().required("Home address is required."),
});

export const providerSchema = Yup.object({
  fname: Yup.string().required("Name of service provider is required"),
  lname: Yup.string().required("Clinic/practice name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  number: Yup.string().required("Mobile number is required"),
  providerNPI: Yup.string(),
  website: Yup.string().url("Enter a valid URL"),
  description: Yup.string().required("Description is required"),
});

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
  userImage: Yup.mixed()
    .required("Image is required")
    .test(
      "fileSize",
      "File too large",
      (value) => !value || (value && value.size <= 10 * 1024 * 1024)
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) =>
        !value ||
        (value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type))
    ),
  name: Yup.string().required("Name of service provider is required"),
  clinicName: Yup.string().required("Clinic/practice name is required"),

  number: Yup.string()
    .transform((value) => value.replace(/\D/g, ""))
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits.")
    .required("Please enter your phone number"),
  providerNPI: Yup.string()
    .transform((value) => value.replace(/\D/g, ""))
    .matches(/^[0-9]{10}$/, "NPI must be exactly 10 digits.")
    .required("Provider NPI is required"),
  website: Yup.string()
    .url("Enter a valid URL")
    .required("Website is required"),

  description: Yup.string().required("Description is required"),
});

import * as Yup from "yup";

export const userInfoValidationSchema = Yup.object({
  fname: Yup.string()
    .trim()
    .required("First name is required.")
    .matches(/^[A-Za-z ]+$/, "First name must only contain letters and spaces"),

  lname: Yup.string()
    .trim()
    .required("Last name is required.")
    .matches(/^[A-Za-z ]+$/, "Last name must only contain letters and spaces"),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  number: Yup.string()
    .matches(/^\d+$/, "Mobile number must be digits only.")
    .min(8, "Mobile number must be at least 8 digits.")
    .required("Mobile number is required."),
});

export const providerSchema = Yup.object({
  userImage: Yup.mixed()
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

  // number: Yup.string()
  //   .transform((value) => value.replace(/\D/g, ""))
  //   .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits.")
  //   .required("Please enter your phone number"),
  providerNPI: Yup.string()
    .transform((value) => value.replace(/\D/g, ""))
    .matches(/^[0-9]{10}$/, "NPI must be exactly 10 digits."),
  website: Yup.string()
    .nullable()
    .test("is-valid-url", "Enter a valid URL", (value) => {
      // Allow empty (optional)
      if (!value || value.trim() === "") return true;

      // Accept URLs starting with http:// or https://
      if (/^https?:\/\/.+/.test(value)) return true;

      // Accept URLs starting with www.
      if (/^www\..+\..+/.test(value)) return true;

      return false;
    }),

  description: Yup.string(),
});

export const EditproviderSchema = Yup.object({
  // name: Yup.string().required("Name of service provider is required"),
  name: Yup.string()
    .required("Name of service provider is required.")
    .test(
      "not-empty-after-trim",
      "Name of service provider cannot be empty or just spaces.",
      (value) => value?.trim().length > 0
    )
    .test(
      "no-leading-space",
      "Name of service provider cannot start with a space.",
      (value) => (value ? !value.startsWith(" ") : true)
    )
    .test(
      "no-multiple-spaces",
      "Name of service provider cannot contain multiple spaces.",
      (value) => (value ? !/ {2,}/.test(value) : true)
    )
    .test(
      "no-numbers",
      "Name of service provider cannot contain numbers.",
      (value) => (value ? !/\d/.test(value) : true)
    )
    .test(
      "first-letter-uppercase",
      "First letter must be uppercase.",
      (value) => (value ? /^[A-Z]/.test(value.trim()) : true)
    ),
  clinicName: Yup.string()
    .required("Clinic/practice is required.")
    .test(
      "not-empty-after-trim",
      "Clinic/practice cannot be empty or just spaces.",
      (value) => value?.trim().length > 0
    )
    .test(
      "no-leading-space",
      "Clinic/practice cannot start with a space.",
      (value) => (value ? !value.startsWith(" ") : true)
    )
    .test(
      "no-multiple-spaces",
      "Clinic/practice cannot contain multiple spaces.",
      (value) => (value ? !/ {2,}/.test(value) : true)
    )
    .test("no-numbers", "Clinic/practice cannot contain numbers.", (value) =>
      value ? !/\d/.test(value) : true
    )
    .test(
      "first-letter-uppercase",
      "First letter must be uppercase.",
      (value) => (value ? /^[A-Z]/.test(value.trim()) : true)
    ),

  // phone: Yup.string()
  //   .transform((value) => value.replace(/\D/g, ""))
  //   .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits.")
  //   .required("Please enter your phone number"),

  npi: Yup.string()
    .transform((value) => value.replace(/\D/g, ""))
    .matches(/^[0-9]{10}$/, "NPI must be exactly 10 digits.")
    .required("Provider NPI is required"),

  website: Yup.string()
    .required("Website is required")
    .test("is-valid-url", "Enter a valid URL", (value) => {
      if (!value) return false;
      // Accept URLs starting with http:// or https://
      if (/^https?:\/\/.+/.test(value)) return true;
      // Accept URLs starting with www.
      if (/^www\..+\..+/.test(value)) return true;
      return false;
    }),

  description: Yup.string().required("Description is required"),
});

export const changePassSchema = Yup.object({
  currentPassword: Yup.string().required("Password  is required."),
  newPassword: Yup.string()
    .matches(/^(?!\s)(?!.*\s$)/, "Password must not begin or end with spaces")
    .min(6, "Password must contain at least 6 alphanumeric characters.")
    .required("Please enter your password"),

  cPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Please confirm your password"),
});
export const reportIssueSchema = Yup.object({
  description: Yup.string().required("Description is required"),
});

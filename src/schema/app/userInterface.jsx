import * as Yup from "yup";

export const addFamilMemberSchema = Yup.object({
  fullname: Yup.string()
    .required("Full name is required.")
    .test(
      "not-empty-after-trim",
      "Full name cannot be empty or just spaces.",
      (value) => value?.trim().length > 0
    )
    .test("no-leading-space", "Full name cannot start with a space.", (value) =>
      value ? !value.startsWith(" ") : true
    )
    .test(
      "no-multiple-spaces",
      "Full name cannot contain multiple spaces.",
      (value) => (value ? !/ {2,}/.test(value) : true)
    )
    .test("no-numbers", "First name cannot contain numbers.", (value) =>
      value ? !/\d/.test(value) : true
    )
    .test(
      "first-letter-uppercase",
      "First letter must be uppercase.",
      (value) => (value ? /^[A-Z]/.test(value.trim()) : true)
    ),

  email: Yup.string()
    .required("Email is required")
    .test("no-leading-space", "Email cannot start with a space.", (value) =>
      value ? value[0] !== " " : false
    )
    .test(
      "no-internal-or-trailing-space",
      "Email cannot contain spaces.",
      (value) => (value ? value.trim() === value && !/\s/.test(value) : false)
    )
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email format."),

  phone: Yup.string()
    .transform((value) => value.replace(/\D/g, ""))
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits.")
    .required("Please enter your phone number"),
  descriptions: Yup.string().required("Description is required"),

  userImage: Yup.mixed()
    .required("Image is required")
    .test("fileSize", "File too large", (value) => {
      // Allow image URLs (already uploaded)
      if (typeof value === "string") return true;
      if (value instanceof File) {
        return value.size <= 10 * 1024 * 1024; // 10MB
      }
      return false;
    })
    .test("fileType", "Unsupported file format", (value) => {
      if (typeof value === "string") return true;
      if (value instanceof File) {
        return ["image/jpeg", "image/jpg", "image/png"].includes(value.type);
      }
      return false;
    }),

  db: Yup.date().required("Date of birth is required"),
  relation: Yup.string().trim().required("Relation is required."),
  gender: Yup.string().trim().required("Gender is required."),
});

export const userProfileSchema = Yup.object({
  fname: Yup.string()
    .required("First name is required.")
    .test(
      "not-empty-after-trim",
      "First name cannot be empty or just spaces.",
      (value) => value?.trim().length > 0
    )
    .test(
      "no-leading-space",
      "First name cannot start with a space.",
      (value) => (value ? !value.startsWith(" ") : true)
    )
    .test(
      "no-multiple-spaces",
      "First name cannot contain multiple spaces.",
      (value) => (value ? !/ {2,}/.test(value) : true)
    )
    .test("no-numbers", "First name cannot contain numbers.", (value) =>
      value ? !/\d/.test(value) : true
    )
    .test(
      "first-letter-uppercase",
      "First letter must be uppercase.",
      (value) => (value ? /^[A-Z]/.test(value.trim()) : true)
    ),
  lname: Yup.string()
    .required("Last name is required.")
    .test(
      "not-empty-after-trim",
      "Last name cannot be empty or just spaces.",
      (value) => value?.trim().length > 0
    )
    .test("no-leading-space", "Last name cannot start with a space.", (value) =>
      value ? !value.startsWith(" ") : true
    )
    .test(
      "no-multiple-spaces",
      "Last name cannot contain multiple spaces.",
      (value) => (value ? !/ {2,}/.test(value) : true)
    )
    .test("no-numbers", "Last name cannot contain numbers.", (value) =>
      value ? !/\d/.test(value) : true
    )
    .test(
      "first-letter-uppercase",
      "First letter must be uppercase.",
      (value) => (value ? /^[A-Z]/.test(value.trim()) : true)
    ),
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

  db: Yup.date().nullable().required("Date of birth is required."),
  gender: Yup.array()
    .min(1, "Gender is required")
    .required("Gender is required"),
  address: Yup.string().required("Address is required"),
});

export const userEditProfileSchema = Yup.object().shape({
  fname: Yup.string()
    .required("First name is required.")
    .test(
      "not-empty-after-trim",
      "First name cannot be empty or just spaces.",
      (value) => value?.trim().length > 0
    )
    .test(
      "no-leading-space",
      "First name cannot start with a space.",
      (value) => (value ? !value.startsWith(" ") : true)
    )
    .test(
      "no-multiple-spaces",
      "First name cannot contain multiple spaces.",
      (value) => (value ? !/ {2,}/.test(value) : true)
    )
    .test("no-numbers", "First name cannot contain numbers.", (value) =>
      value ? !/\d/.test(value) : true
    )
    .test(
      "first-letter-uppercase",
      "First letter must be uppercase.",
      (value) => (value ? /^[A-Z]/.test(value.trim()) : true)
    ),
  lname: Yup.string()
    .required("Last name is required.")
    .test(
      "not-empty-after-trim",
      "Last name cannot be empty or just spaces.",
      (value) => value?.trim().length > 0
    )
    .test("no-leading-space", "Last name cannot start with a space.", (value) =>
      value ? !value.startsWith(" ") : true
    )
    .test(
      "no-multiple-spaces",
      "Last name cannot contain multiple spaces.",
      (value) => (value ? !/ {2,}/.test(value) : true)
    )
    .test("no-numbers", "Last name cannot contain numbers.", (value) =>
      value ? !/\d/.test(value) : true
    )
    .test(
      "first-letter-uppercase",
      "First letter must be uppercase.",
      (value) => (value ? /^[A-Z]/.test(value.trim()) : true)
    ),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  dateOfBirth: Yup.string().required("Date of birth is required"),

  address: Yup.object().shape({
    address: Yup.string().required("Please fill in the address"),
  }),

  gender: Yup.string().required("Gender is required"),
});

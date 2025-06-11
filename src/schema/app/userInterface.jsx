import * as Yup from "yup";

export const addFamilMemberSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .required("First name is required.")
    .matches(/^[A-Za-z ]+$/, "First name must only contain letters and spaces"),

  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
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
  relation: Yup.array().min(1, "Relation is required"),
  gender: Yup.array().min(1, "Gender is required"),
});

export const userProfileSchema = Yup.object({
  fname: Yup.string()
    .trim()
    .required("First name is required.")
    .matches(/^[A-Za-z ]+$/, "First name must only contain letters and spaces"),

  lname: Yup.string()
    .trim()
    .required("Last name is required.") // <-- fix here
    .matches(/^[A-Za-z ]+$/, "Last name must only contain letters and spaces"),

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
});

export const userEditProfileSchema = Yup.object().shape({
  fname: Yup.string().required("First name is required"),
  lname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  dateOfBirth: Yup.string().required("Date of birth is required"),
 

});

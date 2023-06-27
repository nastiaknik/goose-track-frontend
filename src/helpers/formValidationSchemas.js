import { object, string, number, date, mixed } from "yup";

export const RegisterSchema = object().shape({
  username: string()
    .max(16, "Username should not exceed 16 characters")
    .required("Username is required"),
  email: string()
    .email("Invalid email")
    .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
      message: "Invalid email",
      excludeEmptyString: true,
    })
    .required("Email is required"),
  password: string()
    .min(6, "Password is too short")
    .required("Password is required"),
});

export const LoginSchema = object().shape({
  email: string()
    .email("Invalid email")
    .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
      message: "Invalid email",
      excludeEmptyString: true,
    })
    .required("Email is required"),
  password: string()
    .min(6, "Password is too short")
    .required("Password is required"),
});

export const EmailSchema = object().shape({
  email: string()
    .email("Invalid email")
    .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
      message: "Invalid email",
      excludeEmptyString: true,
    })
    .required("Email is required"),
});

export const FeedbackSchema = object().shape({
  // username: string().max(32, "Maximum 32 letters").required("Required"),
  // avatar: string().url().required(),
  review: string().max(300, "Maximum 300 letters").required("Required"),
  rating: number().required("Required"),
});

export const UpdateInfoSchema = object().shape({
  username: string()
    .max(16, "Username should not exceed 16 characters")
    .required("Username is required"),
  email: string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
      message: "Invalid email",
      excludeEmptyString: true,
    }),
  birthday: date().nullable(),
  phone: string()
    .matches(
      /^(\+)?[\d\s-]+$/,
      "Allow digits, spaces, dashes and can start with +"
    )
    .nullable(),
  skype: string()
    .matches(
      /^@[a-z0-9_]{1,16}$/,
      "Start with @ and contain only [a-z], [0-9] and _"
    )
    .max(16, "Skype should not exceed 16 characters")
    .nullable(),
  avatar: mixed()
    .test("fileSize", "File too large", (value) => {
      if (!value) {
        return true;
      }
      const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
      return value.size <= MAX_FILE_SIZE;
    })
    .test("fileFormat", "Unsupported format", (value) => {
      if (!value) {
        return true;
      }
      const supportedFormats = ["image/jpg", "image/jpeg", "image/png"];
      return supportedFormats.includes(value.type);
    }),
});

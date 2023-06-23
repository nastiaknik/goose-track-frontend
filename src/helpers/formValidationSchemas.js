import { object, string } from "yup";

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

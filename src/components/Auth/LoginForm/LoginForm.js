import { useState } from "react";
import { useFormik } from "formik";
import { LoginSchema } from "helpers/formValidationSchemas";

import { LuLogIn } from "react-icons/lu";
import { FormInput } from "components/FormInput/FormInput";
import {
  StyledLoginForm,
  LoginTitle,
  LoginSubmitBtn,
} from "./LoginForm.styled";

export const LoginForm = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleValidation = (e) => {
    e.preventDefault();
    setIsSubmited(true);
    formik.handleSubmit();
  };

  return (
    <StyledLoginForm>
      <LoginTitle>Log In</LoginTitle>
      <FormInput
        text="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        isSubmited={isSubmited}
        formik={formik}
      />
      <FormInput
        text="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        isSubmited={isSubmited}
        formik={formik}
      />
      <LoginSubmitBtn type="submit" onClick={handleValidation}>
        Log In <LuLogIn />
      </LoginSubmitBtn>
    </StyledLoginForm>
  );
};

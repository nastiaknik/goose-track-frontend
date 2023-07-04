import { useState } from "react";
import { useFormik } from "formik";
import { LoginSchema } from "helpers/formValidationSchemas";

import { useDispatch } from "react-redux";
import { login } from "redux/auth/operations";

import { LuLogIn } from "react-icons/lu";
import { FormInput } from "components/FormElements/FormInput/FormInput";
import {
  StyledLoginForm,
  LoginTitle,
  LoginSubmitBtn,
} from "./LoginForm.styled";

export const LoginForm = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values));
      resetForm();
      setIsSubmited(false);
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
        placeholder="Enter email"
        isSubmited={isSubmited}
        formik={formik}
        auth={true}
      />
      <FormInput
        text="Password"
        name="password"
        type="password"
        placeholder="Enter password"
        isSubmited={isSubmited}
        formik={formik}
        auth={true}
      />
      <LoginSubmitBtn type="submit" onClick={handleValidation}>
        Log In <LuLogIn />
      </LoginSubmitBtn>
    </StyledLoginForm>
  );
};

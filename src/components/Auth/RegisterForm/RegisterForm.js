import { useState } from "react";
import { useFormik } from "formik";
import { RegisterSchema } from "../../../helpers/formValidationSchemas";

import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

import { LuLogIn } from "react-icons/lu";
import { FormInput } from "components/FormElements/FormInput/FormInput";
import { StyledForm, Title, SubmitBtn } from "./RegisterForm.styled";

export const RegisterForm = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
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
    <StyledForm>
      <Title>Sign Up</Title>
      <FormInput
        text="Name"
        name="username"
        type="text"
        placeholder="Enter your name"
        isSubmited={isSubmited}
        formik={formik}
      />
      <FormInput
        text="Email"
        name="email"
        type="email"
        placeholder="Enter email"
        isSubmited={isSubmited}
        formik={formik}
      />
      <FormInput
        text="Password"
        name="password"
        type="password"
        placeholder="Enter password"
        isSubmited={isSubmited}
        formik={formik}
      />
      <SubmitBtn type="submit" onClick={handleValidation}>
        Sign Up <LuLogIn />
      </SubmitBtn>
    </StyledForm>
  );
};

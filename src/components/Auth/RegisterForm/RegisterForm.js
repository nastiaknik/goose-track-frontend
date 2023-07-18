import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useFormik } from "formik";
import { RegisterSchema } from "../../../helpers/formValidationSchemas";

import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

import { LuLogIn } from "react-icons/lu";
import { FormInput } from "components/FormElements/FormInput/FormInput";
import { StyledForm, Title, SubmitBtn, Wrapper } from "./RegisterForm.styled";
import LangSwitcher from "components/LangSwitcher/LangSwitcher";

export const RegisterForm = () => {
  const { t } = useTranslation();
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
      <Wrapper>
        <Title>{t("Sign Up")}</Title>
        <LangSwitcher />
      </Wrapper>
      <FormInput
        text={t("Name")}
        name="username"
        type="text"
        placeholder={t("Enter your name")}
        isSubmited={isSubmited}
        formik={formik}
        auth={true}
      />
      <FormInput
        text={t("Email")}
        name="email"
        type="email"
        placeholder={t("Enter email")}
        isSubmited={isSubmited}
        formik={formik}
        auth={true}
      />
      <FormInput
        text={t("Password")}
        name="password"
        type="password"
        placeholder={t("Enter password")}
        isSubmited={isSubmited}
        formik={formik}
        auth={true}
        validation
      />
      <SubmitBtn type="submit" onClick={handleValidation}>
        {t("Sign Up")} <LuLogIn />
      </SubmitBtn>
    </StyledForm>
  );
};

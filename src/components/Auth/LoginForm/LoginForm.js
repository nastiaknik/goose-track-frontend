import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useFormik } from "formik";
import { LoginSchema } from "helpers/formValidationSchemas";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/operations";
import { LuLogIn } from "react-icons/lu";
import LangSwitcher from "components/LangSwitcher/LangSwitcher";
import { FormInput } from "components/FormElements/FormInput/FormInput";
import {
  StyledLoginForm,
  LoginTitle,
  LoginSubmitBtn,
  Wrapper,
} from "./LoginForm.styled";

export const LoginForm = () => {
  const { t } = useTranslation();
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
      <Wrapper>
        <LoginTitle>{t("Log In")}</LoginTitle>
        <LangSwitcher />
      </Wrapper>

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
      />
      <LoginSubmitBtn type="submit" onClick={handleValidation}>
        {t("Log In")} <LuLogIn />
      </LoginSubmitBtn>
    </StyledLoginForm>
  );
};

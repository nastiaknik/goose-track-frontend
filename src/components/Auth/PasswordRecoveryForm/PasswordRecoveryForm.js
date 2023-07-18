import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { PasswordSchema } from "helpers/formValidationSchemas";
import { toast } from "react-toastify";

import { FormInput } from "components/FormElements/FormInput/FormInput";
import {
  StyledRecoveryForm,
  RecoveryTitle,
  RecoverySubmitBtn,
  Wrapper,
} from "./PasswordRecoveryForm.styled";

export const PasswordRecoveryForm = () => {
  const { t } = useTranslation();
  const [isSubmited, setIsSubmited] = useState(false);
  const { verificationId } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: "",
      password: "",
      passwordRepeat: "",
    },
    validationSchema: PasswordSchema,
    onSubmit: (values, { resetForm }) => {
      axios
        .patch(
          `https://goose-track-backend-i4mr.onrender.com/api/auth/recovery`,
          { id: values.id, password: values.password }
        )
        .then((response) => {
          toast.success(t(response.data.message));
          navigate("/login", { replace: true });
        })
        .catch((err) => toast.error(t(err.response.data.message)));

      resetForm();
      setIsSubmited(false);
    },
  });

  const handleValidation = (e) => {
    e.preventDefault();

    if (formik.values.password !== formik.values.passwordRepeat) {
      toast.error(t("Passwords should be the same for both inputs"));
      return;
    }

    formik.values.id = verificationId;
    setIsSubmited(true);
    formik.handleSubmit();
  };

  return (
    <StyledRecoveryForm>
      <Wrapper>
        <RecoveryTitle>{t("Change password")}</RecoveryTitle>
      </Wrapper>
      <FormInput
        text="Password"
        name="password"
        type="password"
        placeholder={t("Enter password")}
        isSubmited={isSubmited}
        formik={formik}
        auth={true}
      />
      <FormInput
        text={t("Repeat password")}
        name="passwordRepeat"
        type="password"
        placeholder={t("Repeat your password")}
        isSubmited={isSubmited}
        formik={formik}
        auth={true}
      />
      <RecoverySubmitBtn type="submit" onClick={handleValidation}>
        {t("Change password")}
      </RecoverySubmitBtn>
    </StyledRecoveryForm>
  );
};

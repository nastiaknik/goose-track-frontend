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
} from "./PasswordRecoveryForm.styled";

export const PasswordRecoveryForm = () => {
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
          toast.success(response.data.message);
          navigate("/login", { replace: true });
        })
        .catch((err) => toast.error(err.response.data.message));

      resetForm();
      setIsSubmited(false);
    },
  });

  const handleValidation = (e) => {
    e.preventDefault();

    if (formik.values.password !== formik.values.passwordRepeat) {
      toast.error("Passwords should be the same for both inputs");
      return;
    }

    formik.values.id = verificationId;
    setIsSubmited(true);
    formik.handleSubmit();
  };

  return (
    <StyledRecoveryForm>
      <RecoveryTitle>Change password</RecoveryTitle>
      <FormInput
        text="Password"
        name="password"
        type="password"
        placeholder="Enter password"
        isSubmited={isSubmited}
        formik={formik}
        auth={true}
      />
      <FormInput
        text="Repeat password"
        name="passwordRepeat"
        type="password"
        placeholder="Repeat your password"
        isSubmited={isSubmited}
        formik={formik}
        auth={true}
      />
      <RecoverySubmitBtn type="submit" onClick={handleValidation}>
        Change password
      </RecoverySubmitBtn>
    </StyledRecoveryForm>
  );
};

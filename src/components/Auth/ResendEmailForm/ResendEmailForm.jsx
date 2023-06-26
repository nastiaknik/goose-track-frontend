import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import { EmailSchema } from "../../../helpers/formValidationSchemas";
import { toast } from "react-toastify";

import { FormInput } from "components/FormInput/FormInput";
import {
  EmailForm,
  EmailTitle,
  EmailSubmitBtn,
} from "./ResendEmailForm.styled";

export const ResendEmailForm = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: EmailSchema,
    onSubmit: (values, { resetForm }) => {
      axios
        .post(
          "https://goose-track-backend-i4mr.onrender.com/api/auth/activate",
          values
        )
        .then((response) => toast.success(response.data.message))
        .catch((err) => toast.error(err.response.data.message));

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
    <EmailForm>
      <EmailTitle>Email verification resend</EmailTitle>
      <FormInput
        text="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        isSubmited={isSubmited}
        formik={formik}
      />

      <EmailSubmitBtn type="submit" onClick={handleValidation}>
        Resend email
      </EmailSubmitBtn>
    </EmailForm>
  );
};

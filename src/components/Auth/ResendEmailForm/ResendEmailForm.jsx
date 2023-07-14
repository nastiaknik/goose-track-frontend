import PropTypes from "prop-types";
import axios from "axios";
import { useState, useEffect } from "react";

import { useFormik } from "formik";
import { EmailSchema } from "../../../helpers/formValidationSchemas";
import { toast } from "react-toastify";

import { FormInput } from "components/FormElements/FormInput/FormInput";
import {
  EmailForm,
  EmailTitle,
  EmailSubmitBtn,
} from "./ResendEmailForm.styled";

export const ResendEmailForm = ({ userProblems }) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds === 0) {
      setIsDisabled(false);
    }

    seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
  }, [seconds]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: EmailSchema,
    onSubmit: (values, { resetForm }) => {
      const endpoint = userProblems === "email" ? "activate" : "recovery";

      axios
        .post(
          `https://goose-track-backend-i4mr.onrender.com/api/auth/${endpoint}`,
          values
        )
        .then((response) => toast.success(response.data.message))
        .catch((err) => toast.error(err.response.data.message));

      resetForm();
      setIsSubmited(false);
      setIsDisabled(true);
      setSeconds(60);
    },
  });

  const handleValidation = (e) => {
    e.preventDefault();
    setIsSubmited(true);
    formik.handleSubmit();
  };

  return (
    <EmailForm>
      <EmailTitle>
        {userProblems === "email"
          ? "Email verification resend"
          : "Enter your email"}
      </EmailTitle>
      <FormInput
        text="Email"
        name="email"
        type="email"
        placeholder="Enter email"
        isSubmited={isSubmited}
        formik={formik}
      />

      <EmailSubmitBtn
        type="submit"
        disabled={isDisabled}
        onClick={handleValidation}
      >
        {userProblems === "email"
          ? isDisabled
            ? `Resend email in ${seconds} sec`
            : "Resend email"
          : isDisabled
          ? `Resend recovery email in ${seconds} sec`
          : "Send recovery email"}
      </EmailSubmitBtn>
    </EmailForm>
  );
};

ResendEmailForm.propTypes = {
  userProblems: PropTypes.string.isRequired,
};

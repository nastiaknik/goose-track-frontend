import { useTranslation } from "react-i18next";
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
  Wrapper,
} from "./ResendEmailForm.styled";
import LangSwitcher from "components/LangSwitcher/LangSwitcher";

export const ResendEmailForm = ({ userProblems }) => {
  const { t } = useTranslation();
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
        .then((response) => toast.success(t(response.data.message)))
        .catch((err) => toast.error(t(err.response.data.message)));

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
      <Wrapper>
        <EmailTitle>
          {userProblems === "email"
            ? t("Email verification resend")
            : t("Enter your email")}
        </EmailTitle>
        <LangSwitcher />
      </Wrapper>
      <FormInput
        text={t("Email")}
        name="email"
        type="email"
        placeholder={t("Enter email")}
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
            ? t(`Resend email in {{seconds}} sec`, { seconds })
            : t("Resend email")
          : isDisabled
          ? t(`Resend recovery email in {{seconds}} sec`, { seconds })
          : t("Send recovery email")}
      </EmailSubmitBtn>
    </EmailForm>
  );
};

ResendEmailForm.propTypes = {
  userProblems: PropTypes.string.isRequired,
};

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "redux/auth/selectrors";
import { updateUserInfo } from "redux/auth/operations";

import { useFormik } from "formik";
import { UpdateInfoSchema } from "helpers/formValidationSchemas";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

import { toast } from "react-toastify";
import { FormInput } from "components/FormElements/FormInput/FormInput";
import { DataInput } from "components/FormElements/DataInput/DataInput";
import {
  Form,
  Button,
  InputAvatar,
  AddAvatarBtn,
  LabelImg,
  LabelAvatar,
  TitleAvatar,
  TextAvatar,
  FlexInput,
  AvatarBlock,
  PlusIcon,
  BirthdayContainer,
  DefaultIcon,
} from "./UserForm.styled";

export const UserForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [isSubmited, setIsSubmited] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useState({
    username: user.username ?? "",
    phone: user.phone ?? "",
    birthday: format(new Date(user.birthday || Date.now()), "yyyy-MM-dd"),
    skype: user.skype ?? "",
    email: user.email ?? "",
    photo: user.imgURL ?? null,
  });

  const formik = useFormik({
    initialValues: userData,
    validationSchema: UpdateInfoSchema,
    onSubmit: (values) => {
      setIsSubmited(true);
      dispatch(updateUserInfo(values));
      setUserData(values);
      setAllowSubmit(false);
    },
  });

  useEffect(() => {
    if (formik.errors.photo) {
      toast.error(`${formik.errors.photo}`);
    }
  }, [formik.errors.photo]);

  const handleValidation = (e) => {
    e.preventDefault();
    setIsSubmited(true);
    formik.handleSubmit();
  };

  const handleAvatarChange = async (event) => {
    setIsSubmited(false);
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
      await formik.setFieldValue("photo", file);
      await Promise.resolve();
      setAllowSubmit(true);
    }
  };

  return (
    <Form onSubmit={handleValidation}>
      <AvatarBlock>
        <LabelAvatar htmlFor="image">
          {image || userData?.photo ? (
            <LabelImg
              alt="Avatar"
              src={image || userData.photo}
              width="48"
              height="48"
            />
          ) : (
            <DefaultIcon />
          )}
          <InputAvatar
            type="file"
            id="image"
            name="image"
            accept="image/jpg, image/jpeg, image/png"
            onChange={handleAvatarChange}
          />
          <AddAvatarBtn>
            <PlusIcon />
          </AddAvatarBtn>
        </LabelAvatar>

        <TitleAvatar>{userData.username}</TitleAvatar>
        <TextAvatar>{t("User")}</TextAvatar>
      </AvatarBlock>

      <FlexInput>
        <FormInput
          text={t("User Name")}
          name="username"
          type="text"
          placeholder={t("Enter username")}
          formik={formik}
          isSubmited={isSubmited}
          setAllowSubmit={setAllowSubmit}
          user={user}
        />

        <BirthdayContainer>
          <DataInput
            text={t("Birthday")}
            name="birthday"
            placeholder={t("Enter birthday")}
            formik={formik}
            isSubmited={isSubmited}
            setAllowSubmit={setAllowSubmit}
          />
        </BirthdayContainer>

        <FormInput
          text={t("Email")}
          name="email"
          type="email"
          placeholder={t("Enter email")}
          formik={formik}
          isSubmited={isSubmited}
          setAllowSubmit={setAllowSubmit}
          user={user}
        />

        <FormInput
          text={t("Phone")}
          name="phone"
          type="phone"
          placeholder={t("Enter phone number")}
          formik={formik}
          isSubmited={isSubmited}
          setAllowSubmit={setAllowSubmit}
          user={user}
        />

        <FormInput
          text={t("Skype")}
          name="skype"
          type="text"
          placeholder={t("Enter skype number")}
          formik={formik}
          isSubmited={isSubmited}
          setAllowSubmit={setAllowSubmit}
          user={user}
        />
      </FlexInput>

      <Button type="submit" disabled={!allowSubmit}>
        {t("Save changes")}
      </Button>
    </Form>
  );
};

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "redux/auth/selectrors";
import { updateUserInfo } from "redux/auth/operations";

import { useFormik } from "formik";
import { UpdateInfoSchema } from "helpers/formValidationSchemas";
import { format } from "date-fns";

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
  const dispatch = useDispatch();
  let user = useSelector(selectUser);
  if (!user) {
    const authData = localStorage.getItem("auth");
    if (authData) {
      const auth = JSON.parse(authData);
      user = auth.user;
    }
  }

  const [isSubmited, setIsSubmited] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useState({
    username: user.username ?? "",
    phone: user.phone ?? "",
    birthday: format(new Date(user.birthday || Date.now()), "yyyy-MM-dd"),
    skype: user.skype ?? "",
    email: user.email ?? "",
    imgURL: user.imgURL ?? null,
  });

  const formik = useFormik({
    initialValues: userData,
    validationSchema: UpdateInfoSchema,
    onSubmit: (values) => {
      setIsSubmited(true);
      dispatch(updateUserInfo(values));
      setUserData(values);
      formik.setTouched({});
      setAllowSubmit(false);
    },
  });

  useEffect(() => {
    if (formik.errors.imgURL) {
      toast.error(`${formik.errors.imgURL}`);
    }
  }, [formik.errors.imgURL]);

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
      await formik.setFieldValue("imgURL", file);
      await Promise.resolve();
      setAllowSubmit(true);
    }
  };

  return (
    <Form onSubmit={handleValidation}>
      <AvatarBlock>
        <LabelAvatar htmlFor="image">
          {image || userData.imgURL ? (
            <LabelImg
              alt="Avatar"
              src={image || userData.imgURL}
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
        <TextAvatar>User</TextAvatar>
      </AvatarBlock>

      <FlexInput>
        <FormInput
          text="User Name"
          name="username"
          type="text"
          placeholder="Username"
          formik={formik}
          isSubmited={isSubmited}
          setAllowSubmit={setAllowSubmit}
          user={user}
        />

        <BirthdayContainer>
          <DataInput
            text="Birthday"
            name="birthday"
            formik={formik}
            isSubmited={isSubmited}
            setAllowSubmit={setAllowSubmit}
          />
        </BirthdayContainer>

        <FormInput
          text="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          formik={formik}
          isSubmited={isSubmited}
          setAllowSubmit={setAllowSubmit}
          user={user}
        />

        <FormInput
          text="Phone"
          name="phone"
          type="phone"
          placeholder="Enter phone number"
          formik={formik}
          isSubmited={isSubmited}
          setAllowSubmit={setAllowSubmit}
          user={user}
        />

        <FormInput
          text="Skype"
          name="skype"
          type="text"
          placeholder="Enter skype number"
          formik={formik}
          isSubmited={isSubmited}
          setAllowSubmit={setAllowSubmit}
          user={user}
        />
      </FlexInput>

      <Button type="submit" disabled={!allowSubmit}>
        Save changes
      </Button>
    </Form>
  );
};

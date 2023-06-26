import { useState } from "react";
import { Formik } from "formik";
import { format } from "date-fns";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  Form,
  Input,
  Label,
  Button,
  InputAvatar,
  AddAvatarBtn,
  LabelImg,
  LabelAvatar,
  TitleAvatar,
  TextAvatar,
  FlexInput,
  AvatarBlock,
  Errors,
  LabelSpan,
  StyledIconContainer,
  PlusIcon,
  BirthdayContainer,
  ArrowIcon,
  DefaultIcon,
  StyledDatePicker,
  DatePickerStyles,
} from "./UserForm.styled";

export const UserForm = () => {
  const [image, setImage] = useState();
  const userName = "";
  const phone = "";
  const birthday = Date.now();
  const skype = "";
  const email = "";
  const avatar = null;

  const initialValues = {
    userName,
    phone,
    birthday: format(new Date(birthday), "yyyy-MM-dd"),
    skype,
    email,
  };

  const UserSchema = Yup.object({
    userName: Yup.string()
      .max(16, "Username should not exceed 16 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    birthday: Yup.date().required("Birthday is required").nullable(),
    phone: Yup.string()
      .matches(
        /^(\+)?[\d\s-]+$/,
        "Allow digits, spaces, dashes and can start with +"
      )
      .nullable(),
    skype: Yup.string()
      .matches(
        /^@[a-z0-9_]{1,16}$/,
        "Start with @ and contain only [a-z], [0-9] and _"
      )
      .max(16, "Skype should not exceed 16 characters")
      .nullable(),
    avatar: Yup.mixed()
      .nullable()
      .test("size", "File too large", (value) => {
        if (!value) {
          return true;
        }
        const MAX_FILE_SIZE = 2 * 1024 * 1024;
        if (value?.size > MAX_FILE_SIZE) {
          toast.error("File too large");
        }
        return value?.size <= MAX_FILE_SIZE;
      })
      .test("format", "Unsupported Format", (value) => {
        if (!value) {
          return true;
        }
        const isSupportedFormat = [
          "image/jpg",
          "image/jpeg",
          "image/png",
        ].includes(value.type);
        if (!isSupportedFormat) {
          toast.error("Unsupported format");
        }
        return isSupportedFormat;
      }),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={UserSchema}
        onSubmit={async (values) => {
          toast.success("Form submitted successfully");
          console.log("Submit");
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <Form onSubmit={formik.handleSubmit}>
              <AvatarBlock>
                <LabelAvatar htmlFor="avatar">
                  {avatar || image ? (
                    <LabelImg
                      alt="Avatar"
                      src={avatar || image}
                      width="48"
                      height="48"
                    />
                  ) : (
                    <DefaultIcon />
                  )}
                  <InputAvatar
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept={["image/jpg", "image/jpeg", "image/png"]}
                    onChange={(event) => {
                      const file = event.target.files[0];
                      formik.setFieldValue("avatar", file);
                      setImage(URL.createObjectURL(file));
                    }}
                  />
                  <AddAvatarBtn>
                    <PlusIcon />
                  </AddAvatarBtn>
                </LabelAvatar>

                <TitleAvatar>{userName}</TitleAvatar>
                <TextAvatar>User</TextAvatar>
              </AvatarBlock>

              <FlexInput>
                <Label htmlFor="userName">
                  <LabelSpan
                    hasError={formik.touched.userName && formik.errors.userName}
                    success={formik.touched.userName && !formik.errors.userName}
                  >
                    User Name
                  </LabelSpan>
                  <Input
                    id="userName"
                    name="userName"
                    type="text"
                    placeholder="userName"
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                    onBlur={formik.handleBlur}
                    hasError={formik.touched.userName && formik.errors.userName}
                    success={formik.touched.userName && !formik.errors.userName}
                    {...formik.getFieldProps("userName")}
                  />
                  <Errors>
                    {formik.touched.userName && formik.errors.userName}
                  </Errors>
                </Label>

                <Label htmlFor="phone">
                  <LabelSpan
                    hasError={formik.touched.phone && formik.errors.phone}
                    success={formik.touched.phone && !formik.errors.phone}
                  >
                    Phone
                  </LabelSpan>
                  <Input
                    id="phone"
                    name="phone"
                    type="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="phone number"
                    value={
                      formik.values.phone === "" || !formik.values.phone
                        ? ""
                        : formik.values.phone
                    }
                    hasError={formik.touched.phone && formik.errors.phone}
                    success={formik.touched.phone && !formik.errors.phone}
                    {...formik.getFieldProps("phone")}
                  />
                  <Errors>{formik.touched.phone && formik.errors.phone}</Errors>
                </Label>

                <DatePickerStyles />
                <BirthdayContainer>
                  <Label htmlFor="birthday">
                    <LabelSpan
                      hasError={formik.errors.birthday}
                      success={formik.touched.birthday}
                    >
                      Birthday
                    </LabelSpan>
                    <StyledIconContainer>
                      <ArrowIcon />
                    </StyledIconContainer>
                  </Label>
                  <StyledDatePicker
                    id="birthday"
                    name="birthday"
                    selected={new Date(formik.values.birthday)}
                    onChange={(date) => {
                      formik.setFieldValue("birthday", date);
                    }}
                    onBlur={formik.handleBlur}
                    dateFormat="dd-MM-yyyy"
                    maxDate={new Date()}
                    placeholderText="dd-MM-yyyy"
                    formatWeekDay={(day) => day.charAt(0)}
                    calendarStartDay={1}
                    hasError={formik.touched.birthday && formik.errors.birthday}
                    success={formik.touched.birthday}
                  />
                  <Errors>
                    {formik.touched.birthday && formik.errors.birthday}
                  </Errors>
                </BirthdayContainer>

                <Label htmlFor="skype">
                  <LabelSpan
                    hasError={formik.touched.skype && formik.errors.skype}
                    success={formik.touched.skype && !formik.errors.skype}
                  >
                    Skype
                  </LabelSpan>
                  <Input
                    id="skype"
                    name="skype"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="skype"
                    value={
                      formik.values.skype === "" || !formik.values.skype
                        ? ""
                        : formik.values.skype
                    }
                    hasError={formik.touched.skype && formik.errors.skype}
                    success={formik.touched.skype && !formik.errors.skype}
                    {...formik.getFieldProps("skype")}
                  />
                  <Errors>{formik.touched.skype && formik.errors.skype}</Errors>
                </Label>

                <Label htmlFor="email">
                  <LabelSpan
                    hasError={formik.touched.email && formik.errors.email}
                    success={formik.touched.email && !formik.errors.email}
                  >
                    Email
                  </LabelSpan>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    hasError={formik.touched.email && formik.errors.email}
                    success={formik.touched.email && !formik.errors.email}
                    {...formik.getFieldProps("email")}
                  />
                  <Errors>{formik.touched.email && formik.errors.email}</Errors>
                </Label>
              </FlexInput>

              <Button
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Save changes
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

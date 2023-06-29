import { useState /* , useEffect */ } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser /* , selectIsUserLoading */ } from "redux/auth/selectrors";
import { /* getUserInfo, */ updateUserInfo } from "redux/auth/operations";
import { useFormik } from "formik";
import { format } from "date-fns";
import { DatePicker } from "components/SharedComponents/DatePicker/DatePicker";
import { UpdateInfoSchema } from "helpers/formValidationSchemas";
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
} from "./UserForm.styled";

export const UserForm = () => {
  const dispatch = useDispatch();

  /*   useEffect(() => {
    const getUser = async () => {
      await dispatch(getUserInfo());
    };
    getUser();
  }, [dispatch]); */

  const user = useSelector(selectUser);

  const [image, setImage] = useState(null);
  const username = user?.username ?? "";
  const phone = user?.phone ?? "";
  const birthday = user?.birthday ?? Date.now();
  const skype = user?.skype ?? "";
  const email = user?.email ?? "";
  const imgURL = user?.imgURL ?? null;
  /*   const isLoading = useSelector(selectIsUserLoading);*/

  const initialValues = {
    username,
    phone,
    birthday: format(new Date(birthday), "yyyy-MM-dd"),
    skype,
    email,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: UpdateInfoSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(updateUserInfo(values));
    },
  });

  const handleValidation = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
      formik.setFieldValue("imgURL", file);
    }
  };

  return (
    <Form onSubmit={handleValidation}>
      <AvatarBlock>
        <LabelAvatar htmlFor="image">
          {image || imgURL ? (
            <LabelImg
              alt="Avatar"
              src={image || imgURL}
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

        <TitleAvatar>{username}</TitleAvatar>
        <TextAvatar>User</TextAvatar>
      </AvatarBlock>

      <FlexInput>
        <Label htmlFor="username">
          <LabelSpan
            hasError={formik.touched.username && formik.errors.username}
            success={formik.touched.username && !formik.errors.username}
          >
            User Name
          </LabelSpan>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="username"
            onChange={formik.handleChange}
            value={formik.values.username || ""}
            onBlur={formik.handleBlur}
            hasError={formik.touched.username && formik.errors.username}
            success={formik.touched.username && !formik.errors.username}
            {...formik.getFieldProps("username")}
          />
          <Errors>{formik.touched.username && formik.errors.username}</Errors>
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
            value={formik.values.phone || ""}
            hasError={formik.touched.phone && formik.errors.phone}
            success={formik.touched.phone && !formik.errors.phone}
            {...formik.getFieldProps("phone")}
          />
          <Errors>{formik.touched.phone && formik.errors.phone}</Errors>
        </Label>

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
          <DatePicker
            id="birthday"
            name="birthday"
            selected={new Date(formik.values.birthday)}
            onChange={(date) => {
              formik.setFieldValue("birthday", format(date, "yyyy-MM-dd"));
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
          <Errors>{formik.touched.birthday && formik.errors.birthday}</Errors>
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
            value={formik.values.skype || ""}
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
            value={formik.values.email || ""}
            hasError={formik.touched.email && formik.errors.email}
            success={formik.touched.email && !formik.errors.email}
            {...formik.getFieldProps("email")}
          />
          <Errors>{formik.touched.email && formik.errors.email}</Errors>
        </Label>
      </FlexInput>

      <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>
        Save changes
      </Button>
    </Form>
  );
};

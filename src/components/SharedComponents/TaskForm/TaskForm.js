import { Formik } from "formik";
import {
  RadioButtonInput,
  Wrapper,
  Button,
  ButtonCancel,
  Span,
  Label,
  Form,
  Errors,
  RadioButtonGroup,
  RadioButtonLabel,
  Input,
} from "./TaskForm.styled";
import { useDispatch } from "react-redux";
import { BiPlus } from "react-icons/bi";
import { VscEdit } from "react-icons/vsc";
import { addTask, updateTask } from "../../../redux/tasks/operations";
import { validationTaskSchema } from "helpers/formValidationSchemas";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const TaskForm = ({ onClose, task, status, ...props }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const editMode = props?.editMode || false;
  const category = status || "To do";

  const { currentDate } = useParams();

  const initialValues = {
    title: task?.title || "",
    start: task?.start || "",
    end: task?.end || "",
    priority: task?.priority || "Low",
  };

  const handleAdd = (values) => {
    if (!editMode) {
      dispatch(addTask({ ...values, category, date: currentDate }));
      onClose();
    } else {
      dispatch(
        updateTask({
          id: task._id,
          task: { date: task.date, ...values, category },
        })
      );
      onClose();
    }
  };

  const PRIORITIES = [
    {
      value: t("Low"),
      name: "Low",
    },
    {
      value: t("Medium"),
      name: "Medium",
    },
    {
      value: t("High"),
      name: "High",
    },
  ];

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={true}
        validationSchema={validationTaskSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleAdd(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="title">
              <Span>{t("Title")}</Span>
              <Input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder={t("Enter text")}
              />
              <Errors>
                {errors.title && touched.title && t(errors.title)}
              </Errors>
            </Label>

            <Wrapper>
              <Label htmlFor="start">
                <Span>{t("Start")}</Span>
                <Input
                  type="time"
                  step="60"
                  name="start"
                  id="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start}
                  placeholder={t("Select time")}
                />
                <Errors>
                  {errors.start && touched.start && t(errors.start)}
                </Errors>
              </Label>

              <Label htmlFor="end">
                <Span>{t("End")}</Span>
                <Input
                  type="time"
                  step="60"
                  name="end"
                  id="end"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.end}
                  placeholder={t("Select time")}
                />
                <Errors>{errors.end && touched.end && t(errors.end)}</Errors>
              </Label>
            </Wrapper>

            <RadioButtonGroup>
              {PRIORITIES.map((priority) => (
                <RadioButtonLabel key={priority.value}>
                  <RadioButtonInput
                    type="radio"
                    value={priority.name}
                    name="priority"
                    priority={priority.name}
                    checked={values.priority === priority.name}
                    onChange={() => {
                      setFieldValue("priority", priority.name);
                    }}
                  />
                  {priority.value}
                </RadioButtonLabel>
              ))}
            </RadioButtonGroup>

            <Wrapper>
              {!editMode ? (
                <Button type="submit">
                  <BiPlus />
                  {t("Add")}
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  <VscEdit />
                  {t("Edit")}
                </Button>
              )}
              <ButtonCancel
                type="button"
                disabled={isSubmitting}
                onClick={onClose}
              >
                {t("Cancel")}
              </ButtonCancel>
            </Wrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};

TaskForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  task: PropTypes.shape({
    title: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    priority: PropTypes.string,
  }),
  status: PropTypes.string,
};

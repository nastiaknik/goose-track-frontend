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

export const TaskForm = ({ onClose, task, status, ...props }) => {
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
              <Span>Title</Span>
              <Input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder="Enter text"
              />
              <Errors>{errors.title && touched.title && errors.title}</Errors>
            </Label>

            <Wrapper>
              <Label htmlFor="start">
                <Span>Start</Span>
                <Input
                  type="time"
                  step="60"
                  name="start"
                  id="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start}
                  placeholder="Select time"
                />
                <Errors>{errors.start && touched.start && errors.start}</Errors>
              </Label>

              <Label htmlFor="end">
                <Span>End</Span>
                <Input
                  type="time"
                  step="60"
                  name="end"
                  id="end"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.end}
                  placeholder="Select time"
                />
                <Errors>{errors.end && touched.end && errors.end}</Errors>
              </Label>
            </Wrapper>

            <RadioButtonGroup>
              {["Low", "Medium", "High"].map((priority) => (
                <RadioButtonLabel key={priority}>
                  <RadioButtonInput
                    type="radio"
                    value={priority}
                    name="priority"
                    checked={values.priority === priority}
                    onChange={() => {
                      setFieldValue("priority", priority);
                    }}
                  />
                  {priority}
                </RadioButtonLabel>
              ))}
            </RadioButtonGroup>

            <Wrapper>
              {!editMode ? (
                <>
                  <Button type="submit">
                    <BiPlus />
                    Add
                  </Button>
                  <ButtonCancel
                    type="button"
                    disabled={isSubmitting}
                    onClick={onClose}
                  >
                    Cancel
                  </ButtonCancel>
                </>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  <VscEdit />
                  Edit
                </Button>
              )}
            </Wrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};

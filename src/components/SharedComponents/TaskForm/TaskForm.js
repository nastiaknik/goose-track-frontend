// import { useParams } from 'react-router';
import { Formik } from 'formik';
import { isAfter, isValid, parse } from 'date-fns';
import * as Yup from 'yup';
import { RadioButtonInput, Wrapper, Button, ButtonCancel, Span, Label, Form, Errors, RadioButtonGroup, RadioButtonLabel, Input } from './TaskForm.styled';
// import { useDispatch } from 'react-redux';
import { BiPlus } from 'react-icons/bi';
import { VscEdit } from 'react-icons/vsc';

// import {
//   addTaskOperation,
//   editTaskOperation,
// } from '../../redux/operations';

export const TaskForm = ({ onClose, ...props }) => {
//   const dispatch = useDispatch();
  const editMode = props?.editMode || false;
  // const status = props?.status || 'To do';
  

  const initialValues = {
    title: props?.title || '',
    start: props?.start || '',
    end: props?.end || '',
    priority: props?.priority || 'Low',
  };

//   const { currentDay: date } = useParams();

//   const handleAdd = values => {
//     if (!editMode) {
//       const payload = { ...values, date, status };
//       dispatch(addTask(payload));
//       onClose();
//     } else {
//       const payload = { ...values, date, status, _id: props._id };
//       dispatch(editTask(payload));
//       onClose();
//     }
//   };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Title is required')
      .max(250, 'Title should not exceed 250 characters'),
    start: Yup.string()
      .test('valid-time', 'Invalid time format', value =>
        isValid(parse(value, 'HH:mm', new Date()))
      )
      .required('Start is required'),
    end: Yup.string()
      .nullable()
      .test('valid-time', 'Invalid time format', value => {
        if (!value) return true; // return true if value is empty
        return isValid(parse(value, 'HH:mm', new Date()));
      })
      .when('start', (start, schema) =>
        schema.test('end-time-greater', 'Less than start', end =>
          start && end
            ? isAfter(
                parse(end, 'HH:mm', new Date()),
                parse(start, 'HH:mm', new Date())
              )
            : true
        )
      ),
    priority: Yup.string()
      .required('Priority is required')
      .oneOf(['Low', 'Medium', 'High'], 'Invalid priority'),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={true}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
        //   handleAdd(values);
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
              <Errors>
                {errors.title && touched.title && errors.title}
              </Errors>
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
                <Errors>
                  {errors.start && touched.start && errors.start}
                </Errors>
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
                <Errors>
                  {errors.end && touched.end && errors.end}
                </Errors>
              </Label>
            </Wrapper>

            <RadioButtonGroup>
              {['Low', 'Medium', 'High'].map(priority => (
                <RadioButtonLabel key={priority}>
                  <RadioButtonInput
                    type="radio"
                    value={priority}
                    name="priority"
                    checked={values.priority === priority}
                    onChange={() => {
                      setFieldValue('priority', priority);
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
                    onClick={
                      onClose
                    }
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
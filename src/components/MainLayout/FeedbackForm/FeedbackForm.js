import PropTypes from "prop-types";
import { useFormik } from "formik";
import { FeedbackSchema } from "../../../helpers/formValidationSchemas";
import { Rating } from "@smastrom/react-rating";
import {
  ActionBtnDelete,
  ActionBtnEdit,
  Actions,
  ButtonsCont,
  CancelButton,
  DeleteIcon,
  EditIcon,
  LabelReview,
  ReviewText,
  SaveButton,
  StyledForm,
  TextLabel,
  Top,
  StyledValidation,
} from "./FeedbackForm.styled";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

const customStar = (
  <path
    d="M7.97761 7.01427L11 1.28579L14.0224 7.01427C14.1815 7.31594 14.4716 7.52671 14.8077 7.58487L21.1898 8.68913L16.6757 13.3338C16.438 13.5784 16.3271 13.9194 16.3757 14.257L17.2977 20.668L11.4854 17.8101C11.1793 17.6595 10.8207 17.6595 10.5146 17.8101L4.70234 20.668L5.6243 14.257C5.67285 13.9194 5.56205 13.5784 5.32432 13.3338L0.810179 8.68913L7.19226 7.58487C7.52835 7.52671 7.81845 7.31594 7.97761 7.01427Z"
    strokeWidth="1.2"
  />
);

const starStyles = {
  itemShapes: customStar,
  itemStrokeWidth: 0,
  activeFillColor: "#FFAC33",
  inactiveFillColor: "#CEC9C1",
  activeStrokeColor: "#FFAC33",
  inactiveStrokeColor: "#CEC9C1",
};

export const FeedbackForm = ({ reviewData, onSave, onDelete, onClose }) => {
  const isEditModal = !!reviewData?.comment;
  const [editReview, setEditReview] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const formik = useFormik({
    initialValues: {
      rating: reviewData?.rating || 0,
      //    name: name || "",
      //    avatar: "",
      comment: reviewData?.comment || "",
    },
    validationSchema: FeedbackSchema,
    onSubmit: (values) => {
      onSave(values);
      onClose();
    },
  });

  const toggleEditReview = () => {
    setEditReview((prev) => !prev);
  };

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        setIsSubmited(true);
        formik.handleSubmit();
      }}
    >
      <TextLabel isSubmited={isSubmited} error={formik.errors?.rating}>
        Rating
      </TextLabel>

      <Rating
        id="rating"
        value={formik.values.rating}
        onChange={(value) =>
          formik.setValues({ ...formik.values, rating: value })
        }
        style={{ maxWidth: 128 }}
        itemStyles={starStyles}
      />

      <Top>
        <LabelReview
          isSubmited={isSubmited}
          error={formik.errors?.comment}
          htmlFor="comment"
        >
          Review
        </LabelReview>
        {isEditModal && (
          <Actions>
            <ActionBtnEdit
              active={editReview}
              onClick={() => toggleEditReview()}
            >
              <EditIcon />
            </ActionBtnEdit>
            <ActionBtnDelete onClick={onDelete}>
              <DeleteIcon />
            </ActionBtnDelete>
          </Actions>
        )}
      </Top>
      <ReviewText
        id="comment"
        name="comment"
        placeholder="Enter text"
        value={formik.values.comment}
        onChange={formik.handleChange}
        readOnly={isEditModal && !editReview}
      />
      {formik.touched.comment && (
        <StyledValidation
          isSubmited={isSubmited}
          error={formik.errors?.comment}
        >
          {formik.errors?.comment
            ? formik.errors?.comment
            : `This is a CORRECT comment`}
        </StyledValidation>
      )}

      {(!isEditModal || (isEditModal && editReview)) && (
        <ButtonsCont>
          <SaveButton type="submit" disabled={formik.isSubmitting}>
            {isEditModal ? "Edit" : "Save"}
          </SaveButton>
          <CancelButton
            type="button"
            className="outline"
            onClick={() => onClose()}
            disabled={formik.isSubmitting}
          >
            Cancel
          </CancelButton>
        </ButtonsCont>
      )}
    </StyledForm>
  );
};

FeedbackForm.propTypes = {
  reviewData: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }),
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";
import { Modal } from "../../SharedComponents/Modal/Modal";
import { FeedbackForm } from "../FeedbackForm/FeedbackForm";
import {
  addReview,
  updateReview,
  deleteReview,
  getOwnReview,
} from "../../../redux/reviews/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsReviewsLoading,
  selectOwnReview,
} from "../../../redux/reviews/selectors";
import { selectUser } from "../../../redux/auth/selectrors";
import { useEffect } from "react";

export const AddFeedbackModal = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const reviewsLoading = useSelector(selectIsReviewsLoading);
  const ownReview = useSelector(selectOwnReview);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getOwnReview(user._id));
  }, [dispatch, user._id]);

  const onSave = async (review) => {
    if (ownReview) {
      dispatch(updateReview({ userId: user._id, review }));
    } else {
      dispatch(addReview({ ...review }));
    }
  };

  const onDelete = async () => {
    dispatch(deleteReview(user._id));
    onCloseModal();
  };

  if (reviewsLoading) return null;

  return (
    <Modal onClose={onCloseModal}>
      <FeedbackForm
        reviewData={ownReview?.comment ? ownReview : null}
        name={user.username}
        onSave={onSave}
        onDelete={onDelete}
        onClose={onCloseModal}
      />
    </Modal>
  );
};

AddFeedbackModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

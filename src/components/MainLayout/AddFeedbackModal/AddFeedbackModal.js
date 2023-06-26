import { Modal } from "../../SharedComponents/Modal/Modal";
import { FeedbackForm } from "../FeedbackForm/FeedbackForm";

export const AddFeedbackModal = ({ onCloseModal }) => {
  return (
    <Modal onClose={onCloseModal}>
      <FeedbackForm onClose={onCloseModal} />
    </Modal>
  );
};

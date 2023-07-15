import { useState } from "react";
import { AddFeedbackModal } from "../AddFeedbackModal/AddFeedbackModal";
import { FeedbackButton } from "./AddFeedbackBtn.styled";
import { useTranslation } from "react-i18next";

const AddFeedbackBtn = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <FeedbackButton onClick={handleButtonClick}>
        {t("Feedback")}
      </FeedbackButton>
      {isModalOpen && <AddFeedbackModal onCloseModal={handleCloseModal} />}
    </div>
  );
};

export default AddFeedbackBtn;

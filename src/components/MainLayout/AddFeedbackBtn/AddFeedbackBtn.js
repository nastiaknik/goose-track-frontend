import { useState } from "react";
import { AddFeedbackModal } from "../AddFeedbackModal/AddFeedbackModal";
import { FeedbackButton } from "./AddFeedbackBtn.styled";
import { useTranslation } from "react-i18next";
import Media from "react-media";
import { BsStar } from "react-icons/bs";

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
    <>
      <FeedbackButton onClick={handleButtonClick}>
        <Media query="(min-width: 432px)">
          {(matches) => (matches ? t("Feedback") : <BsStar size={16} />)}
        </Media>
      </FeedbackButton>
      {isModalOpen && <AddFeedbackModal onCloseModal={handleCloseModal} />}
    </>
  );
};

export default AddFeedbackBtn;

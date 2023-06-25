import React, { useState } from "react";
// import AddFeedbackModal from "./AddFeedbackModal";
import { FeedbackButton } from "./AddFeedbackBtn.styled";

const AddFeedbackBtn = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <FeedbackButton onClick={handleButtonClick}>Feedback</FeedbackButton>
      {/* {isModalOpen && <AddFeedbackModal onCloseModal={handleCloseModal} />} */}
    </div>
  );
};

export default AddFeedbackBtn;

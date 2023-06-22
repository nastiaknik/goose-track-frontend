import React, { useState } from "react";

const AddFeedbackModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Feedback</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Feedback</h2>
            {/* Place your modal content here */}
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFeedbackModal;

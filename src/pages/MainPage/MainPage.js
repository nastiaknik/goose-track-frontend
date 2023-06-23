import { AuthSection } from "components/MainPage/AuthSection/AuthSection";
import { Description } from "components/MainPage/Description/Description";
import { ReviewsSlider } from "components/MainPage/ReviewsSlider/ReviewsSlider";

import { Modal } from "components/SharedComponents/Modal/Modal";
import { useState } from "react";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />

      <button type="button" onClick={toggleModal}>
        Open modal
      </button>
      {isModalOpen && <Modal onClose={toggleModal} />}
    </>
  );
}

export default MainPage;

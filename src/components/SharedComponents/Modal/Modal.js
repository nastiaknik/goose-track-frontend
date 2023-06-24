import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContent, Button, CloseSvg } from "./Modal.styled";
// import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (evt) => {
    if (evt.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        <Button type="button" onClick={onClose}>
          <CloseSvg />
        </Button>
        {children}
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};

// Modal.propTypes = {
//   children: PropTypes.element.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

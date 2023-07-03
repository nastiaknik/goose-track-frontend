import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContent, Button, CloseSvg } from "./Modal.styled";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

export const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;

    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
    document.documentElement.style.scrollBehavior = "unset";
  },
  enabledScroll() {
    document.body.style.cssText = "";
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = "";
  },
};

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    scrollController.disabledScroll();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      scrollController.enabledScroll();
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

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, MenuContent, ArrowSvg, List, Button } from "./Menu.styled";
// import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

export const Menu = ({ toggleMenu }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (evt) => {
    if (evt.code === "Escape") {
      toggleMenu();
    }
  };

  const handleBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      toggleMenu();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <MenuContent>
        <List>
          <li>
            <Button type="button">
              In progress
              <ArrowSvg />
            </Button>
          </li>
          <li>
            <Button type="button">
              Done
              <ArrowSvg />
            </Button>
          </li>
        </List>
      </MenuContent>
    </Overlay>,
    modalRoot
  );
};

// Menu.propTypes = {
//   toggleMenu: PropTypes.func.isRequired,
// };

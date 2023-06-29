import { useEffect } from "react";
// import { createPortal } from "react-dom";
import {
  MenuContent,
  ArrowSvg,
  List,
  Button,
  // Overlay
} from "./Menu.styled";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateTask } from "redux/tasks/operations";

// const modalRoot = document.querySelector("#modal-root");

export const Menu = ({ task, toggleMenu }) => {
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

  // const handleBackdropClick = (evt) => {
  //   if (evt.currentTarget === evt.target) {
  //     toggleMenu();
  //   }
  // };
  const dispatch = useDispatch();
  const onUpdateTaskStatus = () => dispatch(updateTask(task.id));

  // return createPortal(
  // <Overlay onClick={handleBackdropClick}>
  return (
    <MenuContent>
      <List>
        <li>
          <Button type="button" onClick={onUpdateTaskStatus}>
            In progress
            <ArrowSvg />
          </Button>
        </li>
        <li>
          <Button type="button" onClick={onUpdateTaskStatus}>
            Done
            <ArrowSvg />
          </Button>
        </li>
      </List>
    </MenuContent>
    // </Overlay>,
    // modalRoot
  );
};

// Menu.propTypes = {
//   toggleMenu: PropTypes.func.isRequired,
// };

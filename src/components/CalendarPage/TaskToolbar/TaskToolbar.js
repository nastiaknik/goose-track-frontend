import {
  ArrowSvg,
  Button,
  PencilSvg,
  TrashSvg,
  List,
  Item,
} from "./TaskToolbar.styled";
import { useDispatch } from "react-redux";
import { deleteTask } from "redux/tasks/operations";
import { Menu } from "components/CalendarPage/TaskToolbar/Menu";
import { useState } from "react";
// import PropTypes from "prop-types";

export const TaskToolbar = ({ toggleModal, task }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteTask(task.id));

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <List>
      <Item>
        <Button type="button" onClick={toggleMenu}>
          <ArrowSvg />
        </Button>
        {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
      </Item>
      <li>
        <Button type="button" onClick={toggleModal}>
          <PencilSvg />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onDelete}>
          <TrashSvg />
        </Button>
      </li>
    </List>
  );
};

/* TaskToolbar.propTypes={}; */

// import { Modal } from "components/SharedComponents/Modal/Modal";
// import { useState } from "react";

// const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     if (isModalOpen) {
//       setIsModalOpen(false);
//     } else {
//       setIsModalOpen(true);
//     }
//   };

// const toggleMenu = () => {
//   if (isMenuOpen) {
//     setIsMenuOpen(false);
//   } else {
//     setIsMenuOpen(true);
//   }
// };

//   return (
//     <>
//       {isMenuOpen && <Menu/>}
//       {isModalOpen && <Modal onClose={toggleModal} />}
//     </>
//   );
// }

// import { useDispatch } from "react-redux";
// import { deleteTask } from "redux/tasks/operations";

// const dispatch = useDispatch();

// const onDelete = () => dispatch(deleteTask(task.id));

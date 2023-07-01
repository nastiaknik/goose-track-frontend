import { Button, List, Item } from "./TaskToolbar.styled";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { CiTrash } from "react-icons/ci";
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
          <BsArrowRightCircle />
        </Button>
        {isMenuOpen && <Menu task={task} toggleMenu={toggleMenu} />}
      </Item>
      <li>
        <Button type="button" onClick={toggleModal}>
          <BiPencil />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onDelete}>
          <CiTrash />
        </Button>
      </li>
    </List>
  );
};

/* TaskToolbar.propTypes={}; */

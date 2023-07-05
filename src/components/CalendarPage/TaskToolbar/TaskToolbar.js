import { Button, List, Item } from "./TaskToolbar.styled";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { CiTrash } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { deleteTask } from "redux/tasks/operations";
import { Menu } from "components/CalendarPage/TaskToolbar/Menu";
import PropTypes from "prop-types";
import { Popup } from "reactjs-popup";

export const TaskToolbar = ({ toggleModal, task }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteTask(task._id));

  return (
    <List>
      <Item>
        <Popup
          arrow={false}
          trigger={
            <Button type="button" autoFocus={false}>
              <BsArrowRightCircle />
            </Button>
          }
          position="bottom center"
          on="click"
          closeOnDocumentClick
        >
          {(close) => <Menu task={task} toggleMenu={close} />}
        </Popup>
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

TaskToolbar.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

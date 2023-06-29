import { useEffect } from "react";
import { MenuContent, ArrowSvg, List, Button } from "./Menu.styled";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateTask } from "redux/tasks/operations";

// import { TASK_STATUS } from "../../../constants/Status";

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

  const dispatch = useDispatch();
  const onUpdateTaskStatus = () => dispatch(updateTask(task.id));

  // let otherStatusList = [];
  // otherStatusList = TASK_STATUS.filter((status) => status.id !== task.status);

  return (
    <MenuContent>
      <List>
        {/* {otherStatusList.map((status) => (
          <li key={status.id}>
            <Button type="button" onClick={onUpdateTaskStatus}>
              {status.name}
              <ArrowSvg />
            </Button>
          </li>
        ))} */}

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
  );
};

// Menu.propTypes = {
//   toggleMenu: PropTypes.func.isRequired,
// };

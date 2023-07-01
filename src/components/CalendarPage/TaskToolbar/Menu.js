import { useEffect } from "react";
import { MenuContent, ArrowSvg, List, Button } from "./Menu.styled";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { changeCategory } from "redux/tasks/operations";
import { TASK_STATUS } from "../../../constants/Status";

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

  let otherStatusList = TASK_STATUS.filter(
    (status) => status.name !== task.category
  );

  return (
    <MenuContent>
      <List>
        {otherStatusList.map((status) => (
          <li key={status.id}>
            <Button
              type="button"
              onClick={() =>
                dispatch(
                  changeCategory({
                    id: task._id,
                    categoryData: { category: status.name },
                  })
                )
              }
            >
              {status.name}
              <ArrowSvg />
            </Button>
          </li>
        ))}
      </List>
    </MenuContent>
  );
};

// Menu.propTypes = {
//   toggleMenu: PropTypes.func.isRequired,
// };

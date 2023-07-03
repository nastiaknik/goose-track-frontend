import { Button, PlusSvg, Wrapper } from "./AddTaskBtn.styled";
import PropTypes from "prop-types";

export const AddTaskBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <Wrapper>
        <PlusSvg />
        Add task
      </Wrapper>
    </Button>
  );
};

AddTaskBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

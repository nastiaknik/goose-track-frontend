import { Button, PlusSvg, Wrapper } from "./AddTaskBtn.styled";
// import PropTypes from "prop-types";

export const AddTaskBtn = ({ id, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <Wrapper>
        <PlusSvg />
        Add task
      </Wrapper>
    </Button>
  );
};

// AddTaskBtn.propTypes = {
//   id: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

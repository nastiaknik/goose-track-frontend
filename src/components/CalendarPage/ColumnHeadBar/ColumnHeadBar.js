import PropTypes from "prop-types";
import { Wrapper, Title, Button } from "./ColumnHeadBar.styled";
import { AiOutlinePlus } from "react-icons/ai";

export const ColumnHeadBar = ({ title, handleShowModal }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Button type="button" onClick={handleShowModal}>
        <AiOutlinePlus />
      </Button>
    </Wrapper>
  );
};

ColumnHeadBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleShowModal: PropTypes.func.isRequired,
};

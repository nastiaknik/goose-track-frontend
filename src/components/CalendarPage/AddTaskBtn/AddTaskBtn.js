import { Button, PlusSvg, Wrapper } from "./AddTaskBtn.styled";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const AddTaskBtn = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <Button type="button" onClick={onClick}>
      <Wrapper>
        <PlusSvg />
        {t("Add task")}
      </Wrapper>
    </Button>
  );
};

AddTaskBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

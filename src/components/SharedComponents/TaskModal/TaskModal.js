import { TaskForm } from "../TaskForm/TaskForm";
import PropTypes from "prop-types";

export const TaskModal = ({ onClose, task, status, ...props }) => {
  return <TaskForm onClose={onClose} task={task} status={status} {...props} />;
};

TaskModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  task: PropTypes.object,
  status: PropTypes.string,
};
